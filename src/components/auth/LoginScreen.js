import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { startLogin,startGoogleLogin  } from '../../actions/auth';

export const LoginScreen = () => {  
     const dispatch = useDispatch();    
    const [formValues, handleInputChange] = useForm({
        email: 'tonovarela@live.com',
        password: "123456w"
    });

    const googleSignIn =()=>{
        dispatch(startGoogleLogin());
    }

    const submit = (e) => {
        
        e.preventDefault();
        console.log({email, password});
        dispatch(startLogin("tonovarela@live","1234"))        
        //dispatch(startGoogleLogin() )

    }
    const { email, password } = formValues;
    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={submit}
            >

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}                    
                    onChange={handleInputChange}
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


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Login
                </button>


                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div
                        className="google-btn"
                        onClick={googleSignIn}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link
                    to="/auth/register"
                    className="link"
                >
                    Create new account
                </Link>

            </form>
        </>
    )
}
