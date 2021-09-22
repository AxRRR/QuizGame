import React from 'react';
import { Fragment } from 'react';
import { Login } from './Login';

export const Authentication = () => {
    // const [RegisterScreen, setRegisterScreen] = useState(false)
    // const [LoginScreen, setLoginScreen] = useState(false)
    // const [hideAuthScreen, sethideAuthScreen] = useState(false)

    // const OptionHandler = (type = null, arg) => {

    //     if(type === 'login'){

    //         switch (arg) {
    //             case true:
    //                 return setLoginScreen(false)
                
    //             case false:
    //                 if(RegisterScreen){
    //                     setLoginScreen(true)
    //                     setRegisterScreen(false)
    //                 } else {
    //                     setLoginScreen(true)
    //                 }
                            
    //               break;
                
    //             default:
    //                 break;
    //         }
    //     }

    //     if(type === 'register'){

    //         switch (arg) {
    //             case true:
    //                 return setRegisterScreen(false)
                
    //             case false:
    //                 if(LoginScreen){
    //                     setRegisterScreen(true)
    //                     setLoginScreen(false)
    //                 } else {
    //                     setRegisterScreen(true)
    //                 }
    //                 break;
                
    //             default:
    //                 break;
    //         }
    //     }
    // }

    return (
        <Fragment>
            <div>
                <Login />
            </div>
        </Fragment>
    );
};
