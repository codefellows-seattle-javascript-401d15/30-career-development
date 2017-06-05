# Lab 30: Binary Search Tree Data Structures

## Description
For this lab we implemented a Binary Search Tree (BST) Node constructor and the following static methods:
* BSTNode.fromArray() creates a BST from items in an array.
* node.appendChild(node) appends a child.
* node.min() and node.max() returns the min value.
* node.find() returns the node that contains the value.

## Version
* 0.1.0

## Big O Notation
Time Complexity
* Average O(log n)
* Worst Case O(n)

## Installation
Please visit the following pages for how to install your project locally.

* [Cloning A Repository](https://help.github.com/articles/cloning-a-repository/)
* [Fork A Repo](https://help.github.com/articles/fork-a-repo/)
* [Forking](https://guides.github.com/activities/forking/)

### Node
You need to have node.js installed.
* [Download Node](https://nodejs.org/en/)

### NPM Packages
* [NPM Docs](https://docs.npmjs.com)
* [NPM package.json](https://docs.npmjs.com/files/package.json)

### JSON Configuration
Initializing package.json
```
npm init
```
```
npm i -S
```
```
npm i -D webpack-dev-server angular-mocks jasmine jasmine-core karma karma-chrome-launcher karma-jasmine karma-mocha-reporter karma-webpack webpack-dev-server
```

Add the following to package.json:
```
"scripts": {
  "test": "karma start --single-run",
  "test-watch": "karma",
  "build": "webpack",
  "build-watch": "webpack-dev-server --inline --hot"
}
```

### Dependencies
The result of installation above.

```
"dependencies": {

},
"devDependencies": {
  "angular-mocks": "^1.6.4",
  "jasmine": "^2.6.0",
  "jasmine-core": "^2.6.2",
  "karma": "^1.7.0",
  "karma-chrome-launcher": "^2.1.1",
  "karma-jasmine": "^1.1.0",
  "karma-mocha-reporter": "^2.2.3",
  "karma-webpack": "^2.0.3",
  "webpack-dev-server": "^2.4.5"
}
```

## Application
In Terminal run `npm run build`
Result: app/index.html {0} [built]

In Terminal run `npm run build-watch`
Result: "Project is running at http://localhost:8080/", "webpack: Compiled successfully."

## Test Setup
```
karma init karma.conf.js

Which testing framework do you want to use ?
> jasmine

Do you want to use Require.js ?
> no

Do you want to capture any browsers automatically ?
> Chrome

What is the location of your source and test files ?
> test/**/*-test.js

Should any of the files included by the previous patterns be excluded ?
> no

Do you want Karma to watch all the files and run the tests on change ?
> no
```
Adjust the configuration karma.conf.js file to:

```
config.set({
  webpack,
  basePath: '',
  frameworks: ['jasmine'],
  files: [
    'test/**/*-test.js',
  ],
  exclude: [
  ],
  preprocessors: {
    'test/**/*-test.js': ['webpack'],
  },
  reporters: ['mocha'],
  port: 9876,
  colors: true,
  logLevel: config.LOG_INFO,
  autoWatch: true,
  browsers: ['Chrome'],
  singleRun: false,
  concurrency: Infinity,
```

## Running Tests
In [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) (Terminal) enter the command:

In Terminal enter `npm run test`
Result: "karma start --single-run", "Connected on socket"

In Terminal enter `npm run build-watch`
Result: "Project is running at http://localhost:8080/", "webpack: Compiled successfully."

## Resources
* [Binary Search Tree](https://en.wikipedia.org/wiki/Binary_search_tree)
* [Vis.js](http://visjs.org)
* [Karma Mocha Reporter](https://www.npmjs.com/package/karma-mocha-reporter)
* [Testing Controllers](http://www.bradoncode.com/blog/2015/06/05/ngmock-fundamentals-testing-controllers/)
* [End to End Testing](https://docs.angularjs.org/guide/e2e-testing)
* [Testing with Protractor](http://www.ng-newsletter.com/posts/practical-protractor.html)

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/mmpadget) file for details.

## Acknowledgments
* Code Fellows
* Scott Schmidt, Instructor
* Cayla Zabel, Teaching Assistant
* Devon Hackley, Teaching Assistant
* Thomas Martinez, Teaching Assistant
* JR Iriarte, Teaching Assistant
