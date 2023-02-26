import React from 'react';
import {useAppSelector} from "../../redux/hooks";

function UseAuth() {
    const {email} = useAppSelector(state => state.user);

    return {
        isAuth: !!email,
        email
    }
}

export default UseAuth;