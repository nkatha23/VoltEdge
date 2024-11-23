import { useState,useCallback,useEffect } from "react";
import './Auth.css'; // Import the CSS file
import {useauth} from '../../services'

function Auth() {
  // const navigate = useNavigate();
  const [principal, setprincipal] = usestate('');
  const {  login, logout, agent,auth } = useAuth();


 const fetchPrincipal = useCallback(() => {
    // agent..then(principal => setPrincipal(principal.toString()));
    authClient.getIdentity()
      .then(identity => identity?.getPrincipal()?.toString() || 'NOT AUTHORIZED')
      .then(setPrincipal)
  }, [authClient]);
  useEffect(fetchPrincipal, []);
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <p>Authorized as {principal}</p>
        <button onClick={() => login().then(fetchPrincipal)}>Auth!</button>
        <button onClick={() => logout().then(fetchPrincipal)}>Logout</button>
      </header>
    </div>
  )
};

export default Auth;
