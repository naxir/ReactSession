const INITIAL_STATE = { email:'', password:'', data:[] };

export default (state = INITIAL_STATE, action) => {debugger;
    switch (action.type) {
        case 'email_changed':
            return [...state.email, action.payload ];
        case 'password_changed':
            return [...state.password, action.payload ];
        case 'login_success':
            return [...state.data, action.payload ];
        case 'login_failed':
            return [...state.data, action.payload ];
        default:
            return state;
    }
} 
