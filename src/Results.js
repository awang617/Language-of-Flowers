import React, {Component} from 'react';

class Results extends Component {
    redirectView = () => {
        console.log(this.props.flowers._id)
        localStorage.flowerid = this.props.flowers._id
        window.location.href = '/flower'
    }

    render () {
        return (
            <div>
                <p onClick={this.redirectView}>
                    {this.props.flowers.name}, <em>{this.props.flowers.meaning}</em>
                </p>
            </div>
        )
    }
}

export default Results