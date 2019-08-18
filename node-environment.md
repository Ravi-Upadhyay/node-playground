# Node Environments:

> While designing/developing server architecture one of most important aspects is to configure different sets of running environments. During the development you might need to run your code in different environments.


## NODE_ENV - Solution from Node:

Node.js provides `NODE_ENV` a global that can be accessed throughout the application and can be set during initialization of application through the terminal.

```javascript
// TERMINAL, Setting up NODE_ENV and starting the application

NODE_ENV=staging node index.js
```

```javascript
// SCRIPT, getting the environment, and setting the proper configuration accordingly - simple example

// Available environment configurations
const environment = {
    staging     : {
        port    : 3000
    },
    production  : {
        port    : 5000
    }
}

// Getting current environment
const currentEnv = process.env.NODE_ENV;
const config = environment[currentEnv];
```