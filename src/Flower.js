import React, {Component} from 'react'
import Axios from 'axios'
import {Container, Row, Col, Image} from 'react-bootstrap'
import './Flower.css'

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
            <Container>
                <Row>
                    <Col sm>
                        <h1 className="name">{this.state.flower.name}</h1>
                        <h4 className="scientific-name">(<em>{this.state.flower.scientificName}</em>)</h4>
                        <h4 className="meaning">{this.state.flower.meaning}</h4>
                        <p>{this.state.flower.description}</p>
                        <a href={this.state.flower.sources}>Source</a>
                    </Col>
                    <Col sm>
                        <Image src={this.state.flower.image} alt={this.state.flower.name} fluid/>
                        <p><a href='/'>Return to search</a></p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Flower