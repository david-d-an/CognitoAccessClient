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

    return (
        <div>
            <h1>Home</h1>

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

            <a className="btn btn-primary btn-lg" href={link}>Login</a>
        </div>
    );
}

export default Home;
