# Node Playground

<!-- Description - What this document is about -->
___

## Index

- [About the journey](#journey)
- [The chrome v8 javascript engine](#chrome-v8)
- [The Node.js](#node-js)
- [Common node conventions](#node-conventions)
- [Node.js vs Browser](#node-vs-browser)
- [Node how to do](#node-how-to-do)
- [Node API](#node-api)
- [Node sand box](./node-sandbox)
    - [First-app-dice](./node-sandbox/first-app-dice)
    - [Wrapper Around each file, IIFE, Default Arguments](./node-sandbox/wrapping-iife-file)
- [Resources Over Web](#resources)
- [To do list](#to-do)

___

---

## About the journey<a name="journey"></a>

- __2009:__ `Ryan Dahl` took the JS put the `V8 Engine` of browser over the server, No one was serious or convienced by the idea.
- __2009:__ During same time `MongoDB` also came into existance that was running on `V8 Engine` and was a `noSQL DB`.
- __2010:__ `Issac Schlueter` created NPM, Sharing the node packages. No GIT cloning and setting up GIT submodules. Dependency Management. This also hepled to developer community to develop Node project further.
- __During Time:__ Social media was expending and was using `RESTful JSON APIs`. Earlier, `SOAP APIs` with `XML` data were being used.
- __During Time:__ `MongoDB` was storing data into files in `JSON`. Whole ecosystem got boosted. `NodeJS` and `MongoDB` made working on JSON easier.
- __Late 2010 - 2011:__ Series of independent developments done a miracle. `ExpressJS`, `Mongoose`, `AngularJS`, `Node for Windows`.
    - `ExpressJS` was MVC framework, NodeJS for the masses. It was similar to `Ruby on Rails`. Most popular choice that time. `Coffee Script` A Ruby on Rails like language which can be easily transpiled to Javascript.
    - `Mongoose` A driver from `MongoDB` to connect easily connect with database.
    - `AngularJS` from Google was huge update with its two-way data binding which again binding JSON with user interface.
    - `MEAN` stack was born to take on on `LAMP` stack or similar stacks from that time.
- __During time:__ Node Core still needed improvements and a PHP like push of community, regulator and funding. A company named `Joint`.
- __After 2011:__ Another project called `IO.JS` came into existance with more or less similar kind of goals. Later, all joined the forces under an umbrella organization `Node JS Fondation`.
- __2015:__ First non-beta version on node JS got released.

---

## The chrome v8 javascript engine<a name="chrome-v8"></a>

- In order to execute the code written in high-level languages a modern computer generally uses:

    - __Compiler__ - Takes source code and converts into executable file, A file full of execcutable code. It creates executales that can be run on computers more easily. (i.e. Assembly language)
    - __Transpiler__ - Takes source code and returns another type of source code.      
    - __Interpreter__ - Take source code and directly excutes it. By performing intermediate steps at run-time. Don't leave any artefacts as compiler leaves executables.
- V8 Engine is javascript interpreter that executes and optimizes javascript code. V8 is an standalone application. If one uses Google Chrome, one uses V8
- Other Javascript Engines:
    - *javascriptCore* (iOS, Safari)
    - *SpiderMonkey* (Firefox)
    - *Chakra* (Internet Explorer)

---

## Node.js<a name="node-js"></a>

- Node.js is server side javascript run-time environment.
- Node.js is a C++ application that embeds V8.
- Node.js represents itself in two applications, both of which can be invoked with command line.
    1. A Script Processor
    2. A REPL (Read Eval Print Loop)
- The `Event loop` is continously checking if there is any new for node.js to do. Tasks can create new tasks in the queue. Many tasks are designed in such a way that it never ends (i.e. background workers).
- `Non-blocking` tasks get added to todo list and node can process them whenever it can.
- `Blocking` tasks are tasks where sequence is needed, They need one thread completly to execute.
- Servers generally tend to be multi-threaded. 
- Node is single threaded, Node effectively uses scheduling to do mutiple tasks.
    1. It reads the input
    2. It performs some task
    3. If something is asynchronous (sub-task), it put that task/sub-task into its todo list
    4. Then picks another available task
- 

---

## Common node conventions<a name="node-conventions"></a>

- ### Package.json
    - It is primary artefact of npm.
    - It contains some simple information about the project such as name, version, description as well as complex scripts, dependencies.
    - general

- ### Package-lock.json
    - Locks down the exact version of the node_modules have installed.

- ### .Npmrc
    - This artefact contains authorization related details for the npm cloud from where you generally doenload the dependencies.

- ### node_modules
    - A directory where all dependencies will be installed if you do `npm install`.
    - Packages in node_modules can be referred directly when you use `require()` or `import()`.

- ### Testing 
    - Testing scripts are commonly held in a /test directory and are triggered by a "test runner" such as Mocha.

- ### Error-handling
    - Errback pattern is common pattern given by express, idea is avoid throwing error. Because node is single threaded application throwing error will result in halting of whole application.
    - Instead, you can have error handling function, which can have `errorHandler(error, data)` where you can have error as well as other data to do some action.
    - We should also avoid using globals. This way we'll avoid namespace collisions with any libraries we may be using.

---

### Node.js vs Browser/Window<a name="node-vs-browser"></a>

- It is important to understand when we work on browser, console. We have access to several functions (i.e. window.open). You don't have access to such while working with node and vice-versa.
- Node is one environment, The browser is many.
- In Node, the source code is not visible to end user.

---

## Node how to do<a name="node-how-to-do"></a>

- [Node Runtime Environment](./node-environment.md)
- [Adding HTTPS Support](./adding-https-support.md)

---

## Node API<a name="node-api"></a>

- Node has replicated some APIs from the browser. But, they are not the same they are implemented in the same way. 
    - `console.log()`, `setTimeout()` are some examples. 
    - It doesn't mean that everything will be working. 
- Debug into the node
    - `console.log()` and `console.dir({depth:0})`, this will get another argument which tells about the depth.
    - TBD, Node debug
- By default content of each file in node is wrapped inside IIFE and has five arguments
    1. exports
    2. require
    3. module
    4. __filename
    5. __dirname

## Resources Over Web<a name="resources"></a>

1. [Free Code Camp, Video About Node](https://www.youtube.com/watch?v=gG3pytAY2MY)

---

## To do list<a name="to-do"></a>

1. <!-- list of the to do points about this document, till the document is not completed -->