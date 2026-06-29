##

## Node.js
- Node.js is a javaScript runtime.
- Runtime: A program that runs another     program
- Run js in local machine.
- Built on c++
- powered by google chrome  v8 engine
- Used to build: API, real time apps micro-services

===========
## Architecture
- Single threaded
- Non-Blocking I/O operations
- Event loop

========================
- File system
- HTTP
- Path
- URL
- Event
- Callback/Promises/Async-Await 
- Event

=======================
## Express.js
- It is a Node.js API/backend framework
- Used to build Api (Application program interface)
- It simpLies the HTTP module of node.js
- Minimalist, fast and unopinionated framework

## API
- API Format: JSON (javascript object Notation)
- REST API (Representational state transfer) 

### JSON
- Js object => JSON.Stringify()=>JSON
- REST => JSON.parse()=>js object

## HTTP Methods
1. GET- Read/Fetch
2. Post- Create
3. put- UPDATE
4. Delete- Delete
5. Patch-partial update

## Layered Architecture
1. API Layer
   a.Routes: Handle routes/endpoints
   b. Controllers: Handle request/response
   c. Middlewares: Handle request/response, logging, Auth

2. Business logic layer
   a. Services
3. Data logic layer
   a. models
4. Database layer

===========================

- Postman

=======================
## MongoDB
- Non-relational database
- Data are stored in collections & documents
- Database: Main container, all collections are stored here
- Collection: Equivalent to table of related database
- Document: Equivalent to column

## Tools used
- Locally: MongoDB Compass(shell include)
- Cloud: MongoDB Atlas

**Run mongoDB om compass**
1. Open mongoDB compass
2. Setup a new connection (mongodb://localhost:27017)

## MongoDB Queries
- `show dbs` : Shows list of database
- `use <dbname>`: ue existing db or create a new one
- `show collections`: shows list of collection in that db

1. Create
-  db.users.insertOne({name:"Ram"})
- db.users.insertMany([{name:"Hari"}, {name:"Ram"}])

2. Read
- `db.users.find({age:20})` Returns multiple results if exists
- `db.users.findOne({age:20})`

3. Update
- `db.users.updateOne({name:"Manoj"}, {$set:{age:40}})`

4. Delete
db.users.DeleteOne({name:"Manoj"})

## Complex filters
1. $eq: db.users.find({name: {$eq:"Hari"}})
2. $ne: db.users.find({name: {$ne:"Hari}})


# Cryptography

## Encryption
- Encryption: Converting readable text to unreadable/cipher text
- for e.g: Hello-> aijj34j3kejdhdkdd-

- Decryption:Converting cipher text to readable text
- for e.g: aijaeosjej32934--> Hello

#### Types
- Symmetric: same key is used for encryption and decryption
- Assymetric: Different keys are used for encryption and decryption, public/private
Key (RSA)

## Hashing
- One way encryption
- Convert the readable text to cipher text but not back to readable
- Hashing always returns same cipher
- hello => 123445asdfdghf


### Salt
- Adding random characters in the hash
- hello -> 123444hddkdhkssodii
- hello -> 123444hddkdh993939903dii

## Authentication & Authorization
1. Authentication : who you are? Logged in user
2. Authorization : What you can do? user role

## Json web Token (JWT)

- Self verified
- Tamper Proof
- Used for both authentication & authorization

### JWT structure
- Header
- Payload
- Signature

## Storage
1. Cookie Storage
- Size: 4kb
- Storage: Server & Browser
- Expiry: Cookie expiry
 
2. Local Storage
- Size: 5-10MB
- Storage: only Browser
- Expiry: Never

3. Session Storage
- Size: 5MB
- Storage: Only Browser
- Expiry: On tab close

## Auth process
1. Login/Register Success
2. Generate token (jwt)
3. Store token: Cookie, Session, Local storage
4. Append the token in every request to handle auth
5. Verify the token and authenticate/authorize user


### Middleware
- Function that lies between request and response
- Function that has access of both request and response objects
- It has additional functionality to go to next()middleware call

Browser---------Request--------->Server
Middleware, Middleware, middleware
Server-----------Response----------->Brower

### Usage
- Logging
- Authentication & Authorization
- Requests & Response object modification
- Error handling
- Data validation



==================================


