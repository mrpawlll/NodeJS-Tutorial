This repository serves as a tutorial on how to use node.js. Link to tutorial is [here.](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)

For point 2 onwards, the tutorial is following the crash course made by **Net Ninja** from this [playlist.](https://www.youtube.com/watch?v=OIBIXYLJjsI&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=2&ab_channel=NetNinja)

# How to setup Node.js

The manager for Node.js is called `nvm`. For python, we have `venv` whereas for Node.js we have `nvm`. Anytime we want to switch versions, we can use `nvm` to do this.

We can also install packages locally with `nvm`. The following are the details:

## NVM; Global vs. Local Installation:

When you install a package globally `npm install -g package_name`, it becomes available system-wide for any project using that version of Node.js. Conversely, when you install a package locally `npm install package_name`, it's installed within the project directory and is only available to that specific project.

# Part 1: How to use Node.js

For this tutorial, we have a Javascript file named server.js.

Content of server.js:

```
const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

`createServer()` method serves to create a http server and returns it.

# Part 2: Node.JS basics
Link to [video.](https://www.youtube.com/watch?v=OIBIXYLJjsI&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=2&ab_channel=NetNinja)

Multiple **README** for explanations of each features in NodeJS.