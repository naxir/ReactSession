export const users = (data) => {
    return ({
        type: 'recive_users',
        payload: data
    });
}