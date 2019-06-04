import React, {Component} from 'react';

class Results extends Component {
    
    render () {
        return (
            <div>
                <p>{this.props.flowers.name}, <em>{this.props.flowers.meaning}</em></p>
            </div>
        )
    }
}

export default Results