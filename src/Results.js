import React, {Component} from 'react';

class Results extends Component {
    
    render () {
        return (
            <div>
                <p>
                    <a href="/flower">{this.props.flowers.name}</a>, <em>{this.props.flowers.meaning}</em>
                </p>
            </div>
        )
    }
}

export default Results