import React, { Component } from "react";


class Todos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newItem: "",
            list: []
        }
    }

    addItem(todoValue) {
        if (todoValue !== "") {
            const newItem = {
                id: Date.now(),
                value: todoValue,
                isDone: false
            };
            const list = [...this.state.list];
            list.push(newItem);
            this.setState({
                list,
                newItem: ""
            })
        }
    }
    deleteItem(id) {
        const list = [...this.state.list];
        const updatedlist = list.filter(item => item.id !== id);
        this.setState({ list: updatedlist });
    }
    updatedInput(input) {
        this.setState({ newItem: input });
    }

    render() {
        return (
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1 className="text-success">To do App</h1>
                        <div className="py-2">
                            Add an items
                            <br/>
                            <input type="text" placeholder="Enter text"
                            className="input-text form-control"
                            style={{width:"80%",display:"unset"}}
                            required
                            value={this.state.newItem}
                            onChange={e=>this.updatedInput(e.target.value)}
                            />
                            <button type="button"
                            className="btn btn-sm btn-primary ml-2 float-right"
                            onClick={()=>this.addItem(this.state.newItem)}
                            disabled={!this.state.newItem.length}
                            >Add Todos</button>

                        </div>
                        <div className="list">
                                {this.state.list.map(item => {
                                    return (
                                    <div className="border-bottom py-3" key={item.id}>
                                        {/* <input
                                            type="checkbox"
                                            name="idDone"
                                            checked={item.isDone}
                                            onChange={() => { }}
                                        /> */}
                                        <span className="p-2">
                                        {/* <b>{item.length + 1}</b> */}
                                        {item.value}

                                        </span>
                                        <button type="button" className="btn float-right btn-sm btn-danger ml-2"
                                            onClick={() => this.deleteItem(item.id)}>Delete</button>
                                    </div>
                                    )
                                })}                               
                        </div>
                    </div>
                </div>

            </div>

        )
    }


}
export default Todos;