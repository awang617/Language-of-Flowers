import React, {Component} from 'react'

class Search extends Component {

    render() {
        return (
            <form>
                <select name="search" onChange={this.props.onChange}>
                    <option value="name">Name</option>
                    <option value="meaning">Meaning</option>
                </select>
                <input placeholder="What are you looking for?" onInput={this.props.onInput}/>
                <input type="submit" value="Search"/>
            </form>
        )
    }
}

export default Search