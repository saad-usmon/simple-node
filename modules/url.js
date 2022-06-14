const url = require("url");

const newUrl = new URL(
  "http://shokhabbos.uz:3100/users/user.html?firstName=Shohabbos&lastName=Usmonov&age=20"
);

//getting the full path of url
console.log(newUrl.href);
//getting the name of host with port
console.log(newUrl.host);
//getting the name of host
console.log(newUrl.hostname);
//getting the path name
console.log(newUrl.pathname);
//getting the query part of the url
console.log(newUrl.search);
//getting the query part with its detailed parametres
console.log(newUrl.searchParams);
//getting the params with strings not as object
newUrl.searchParams.forEach((name, value) => {
  console.log(`${value}: ${name}`);
});
