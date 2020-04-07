import React, { Component } from 'react'
export class DummyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dummyList: []
        }
    }


    async componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/posts";
        console.log(url);
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);
        this.setState({
            dummyList: data
        })
        // this.setState({
        //     dummyList: data
        // })
        console.log(this.state.dummyList)
    }

    render() {
        return (
            <div className="container mt-5 pt-5">
                <div className="row">
                    {this.state.dummyList.map(item => (
                        <div className="col-md-3 p-2">
                            <div className="border p-2" style={{height:"180px"}}>
                                <h6 className="text-success">
                                    {((item.title).length > 30) ?
                                        (((item.title).substring(0, 30)) + '...') :
                                        item.title}
                                </h6>
                                <span className="float-left text-warning">UserId :{item.userId}</span>
                                <span className="float-right text-info">Id :{item.id}</span><br />
                                <div className="text-dark">
                                    {((item.body).length > 120) ?
                                        (((item.body).substring(0, 120)) + '...') :
                                        item.body}

                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        )
    }
}

export default DummyList
