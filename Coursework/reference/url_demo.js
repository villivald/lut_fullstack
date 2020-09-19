const url = require("url");

const myUrl = new URL("http://google.com:8000/hello.html?id=100&status=active");

//Serialized Url
console.log(myUrl.href);

//Host
console.log(myUrl.host);

//Host name
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Query
console.log(myUrl.search);

//Params
console.log(myUrl.searchParams);

//Add params
myUrl.searchParams.append("number", "123");
console.log(myUrl.searchParams);

//Loop through the params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
