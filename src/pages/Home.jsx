import React from 'react';
import './Home.css';
require('dotenv').config();

const Home = (props) => {
  const authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT;
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const responseType = process.env.REACT_APP_RESPONSE_TYPE;
  const scope = process.env.REACT_APP_SCOPE;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;

  const link = `${authEndpoint}?client_id=${clientId}&response_type=${responseType}&scope=${scope}&redirect_uri=${redirectUri}`;

  return (<>
    <br/><br/>
    <div style={{display: 'flex', justifyContent: 'center'}} >
      <h2>Home</h2>
    </div>

    <div>
      <label>Authenticaion Endpoint:
        <input id="auth_endpoint" type="text" value={authEndpoint} readOnly />
      </label>
        <br/>
      <label>Client ID:
        <input id="client_id" type="text" value={clientId} readOnly />
      </label>
      <br/>
      <label>Scope:
        <input id="scope" type="text" value={scope} readOnly />
      </label>
      <br/>
      <label>Response Type:
        <input id="response_type" type="text" value={responseType} readOnly />
      </label>
      <br/>
      <label>Redirect URI:
        <input id="redirect_url" type="text" value={redirectUri} readOnly />
      </label>
    </div>
    <br/>

    <a href={link}>Login</a>
  </>);
}

export default Home;
