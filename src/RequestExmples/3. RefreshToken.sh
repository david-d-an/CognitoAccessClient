curl --location --request \
POST \
'https://auth-virbela-dev.auth.us-east-2.amazoncognito.com/oauth2/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Cookie: XSRF-TOKEN=c38a3eef-ab18-4e64-8843-3a3318865355' \
--data-urlencode 'grant_type=refresh_token' \
--data-urlencode 'client_id=2qkqn0f8vgfdmfieel7ohu308i' \
--data-urlencode 'refresh_token={****your_refresh_token****}' \