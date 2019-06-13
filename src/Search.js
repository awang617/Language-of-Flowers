import React, {Component} from 'react'
// import {Select, TextInput} from 'react-materialize'

class Search extends Component {

    render() {
        return (
            <form>
                <select name="search" onChange={this.props.onChange}>
                    
                    <option value="name">Name</option>
                    <option value="meaning">Meaning</option>
                </select>
                <input placeholder="search" onInput={this.props.onInput}/>
                {/* <input type="submit" value="Search"/> */}
            </form>
        )
    }
}

export default Search