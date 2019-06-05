import React, {Component} from 'react'
import Search from './Search'
import Results from './Results'
import Axios from 'axios';

class SearchContainer extends Component {
    state= {
        query: '',
        response: [],
        search: 'name'
    }

    search = () => {
        Axios.get(`http://localhost:3001/search/`+this.state.search, {
            params: {
                q: this.state.query
            }
        })
        .then((response) => {
            this.setState({
                response: response.data
            })
            // console.log(this.state.response)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if (this.state.response === 0 && this.state.query === nextState.query) {
            return false
        }
        return true
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.query !== this.state.query) {
            this.search()
        }
    }

    onInput = (event) => {
        this.setState({
            query: event.target.value
        })
        console.log(this.state.query)
    }

    change = (event) => {
        this.setState({
            search: event.target.value
        })
        console.log(event.target.value)
    }

    render() {
        let results;
        let searchResults =  this.state.response;
        if (searchResults) {
            results = searchResults.map((flowers) => {
                return (
                    <Results flowers={flowers} key={flowers.id} />
                )
            });
        }
        return (
            <div>
                <Search onInput={this.onInput} onChange={this.change} search={this.state.search}/>
                {results}
            </div>
        )
    
    }
}

export default SearchContainer