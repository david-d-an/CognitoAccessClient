import React from 'react';
import './Home.css';
require('dotenv').config();

const Home = (props) => {
    // const authEndpoint = process.env.AUTH_ENDPOINT;
    // const clientId = process.env.CLIENT_ID;
    // const responseType = process.env.RESPONSE_TYPE;
    // const scope = process.env.SCOPE;
    // const redirectUri = process.env.REDIRECT_URI;
    const authEndpoint = "https://auth-virbela-dev.auth.us-east-2.amazoncognito.com/login";
    const clientId = "2qkqn0f8vgfdmfieel7ohu308i";
    const responseType = "code";
    const scope = "email+openid";
    const redirectUri = "http://localhost:3030/callback";

    const link = `${authEndpoint}?client_id=${clientId}&response_type=${responseType}&scope=${scope}&redirect_uri=${redirectUri}`;

    return (
        <div>
            <h1>Home</h1>

            <form>
                <label>Authenticaion Endpoint:
                    <input id="auth_endpoint" type="text" value={authEndpoint} />
                </label>
                <br/>
                <label>Client ID:
                    <input id="client_id" type="text" value={clientId} />
                </label>
                <br/>
                <label>Scope:
                    <input id="scope" type="text" value={scope} />
                </label>
                <br/>
                <label>Response Type:
                    <input id="response_type" type="text" value={responseType} />
                </label>
                <br/>
                <label>Redirect URI:
                    <input id="redirect_url" type="text" value={redirectUri} />
                </label>
            </form>

            <a href={link}>Login</a>
        </div>
    );
}

export default Home;
