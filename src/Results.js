import React, {Component} from 'react';
import './Results.css';

class Results extends Component {
    redirectView = () => {
        console.log(this.props.flowers._id)
        localStorage.flowerid = this.props.flowers._id
        window.location.href = '/flower'
    }

    render () {
        return (
            <div>
                <div onClick={this.redirectView} className="search-results">
                    <p className="search-name">{this.props.flowers.name}, </p>
                    <p className="search-meaning"><em>{this.props.flowers.meaning}</em></p>
                </div>
            </div>
        )
    }
}

export default Results