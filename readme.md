<h1>creating basic crud app using rest API</h1>

> project status: in progress


> last update:
> 21/06/2023 - app has no front end yet.. all CRUD features are being used by a client (POSTMAN)

tools used:
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [nodemon](https://www.npmjs.com/package/nodemon)

back end: simple CRUD app for creating books, publisher and author objects, stored on a noSQL mongoDB database (hosted online). 
objects also have references between them, like (book -> author) and (book -> publisher)
