import React, { useContext } from 'react';
import { auth, provider } from './firebase'
import { useConsumer } from './Context'




function Login(props) {
    const [state, dispatch] = useConsumer()

    function signIn() {
        auth.signInWithPopup(provider)
            .then(result => {
                    dispatch({type:'SET_USER', payload:result})
            })
            .catch(err => alert(err.message))
    }
    return (
        <div>
            <button onClick={signIn}>Sign in</button>
        </div>
    );
}

export default Login;