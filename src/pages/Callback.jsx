import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import './Callback.css';
const request = require('request');
require('dotenv').config();

const Callback = (props) => {
    const [searchParams] = useSearchParams();
    const [tokens, setTokens] = useState({});
    const code = searchParams.get('code');

    return (
        <div>
            <div>
                <h1>Callback</h1>
                <p>code: {code}</p>
                <p>ID Token: {tokens.id_token} </p>
                <p>Access Token: {tokens.access_token} </p>
                <p>Refresh Token: {tokens.refresh_token} </p>
            </div>

            <button
                className="btn btn-primary btn-lg"
                onClick={() => getTokens(code, setTokens)} 
            >Get Tokens</button>
        </div>
    );
}


const getTokens = (code, setTokens) => {
    const tokenEndPoint = process.env.REACT_APP_TOKEN_ENDPOINT;

    request.post(
        tokenEndPoint,
        { 
            form: {
                grant_type: "authorization_code",
                code,
                client_id: "2qkqn0f8vgfdmfieel7ohu308i",
                redirect_uri: "http://localhost:3030/callback",
                scope: "email+openid"
            }
        },
        function (error, response, body) {
            if (error) {
                console.log(`error: ${error}`);
            }

            // console.log(`response.statusCode: ${response.statusCode}`);
            // console.log(`body: ${body}`);
            // console.log(`id_token: ${body.id_token}`);
            // console.log(`access_token: ${body.access_token}`);
            // console.log(`refresh_token: ${body.refresh_token}`);
            
            const { id_token, access_token, refresh_token } = JSON.parse(body);
            setTokens({ id_token, access_token, refresh_token });

            console.log(`body: ${body}`);
            console.log(`id_token: ${id_token}`);
            console.log(`access_token: ${access_token}`);
            console.log(`refresh_token: ${refresh_token}`);

            return { id_token, access_token, refresh_token };
        }
    );
}

export default Callback;
