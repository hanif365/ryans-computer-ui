import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App'
import { useHistory, useLocation } from 'react-router';
import Navbar from '../Navbar/Navbar';
import './Login.css'


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();


    const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    });

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch(err => {
                const errorCode = err.code;
                const errorMessage = err.message;
                const showError = {
                    error: err.message
                }
                setUser(showError);
            });
    }
    return (
        <div className="my-5 py-5 text-center login-container">
            <Navbar></Navbar>
            <button onClick={handleGoogleSignIn} className="btn btn-info px-5">Sign In with Google</button>

        </div>
    );
};

export default Login;