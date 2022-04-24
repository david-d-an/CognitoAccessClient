import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import './Callback.css';
const request = require('request');

const Callback = (props) => {
  const [searchParams] = useSearchParams();
  const [tokensButtonFired, setTokensButtonFired] = useState(false);
  const [originalTokens, setOriginalTokens] = useState({});
  const [refreshedTokens, setRefreshedTokens] = useState({});
  const code = searchParams.get('code');

  const getTokens = (code) => {
    const tokenEndPoint = process.env.REACT_APP_TOKEN_ENDPOINT;
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const scope = process.env.REACT_APP_SCOPE || "email+openid";
    const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
    const grant_type = "authorization_code";
  
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

        setTokensButtonFired(true);

        const { id_token, access_token, refresh_token } = JSON.parse(body);
        setOriginalTokens({ id_token, access_token, refresh_token });
  
        // console.log(`response.statusCode: ${response.statusCode}`);
        // console.log(`body: ${body}`);
        // console.log(`id_token: ${id_token}`);
        // console.log(`access_token: ${access_token}`);
        // console.log(`refresh_token: ${refresh_token}`);
  
        return { id_token, access_token, refresh_token };
      }
    );
  }

  const refreshTokens = (refresh_token) => {
    const tokenEndPoint = process.env.REACT_APP_TOKEN_ENDPOINT;
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const grant_type = "refresh_token";
  
    request.post(
      tokenEndPoint,
      { 
        form: {
          grant_type,
          client_id,
          refresh_token
        }
      },
      function (error, response, body) {
        if (error) {
          console.log(`error: ${error}`);
        }
  
        const { id_token, access_token } = JSON.parse(body);
        setRefreshedTokens({ id_token, access_token });
  
        return { id_token, access_token };
      }
    );
  }

  
  return (<>
    <br/><br/>
    <div style={{display: 'flex', justifyContent: 'center'}} >
      <h2>Callback</h2>
    </div>
    <div className="row">
      <div className={'form-group col-5'} >
        <label>Code:</label>
        <input id="code" type="text" value={code} className={'form-control'} readOnly />
        <label>Code may be used only once to obtain ID Token, Access Token and Refresh Token.</label>
      </div>
    </div>
    <br/>

    <pre><code>
    Method: POST <br/>
    Endpoint: https://auth-virbela-dev.auth.us-east-2.amazoncognito.com/oauth2/token <br/>
    Content-Type: application/x-www-form-urlencoded <br/>
    Body <br/>
    &nbsp;   grant_type: &quot;authorization_code&quot;, <br/>
    &nbsp;   code: &#123; <i>Authentication Code Issued by Cognito after Successful Login</i> &#125; <br/>
    &nbsp;   client_id: &#123; <i>Cognito App Client ID</i> &#125; <br/>
    &nbsp;   scope: &quot;email+openid&quot; <br/>
    &nbsp;   redirect_url: &#123; <i>Redirect URL Registered to Cognito</i> &#125; <br/>
    </code></pre>

    <button 
      onClick={() => getTokens(code)} 
      className={'btn btn-primary'} disabled={!code || tokensButtonFired} >
      Get Tokens
    </button>
    <br/>
    <br/>

    <div>
      <div className={'form-group col-9'} >
        <label>ID Token:</label>
        <br/>
        <textarea value={originalTokens.id_token} className={'form-control'} rows={8} readOnly />
      </div>
      <br/>

      <div className={'form-group col-9'} >
        <label>Access Token:</label>
        <br/>
        <textarea value={originalTokens.access_token} className={'form-control'} rows={8} readOnly />
      </div>
      <br/>

      <div className={'form-group col-9'} >
        <label>Refresh Token:</label>
        <br/>
        <textarea value={originalTokens.refresh_token} className={'form-control'} rows={8} readOnly />
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>



    <pre><code>
    Method: POST <br/>
    Endpoint: https://auth-virbela-dev.auth.us-east-2.amazoncognito.com/oauth2/token <br/>
    Content-Type: application/x-www-form-urlencoded <br/>
    Body <br/>
    &nbsp;   grant_type: &quot;refresh_token&quot;, <br/>
    &nbsp;   client_id: &#123; <i>Cognito App Client ID</i> &#125; <br/>
    &nbsp;   refresh_token: &#123; <i>Refresh Token String</i> &#125; <br/>
    </code></pre>

    <button 
      onClick={() => refreshTokens(originalTokens.refresh_token)} 
      className={'btn btn-primary'}>
      Refresh Tokens
    </button>
    <br/>
    <label>Refresh Token is valid for 30 days to obtain ID Token and Access Token.</label>
    <br/>
    <br/>

    <div>
      <div className={'form-group col-9'} >
        <label>ID Token:</label>
        <br/>
        <textarea value={refreshedTokens.id_token} className={'form-control'} rows={8} readOnly />
      </div>
      <br/>

      <div className={'form-group col-9'} >
        <label>Access Token:</label>
        <br/>
        <textarea value={refreshedTokens.access_token} className={'form-control'} rows={8} readOnly />
      </div>
    </div>
  </>);
}

export default Callback;
