import React, {useState} from 'react';
import './Login.css';
import { Link , useHistory } from "react-router-dom";
import { auth } from './firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

const login = (e) => {
    console.log("------------------!!!!");
    e.preventDefault(); // stop refresh

    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
        // logged in successfully, redirect
        
        history.push('/');
    })
    .catch(e => alert(e.message));
}
const register = (e) => {
  e.preventDefault();   // stop refresh

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
        // create a user and logged in.  Redirect to home page.
        history.push("/");
    })
    .catch((e) => alert(e.message));
};

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://cdn.clipart.email/3c8f8f66c9df89785dbbcccc76c91cab_online-free-logo-maker-e-commerce-cart-logo-maker_450-387.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1> Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            type="email"
            onChange={(evnet) => setEmail(evnet.target.value)}
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(evnet) => setPassword(evnet.target.value)}
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>By signing in you aregree to ecomm....</p>
        <button
          onClick={register}
          type="submit"
          className="login__registerButton"
        >
          Create an Account
        </button>
      </div>
    </div>
  );
}

export default Login
