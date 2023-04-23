import { INCREMENT, DECREMENT } from '../action/counterAction'

const INITIAL_STATE = {
    Account: {
        User_id: '',
        Password: '',
        First_Name: '',
        Last_Name: '',
        DoB: '',
        Avater: '',
        Background: '',
        Bpoint: '',
        Email: ''

    },
    nomal: false

}

const userReducer = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {

        case 'FETCH_USER_LOGIN_SUCCESS':
            return {
                ...state, Account: {
                    User_id: action?.payload?.content?.user_id,
                    Password: action?.payload?.content?.password,
                    First_Name: action?.payload?.content?.first_name,
                    Last_Name: action?.payload?.content?.last_name,
                    DoB: action?.payload?.content?.dob,
                    Avater: action?.payload?.content?.avatar,
                    Background: action?.payload?.content?.background,
                    Bpoint: action?.payload?.content?.bpoint,
                    Email: action?.payload?.content?.email,

                },
                nomal: true
            };
        case 'FETCH_USER_LOGOUT_SUCCESS':
            return {
                Account: {
                    User_id: '',
                    Password: '',
                    First_Name: '',
                    Last_Name: '',
                    DoB: '',
                    Avater: '',
                    Background: '',
                    Bpoint: '',
                    Email: ''
            
                },
                nomal: false
            
            };
        default: return state;
    }
};

export default userReducer;