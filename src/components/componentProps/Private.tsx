import React from 'react';
import Login from './Login';
import {nameProp} from './Profile'

type compProps = {
    isLoggedIn:boolean
    component:React.ComponentType<nameProp>
}

const Private = ({isLoggedIn,component:Component}:compProps) => {
    if(isLoggedIn){
        return <Component name="raju"/>
    }else{
        return <Login/>
    }
 
}

export default Private