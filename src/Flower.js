import React, {Component} from 'react'
import Axios from 'axios'

class Flower extends Component {
    state = {
        flower: {}
    }
        
    componentDidMount() {
        let flowerid = localStorage.flowerid
        Axios.get('http://localhost:3001/flower/'+flowerid)
        .then((response) => {
            this.setState({
                    flower: response.data
                })
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.flower.name}</h1>
                <h3>(<em>{this.state.flower.scientificName}</em>)</h3>
                <h3>{this.state.flower.meaning}</h3>
                <p><a href='/'>Return to search</a></p>
                <img src={this.state.flower.image} />
            </div>
        )
    }
}

export default Flower