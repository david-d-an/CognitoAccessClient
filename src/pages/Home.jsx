import React from 'react';
import './Home.css';
require('dotenv').config();

const Home = (props) => {
  const authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT;
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const responseType = process.env.REACT_APP_RESPONSE_TYPE;
  const oauth_scope = process.env.REACT_APP_SCOPE;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;

  const link = `${authEndpoint}?client_id=${clientId}&response_type=${responseType}&scope=${oauth_scope}&redirect_uri=${redirectUri}`;

  return (<>
    <br/><br/>
    <div style={{display: 'flex', justifyContent: 'center'}} >
      <h2>Home</h2>
    </div>

    <div>
      <div className="row">
        <div className={'form-group col-8'} >
          <label>Authenticaion Endpoint:</label>
          <input id="auth_endpoint" type="text" value={authEndpoint} className={'form-control'} readOnly />
        </div>
      </div>

      <div className="row">
        <div className={'form-group col-8'} >
          <label>Client ID:</label>
          <input id="client_id" type="text" value={clientId} className={'form-control'} readOnly />
        </div>
      </div>

      <div className="row">
        <div className={'form-group col-8'} >
          <label>OAuth Scope:</label>
          <input id="oauth_scope" type="text" value={oauth_scope} className={'form-control'} readOnly />
        </div>
      </div>

      <div className="row">
        <div className={'form-group col-8'} >
          <label>Response Type:</label>
          <input id="response_type" type="text" value={responseType} className={'form-control'} readOnly />
        </div>
      </div>

      <div className="row">
        <div className={'form-group col-8'} >
          <label>Redirect URI:</label>
          <input id="redirect_url" type="text" value={redirectUri} className={'form-control'} readOnly />
        </div>
      </div>
    </div>
    <br/>
    <br/>

    <label>Log in through Cognito to obtain security tokens.</label>
    <br/>
    <a href={link} className={'btn btn-primary'} >Login</a>
  </>);
}

export default Home;
