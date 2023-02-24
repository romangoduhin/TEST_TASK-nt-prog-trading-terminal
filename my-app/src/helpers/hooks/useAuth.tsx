import React from 'react';
import {useAppSelector} from "../../redux/hooks";

function UseAuth() {
    const {email, token, id} = useAppSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}

export default UseAuth;