import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { users } from '../actions/dashboard';
import Grid from './common/Grid';

class Dashboard extends Component {
    
    componentWillMount(){
            axios.get('https://jsonplaceholder.typicode.com/users/')
            .then((response) => {
                if(response.data)
                    this.props.users(response.data);
            }).catch((error) => {
               
            });
    }


    render() {
        return (
            <div>
               <Grid data={this.props.data} />
            </div>
        );
    }
}

const mapStateToProps = (state) =>  {
    return {data:state.users};
}

export default connect(mapStateToProps, { users })(Dashboard);