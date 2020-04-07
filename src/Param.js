import React, { Component } from 'react';

class Param extends Component {

    render() {
        let users ={
            1233:{
                name: 'haider',
                cell:'xyz'
            },
            1244:{
                name: 'kumar',
                cell:'abc'
            },
            1255:{
                name: 'mohan',
                cell:'kio'
            }
        }

        let requiredUser = users[this.props.match.params.id];

        return (
            <div className="container pt-5 mt-5">
                <h1 className="text-info">this is parameter value Page</h1>

                User Name : {requiredUser.name}
                <br/>
                User Cell : {requiredUser.cell}

            </div>
        );
    }
}

export default Param;
