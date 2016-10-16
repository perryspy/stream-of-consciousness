# Sails.js + React.js

## Run Instructions

```bash
npm install
bower install
node app.js
```

## Process Overview

* Started by creating a new sails project
```bash
sails new stream-of-consciousness
```
* Used sails to generate the comment crud stuff
```bash
sails generate api comment
```
* Installed various additional node modules
```bash
npm install --save-dev MODULE
```
* Utilized the [sails-react-example](https://github.com/mixxen/sails-react-example) to implement the react frontend for viewing and editing comments
* Modified layout, jsx render markup, and custom styling
* Deployed app on heroku using github repo

## Todo
* working on configuring mongodb and possibly mongolabs cloud db service
