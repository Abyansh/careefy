# Item API Spec

## Create Item

Endpoint: POST /api/items

Request Header :
- X-API-TOKEN : token

Request Body:
```json
{ 
  "name": "string",
  "category_id": "integer",
  "description": "string",
  "price": "number",
  
}
```

Request Body (success):
```json
{ 
  "id": 1,
  "name": "string",
  "category_id": "integer",
  "description": "string",
  "price": "number",
  
}
```

Request Body (failed):
```json
{
  "error": "Wrong input..."
}
```

## Get Item
Endpoint: GET /api/items/:id

Request Header :

- X-API-TOKEN : token
Response Body (Success) :
```json
{
  "data" : {
    "id" : 1,
    "name": "string",
    "category_id": "integer",
    "description": "string",
    "price": "number",
    
  }
}
```

Request Body (failed):
```json
{
  "error": "Item not found..."
}
```

## Update Item

Endpoint: PUT /api/items/:id

Request Header :
- X-API-TOKEN : token

Request Body:
```json
{ 
  "name": "string",
  "category_id": "integer",
  "description": "string",
  "price": "number",
  
}
```

Request Body (success):
```json
{ 
  "id": 1,
  "name": "string",
  "category_id": "integer",
  "description": "string",
  "price": "number",
  
}
```

Request Body (failed):
```json
{
  "errors" : "name must not blank, ..."
}
```

## Remove Item
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
  "errors" : "Item is not found"
}
```

## Search Item

Endpoint : GET /api/items

Query Parameters:

- name (string, optional): The name of the item to search for.
- minPrice (number, optional): The minimum price of the item.
- maxPrice (number, optional): The maximum price of the item.
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
    "name": "string",
    "category_id": "integer",
    "description": "string",
    "price": "number",
    
    },
    {
    "id" : 2,
    "name": "string",
    "category_id": "integer",
    "description": "string",
    "price": "number",

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
  "errors" : "Item not found"
}
```