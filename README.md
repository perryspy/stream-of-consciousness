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
* Modified sails comment model to include author and text
* Utilized the [sails-react-example](https://github.com/mixxen/sails-react-example) to implement the react frontend for viewing and editing comments
* Modified layout, jsx render markup, and custom styling
* Deployed app on heroku using github repo

## Comments
* Currently deployed using in memory db. Sails-mongo config seems to work when running the app locally, but crashes when deployed to heroku. I think it might be related to heroku dymanically setting the port, although sails is supposed to handle that out of the box.

## Todo
* Get it working with mongodb on heroku
* Utilize mongolabs cloud db service
