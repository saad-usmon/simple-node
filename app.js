// const User = require("./users");

// const user1 = new User("Shohabbos", 20);

// user1.sayHello()

const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => {
  console.log("Logging:", data);
});

logger.log("GET", "/admin/dashbord/home");
logger.log("POST", "/admin/dashbord/main");
logger.log("UPDATE", "/admin/dashbord/post");
logger.log("DELETE", "/admin/dashbord/messages");
