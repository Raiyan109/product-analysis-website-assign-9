import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import './Login.css'

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        general: '',
    })

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailChange = e => {

        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value)

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: '' })
        }
        else {
            setErrors({ ...errors, email: 'Invalid email' })
            setUserInfo({ ...userInfo, email: '' })
        }
    }

    const handlePasswordChange = e => {
        const passwordRegex = /.{6,}/
        const validPassword = passwordRegex.test(e.target.value)

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value })
            setErrors({ ...errors, password: '' })

        }
        else {
            setErrors({ ...errors, password: 'Minimum 6 characters' })
            setUserInfo({ ...userInfo, password: '' })

        }
    }

    const handleLogin = e => {
        e.preventDefault()
        // signInWithEmailAndPassword(email, password)
    }
    // console.log(email, password)

    return (
        <div className='login-container'>
            <div className="login-title">LOGIN </div>
            <form className='login-form' onSubmit={handleLogin}>
                <input type="text" placeholder='Your Email' onChange={handleEmailChange} />
                {errors?.email && <p className='error-message'>{errors.email}</p>}
                <input type="password" placeholder='password' name="" id="" onChange={handlePasswordChange} />
                {errors?.password && <p className='error-message'>{errors.password}</p>}
                <button>Login</button>

                {/* {error && <p className='error-message'>{error}</p>} */}
                {hookError && <p className='error-message'>{hookError?.message}</p>}
            </form>
        </div>
    );
};

export default Login;