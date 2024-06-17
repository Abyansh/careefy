# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
    "username": "johnDoe",
    "email": "johndoe@example.com",
    "password": "password123"
}
```
Response Body (success):

```json
{
    "data" :{
        "username":"johnDoe",
        "email": "johndoe@example.com"
    }
}
```
Response Body (failed) :

```json
{
  "errors": "Username must no blank, ..."
}
```
## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
    "email": "johndoe@example.com",
    "password": "password123"
}
```
Response Body (success):

```json
{
    "data" :{
        "username":"johnDoe",
        "email": "johndoe@example.com",
        "token": "your_token"
    }
}
```
Response Body (failed) :

```json
{
  "errors": "Invalid Username or Password, ..."
}
```
## Get User

Endpoint : GET /api/users/current

Request Header :
- X-API-TOKEN : token :

Response Body (success):

```json
{
    "data" :{
        "username":"johnDoe",
        "email": "johndoe@example.com"
    }
}
```
Response Body (failed) :

```json
{
  "errors": "Unauthorized, ..."
}
```
## Update User

Endpoint : PATCH /api/users/current

Request Body :

```json
{
    "username":"johnDoe",
    "password":"password123"
}
```

Response Body (success):

```json
{
    "data" :{
        "username":"johnDoe",
        "email": "johndoe@example.com"
    }
}
```
Response Body (failed) :

```json
{
  "errors": "Unauthorized, ..."
}
```
## Logout User

Endpoint : DELETE /api/users/current

Request Header :

- X-API-TOKEN : token
Response Body (Success) :

```json
{
  "data" : "OK"
}
```

Response Body (Failed) :

```json
{
  "errors" : "Unauthorized, ..."
}
```