const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'recive_users':
            return [...state, ...action.payload ];
        default:
            return state;
    }
} 
