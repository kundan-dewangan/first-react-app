import React, { Component } from "react";
import { CardDeck, Card } from 'react-bootstrap';
import logo from './logo.svg';
class CarList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // loading: true,
            // images: [],
            // make:[],
            // model:[],
            // location: []
            carList: []
        };

    }

    async componentDidMount() {
        // const url = "https://admin.borrowen.com/api/v1/vehicle/recently?category=5d78c50c50ddab75e0c11af6";
        const url = "https://admin.borrowen.com/api/v1/vehicle/list?long=82.7239135&categoryid=5d78c50c50ddab75e0c11af6&from=2020-03-29&until=2020-04-05&lat=22.372894700000003";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({
            carList: data
        })

        for (const items of data) {
            var img = "";
            if (items.images) {
                for (const imgData of items.images) {
                    // this.state.images.push(imgData.url);
                    img = imgData.url;
                }
            }
            // this.state.make.push(items.basic.make);
            // this.state.model.push(items.basic.model);
            // this.state.location.push(items.address);
            // this.state.carList.push({ id: items.id, images: img, make: items.basic.make, model: items.basic.model, address: items.address });
        }
        // console.log("hey");
        // console.log(this.state.images);
        // console.log(this.state.make);
        // console.log(this.state.model);
        // console.log(this.state.location);
        // console.log("hey");
        // console.log(this.state.carList);
    }


    render() {
        const { ssss } = this.state;
        // const nameList = carList.map(name =>{
        //     console.log(name.images);
        // })

        // if (this.state.loading) {
        //     return <div>Loading...</div>
        // }
        // if (!this.state.person) {
        //     return <div>didn't get a person</div>
        // }

        return (
            <div className="container mt-5 pt-5">
                <div className="row">
                {this.state.carList.map(item => (
                    <div className="col-md-4">
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={item.images.map(aa => (aa.url))} />
                            <Card.Body>
                                <Card.Title>{item.basic.make}</Card.Title>
                                <Card.Title>{item.basic.model}</Card.Title>
                                <Card.Text>
                                    {item.address}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                    </div>
                ))}
                </div>
            </div>

        )
    }
}
export default CarList;