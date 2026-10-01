# dhannesh/fsd3-12
# NPM Project
1. go to folder (by cd)
2. type ```npm init -y ```
3. open package.json
4. update ```type:module```
5. install nodemon ```npm i nodemon -D```
6. update script in package.json 
```
script{
    "start " : "node app.js",
    "dev" : "nodemon prg7.js"
}
```
7. add node_modules to .gitignore
8. to run use `npm run dev`


## REST API

### Representational State Transfer (REST)
- majorly backend server return only data not html file
- REST API (get , post , put , patch , delete) method to communicate with client
- any browser can check only get method
- for other method type we use third party API Tester like postman,thunder client, echo api etc

### Request Type 
1. Get-all , Get-by Id
 - Get: /api/products (ye get all prducts ke liye h)
 - Get: /api/product/101 (ye get all products ke liye h ) 
 2. POST:/api/products and data will be shared by echo api body section  (  ye product add krne ke liye h)
 3. PUT/PATCH:/api/products/201 (isme hme product updatr krne ke liye use krte h)
 4. DELETE:/api/products/202 (isme hm single product ko delete kr ke ge)
 