import React, { Component } from 'react';
export default class Grid extends Component {

    createGrid(record) {
        return record.map((rec) => {
            return(
                <div className="col-sm-4">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title"> <span className="btn">{ rec.id }</span></h3>
                  </div>
                  <div className="panel-body">
                    <b>User Name</b><p> { rec.username } </p>
                    <b>Email</b><p> { rec.email } </p>
                    <b>Website</b><p> { rec.website } </p>
                    <b>Phone</b><p> { rec.phone } </p>
                  </div>
                </div>
              </div>
            );
        })
    }

    render() {
        return (
            <div>
                {this.createGrid(this.props.data)}
            </div>
        );
    }
}

