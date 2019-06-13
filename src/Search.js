import React, {Component} from 'react'
import {InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap'

class Search extends Component {

    render() {
        return (
            <InputGroup>
                <DropdownButton name="search"  title={this.props.search}>
                    
                    <Dropdown.Item onClick={this.props.onClick} value="name">Name</Dropdown.Item>
                    <Dropdown.Item onClick={this.props.onClick} value="meaning">Meaning</Dropdown.Item>
                </DropdownButton>
                <FormControl placeholder="search" onInput={this.props.onInput}/>
                {/* <input type="submit" value="Search"/> */}
            </InputGroup>
        )
    }
}

export default Search