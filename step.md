# STEP 0

install typescript
```
npm i -g typescript
```

initial project

```
npm init -y
```

install fastify

```
npm i fastify -S
```

install typings
```
npm i -D typescript @types/node
```

initial typescript project
```
tsc --init 
```

create `src` folder

create `typings` folder

edit `tsconfig.json`

create `.gitignore`

create `server.ts`

edit `pacakge.json` for start `nodemone` with command `npm start`

start server with command `npm start`

open `http://127.0.0.1:8080`

# Step 1

## MVC Structure

- Create `controllers` folder
- Create `models` folder
- Create `router.ts` file
- Create `app.ts` for main configuration file
- Change `server.ts` for controllers
- Create routes 

# Step 2 Basic of Routing (CRUD routing)

- Create `controllers/demo.ts`
- Update `route.ts`
- add `fastify-cors`
- add `fastify-formbody`

- Create `POST` route
- Create `GET` route
- Create `PUT` route
- Create `DELETE` route

# Step 3 Database settings
- install `knexjs`
```
npm install fastify-knexjs knex mysql2 --save
```
- configure fastify-knexjs plugin
- Create database/table
- Test connection
  - Create test model
  - Create test route
  - Create typings `typings/fastify.d.ts`

  # Step 4 CREATE
  - Create user
    - Create `models/user.ts`
    - Create `controllers/users.ts`
    - Update `route.ts`
  
  # Step 5 READ
  - Update `models/user.ts`
  - Update `controllers/users.ts`
    - read all
    - query

  # Step 6 UPDATE (Update info/password)
  - Update `models/user.ts`
  - Update `controllers/users.ts`

  # Step 7 DELETE
    - Update `models/user.ts`
    - Update `controllers/users.ts`

  # Step 8 JWT and Login
    - Install JWT package
    
    ```
    npm i fastify-jwt jsonwebtoken --save 
    npm i @types/jsonwebtoken --save-dev
    ```
    
    - Create plugin folder/file
    - Configure JWT
    - Testing JWT (`controllers/index.ts`)
    - Enable JWT protect route
      - Sign
      - Access protected route
      - Verify at `https://www.jwt.io`
    - Login
      - Create login model (`models/login.ts`)
      - Create login route (`controllers/login.ts`)
      - Access protected route (`controllers/users.ts`)
      - Verify at `https://www.jwt.io`

# (Step 9) WebSocket/Socket.io

### WebSocket
  - install plugins

    ```
    npm i ws -S
    npm i @types/ws -D
    ```
  - Create plugin

  ```
  plugins/ws.ts
  ```
  - Edit typings `fastify.d.ts`
  - Edit `app.ts`
  - Authentication

### Socket.io
- install
```
npm i socket.io
```
- Create plugin
```
plugins/io.ts
```
- Edit typings `fastify.d.ts`
- Edit `app.ts`
- Test with socket.io-client

- Create demo app

# Step 10 File upload
- install package
```
npm i fastify-multer mime-types uuid fs-extra -S
npm i @types/fs-extra @types/uuid -D
```
- Register plugin in `app.ts`
- Edit `typeings/fastify.d.ts`
- create routing `controllers/upload.ts`
- Test upload
- View file

# Step 11 Validation
- Create Schema
```
mdkir schemas
vi schemas/demo.ts
```
- Create route `controllers/schema.ts`
- Apply Schema to router
- Body Schema
- Query String Schema
- Header Schema
- Error management

# Section 5 Multiple database connection
- Create plugin `plugins/db.ts`
- Update connection `app.ts`
- Create model `models/customer.ts`
- Create router `routers/customers.ts`
- Test connection

# Axios HTTP Client
- install plugin
```
npm install fastify-axios -S
npm install @types/axios -D
```
- register plugin `app.ts`
- edit `typings/fastify.d.ts`
- Basic usage - create `controllers/webservice.ts`
=========================================
- Authentication with bearer token
=========================================
- Multiple endpoint
=========================================

# QR Code
- install plugin
```
npm i @chonla/fastify-qrcode -S 
```
- register plugin `app.ts`
- update typings `typings/fastify.d.ts`
- add qrcode to route `controllers/index.ts`
===========================================
- customize qrcode

# Gulp
- install packages
```
npm install gulp gulp-clean gulp-cli gulp-sourcemaps gulp-typescript gulp-uglify readable-stream -D
```
- create gulp file `gulpfile.js`
- add cmd alias to `package.json`

# Environment
- Instal plugin
```
npm install dotenv -S
```
- Create configure file `config.conf`
- edit configure file
- edit `app.ts`
- edit `controllers/upload.ts`

# Gitlab CI
- create `process.json`
- create `Dockerfile`
- create `.dockerignore`
- create `gitlab-ci.yml`
- create `docker-compose.yml`
- start docker-compose