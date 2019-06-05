import React, {Component} from 'react'
import SearchContainer from './SearchContainer'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>The Language of Flowers</h1>
                <h3>Search for flowers or their meanings!</h3>
                <SearchContainer />
            </div>
        )
    }
}

export default Home