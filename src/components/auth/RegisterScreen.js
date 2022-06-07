import React from 'react';
import validator from 'validator'


import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';

import {removeError,setError } from '../../actions/ui'

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        name: "Varelass",
        email: "tonovarela@live.com",
        password: "12345",
        password2: "12345"
    })

    const { name, email, password, password2 } = formValues;


    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            
            console.log("formulario correcto");
        }
    }

    const isFormValid = () => {
        if (name.trim().length===0){
            dispatch(setError("Name is required"));            
            return false;
        }
        if (!validator.isEmail(email)){            
            dispatch(setError("Email is not valid"));
            return false;
        }
        if (password!==password2 || password.length<5){
            dispatch(setError("Seccion de password incorrecto"));            
            return false;
        }
        dispatch(removeError(""))
        return true
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>
                <div className='auth__alert-error'>
                    Hola mundo
                </div>
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={name}
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="text"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    onChange={handleInputChange}
                    value={password2}
                    name="password2"
                    className="auth__input"
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>



                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
