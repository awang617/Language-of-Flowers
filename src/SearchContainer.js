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
        var q = event.target.value;
        var lowerq = q.toLowerCase()
        this.setState({
            query: lowerq
        })
        console.log(this.state.query)
    }

    change = (event) => {
        // console.log(event.currentTarget.attributes.value.nodeValue)
        // debugger;
        this.setState({
            search: event.currentTarget.attributes.value.nodeValue
        })
        console.log(this.state.search)
    }

    render() {
        let results;
        let searchResults =  this.state.response;
        if (searchResults) {
            results = searchResults.map((flowers) => {
                return (
                    <Results flowers={flowers} key={flowers._id} />
                )
            });
        }
        return (
            <div>
                <Search onInput={this.onInput} onClick={this.change} search={this.state.search}/>
                {results}
            </div>
        )
    
    }
}

export default SearchContainer