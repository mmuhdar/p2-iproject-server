# H-NIME Documentation

&nbsp;

## Endpoint User

&nbsp;

### POST /login

> Login user

_Request Header_

```
not needed
```

_Request Body_

```json
{
  "email": "test@mail.com",
  "password": "password"
}
```

_Response (201 - Created)_

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXRAYXdzLmNvbSIsImlhdCI6MTYyOTk0MTU1NCwiZXhwIjoxNjI5OTQ1MTU0fQ.2Z4NjBE5fZKNPnWDMXEcnvTlEmtyrFxAjmXDLJrktU8",
  "role": "admin"
}
```

_Response (400 - Bad request)_

```json
{
  "message": "Email/password invalid"
}
```

_Response (500 - Internar Server Error)_

```json
{
  "message": "Internal server error"
}
```

---

### POST /register

> Register user

_Request Header_

```
not needed
```

_Request Body_

```json
{
  "name": "Acong",
  "email": "acong@mail.com",
  "password": "password"
}
```

_Response (201 - Created)_

```json
{
  "id": 2,
  "email": "acong@mail.com"
}
```

_Response (400 - Bad request)_

```json
{
    "message": [
        "<field> required"
        ...
    ]
}
```

_Response (500 - Internar Server Error)_

```json
{
  "message": "Internal server error"
}
```

---

&nbsp;

## Endpoint Anime

&nbsp;

### GET /anime

> Get all animes

_Request Header_

```json
{
  "access_token": "string",
  "params": {
    "page": "number" (required),
    "title": "string" (optional)
  }
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```json
{
  "totalItems": 2,
  "animes": [
    {
      "id": 166,
      "title": "Barakamon",
      "type": "TV",
      "episodes": 12,
      "image_url": "https://cdn.myanimelist.net/images/anime/1426/111248.jpg?s=8abf35da87707ea81557e0287f88eb76",
      "mal_id": 22789,
      "createdAt": "2021-08-24T17:00:20.555Z",
      "updatedAt": "2021-08-24T17:00:20.555Z",
      "Episodes": [
        {
          "id": 2,
          "title": "episode 1",
          "videoUrl": "https://www.youtube.com/watch?v=D3e_M2fjH04",
          "animeId": 166,
          "createdAt": "2021-08-24T17:00:43.661Z",
          "updatedAt": "2021-08-24T17:00:43.661Z"
        },
        {
          "id": 3,
          "title": "episode 2",
          "videoUrl": "https://www.youtube.com/watch?v=jKLD3rLA5cg",
          "animeId": 166,
          "createdAt": "2021-08-24T17:01:41.229Z",
          "updatedAt": "2021-08-24T17:01:41.229Z"
        }
      ]
    }
  ],
  "totalPages": 1,
  "currentPage": 1
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

---

### GET /animes/:id

> Get job with spesific id

_Request Header_

```json
{
  "access_token": "string",
  "params": {
    "id": "number" (required)
  },
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```json
{
  "id": 150,
  "title": "Haikyuu!! Second Season",
  "type": "TV",
  "episodes": 25,
  "image_url": "https://cdn.myanimelist.net/images/anime/9/76662.jpg?s=06ccfffc7b27ac5532d268b9934a224a",
  "mal_id": 28891,
  "createdAt": "2021-08-24T16:57:43.729Z",
  "updatedAt": "2021-08-24T16:57:43.729Z",
  "Episodes": []
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Not Found"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Invalid params input"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

---

### GET /animes/search

> Search anime with hiting third API party

_Request Header_

```json
{
  "access_token": "string",
  "params": {
    "title": "string" (required)
  }
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```json
[
    {
        "mal_id": 20,
        "url": "https://myanimelist.net/anime/20/Naruto",
        "image_url": "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
        "title": "Naruto",
        "airing": false,
        "synopsis": "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'...",
        "type": "TV",
        "episodes": 220,
        "score": 7.94,
        "start_date": "2002-10-03T00:00:00+00:00",
        "end_date": "2007-02-08T00:00:00+00:00",
        "members": 2177399,
        "rated": "PG-13"
    },
  ....
]
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

---

### POST /animes/:id

> Create data if dont exist and find data if exist

_Request Header_

```json
{
  "access_token": "string",
  "params": {
    "id": "number"
  }
}
```

_Request Body_

```json
{
  "title": "Himouto ! Umaru-chan",
  "type": "TV",
  "episodes": 12,
  "image_url": "https://cdn.myanimelist.net/images/anime/12/75086.jpg?s=3859e8b6e84fb62187f8f71e86f02484",
  "mal_id": 28825
}
```

_Response (201 - Created)_

```json
{
  "id": 170,
  "title": "Himouto ! Umaru-chan",
  "type": "TV",
  "episodes": 12,
  "image_url": "https://cdn.myanimelist.net/images/anime/12/75086.jpg?s=3859e8b6e84fb62187f8f71e86f02484",
  "mal_id": 28825,
  "updatedAt": "2021-08-26T01:47:32.800Z",
  "createdAt": "2021-08-26T01:47:32.800Z"
}
```

_Response (400 - Bad Request)_

```json
{
    "message": [
        "<field> required",
        ...
    ]
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

---

### POST /episodes/:animeId

> Post episode with spesific id

_Request Header_

```json
{
  "access_token": "string"
}
```

_Request Body_

```json
{
  "title": "Naruto",
  "videoUrl": "https://ik.imagekit.io/e8oawqcpcm4/nestjs_J6mVM0RYzaJ.png",
  "animeId": 1
}
```

_Response (200 - OK)_

```json
{
  "message": "Success add episodes"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Not Found"
}
```

_Response (400 - Bad Request)_

```json
{
    "message": [
        "<field> required",
        ...
    ]
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

---
