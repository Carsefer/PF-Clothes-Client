import React, {createContext,useEffect,useState} from 'react';
import axios from 'axios';
import { getSession,setSession } from '../sessionUtils/jwtSession';

export const session = createContext({});

export default function Context(props){

    const [userObject,setUserObject] = useState();

    useEffect(() => {
        axios.get("http://localhost:3001/auth/user",{withCredentials:true}).then(res => {
            if(res.data){
                setSession(res.data);
            }
        },(err) => {
            console.log("no google user data");
        }) 
    },[userObject])
    return(
        <session.Provider value={userObject}>{props.children}</session.Provider>
    );
}