# Forum API Spec

## Create comment

Endpoint: POST /api/comments

Request Header :
- X-API-TOKEN : token

Request Body:
```json
{ 
  "author": "string",
  "waktu_post": "string",
  "isi_post": "string",
}
```

Request Body (success):
```json
{ 
  "data" : {
    "id": 1,
    "author": "string",
    "waktu_post": "string",
    "isi_post": "string",
  }
}
```

Request Body (failed):
```json
{
  "error": "Wrong input..."
}
```

## Get comment
Endpoint: GET /api/comments/:id

Request Header :

- X-API-TOKEN : token
Response Body (Success) :
```json
{
  "data" : {
    "id": 1,
    "author": "string",
    "waktu_post": "string",
    "isi_post": "string",
  }
}
```

Request Body (failed):
```json
{
  "error": "comment not found..."
}
```

## Update comment

Endpoint: PUT /api/comments/:id

Request Header :
- X-API-TOKEN : token

Request Body:
```json
{ 
  "isi_post": "string"
}
```

Request Body (success):
```json
{ 
  "data" : {
    "id": 1,
    "author": "string",
    "waktu_post": "string",
    "isi_post": "string",
  }
}
```

Request Body (failed):
```json
{
  "errors" : "name must not blank, ..."
}
```

## Remove comment
Endpoint : DELETE /api/contacts/:id

Request Header :

X-API-TOKEN : token
Response Body (Success) :
```json
{
  "data" : "OK"
}
```

Response Body (Failed) :
```json
{
  "errors" : "comment is not found"
}
```

## Search Item

Endpoint : GET /api/items

Query Parameters:

- author (string, optional): The author of the comments to search for.
- isi_post (string, optional): A substring to search for within the comment isi_post.
- page : number, default 1.
- size : number, default 10.

Request Header :

X-API-TOKEN : token
Response Body (success) :

```json
{
  "data" : [
    {
    "id": 1,
    "author": "string",
    "waktu_post": "string",
    "isi_post": "string"
    },
    {
    "id" : 2,
    "author": "string",
    "waktu_post": "string",
    "isi_post": "string"
    }
  ],
  "paging" : {
    "current_page" : 1,
    "total_page" : 10,
    "size" : 10
  }
}
```
Response Body(fail) :
```json
{
  "errors" : "Comment not found"
}
```