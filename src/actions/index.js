import axios from 'axios';
import {browserHistory} from "react-router"
export const loginClicked = (email,password) => {debugger;
     return (dispatch) => {
        axios.post('http://logviewer.togethersupport.co.uk/api/Account/Login', { Email: email, Password: password})
        .then((response) => {
            if(response.data.success){
                dispatch({
                    type:'login_success',
                    payload:response.data
                 });
                 browserHistory.push("/Dashboard")
            }else{
               dispatch({
                    type:'login_failed',
                    payload:response.data
                 });
            }
        }).catch((error) => {
            console.log('failed');
            this.onFail();
        });
     }
}