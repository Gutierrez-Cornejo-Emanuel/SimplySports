//tested in localhost, may be able to use relative path in production
//tested while running test_server.js
//prints a random match
fetch("http://localhost:3000/api/random-match").then((resp) => resp.json()).then((data) => console.log(data));
