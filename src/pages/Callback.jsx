import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import './Callback.css';
const request = require('request');

const Callback = (props) => {
  const [searchParams] = useSearchParams();
  const [tokens, setTokens] = useState({});
  const code = searchParams.get('code');

  return (<>
    <br/><br/>
    <div style={{display: 'flex', justifyContent: 'center'}} >
      <h2>Callback</h2>
    </div>
    <div>
      <label>Code:
        <input id="code" type="text" value={code} readOnly />
      </label>
    </div>
    <br/>

    <button onClick={() => getTokens(code, setTokens)} >Get Tokens</button>
    <br/>
    <br/>

    <div>
      <label>ID Token:</label>
      <textarea value={tokens.id_token} readOnly />
      <br/>
      <label>Access Token:</label>
      <textarea value={tokens.access_token} readOnly />
      <br/>
      <label>Refresh Token:</label>
      <textarea value={tokens.refresh_token} readOnly />
    </div>
  </>);
}


const getTokens = (code, setTokens) => {
  const tokenEndPoint = process.env.REACT_APP_TOKEN_ENDPOINT;
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const scope = process.env.REACT_APP_SCOPE || "email+openid";
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
  const grant_type = process.env.REACT_APP_GRANT_TYPE || "authorization_code";

  // console.log(`tokenEndPoint: ${tokenEndPoint}`);
  // console.log(`client_id: ${client_id}`);
  // console.log(`scope: ${scope}`);
  // console.log(`redirect_uri: ${redirect_uri}`);
  // console.log(`grant_type: ${grant_type}`);

  request.post(
    tokenEndPoint,
    { 
      form: {
        grant_type,
        code,
        client_id,
        redirect_uri,
        scope
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
