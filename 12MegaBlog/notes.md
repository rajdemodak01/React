# Notes

## Things to install first

### First create the vite App, then install npm(npm i) then install (npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form)

## Create Environment Variables in the root folder of the project

### we do not share the .env file to the github or in the production. So we need to addd the .env fle to the gitignore. And we build another .env.sample file inthe src folder we shift this to github with the varible empty

### To get the access of the environment varibale in the app.jsx, we use process.env.VARIABLE_NAME//this is used when we create the create app using create react-app not by vite. And for this the name of the varibale must starts with 'REACT_APP'

### For Vite the name of the varibable must start with 'VITE_' and for accessing the variable we use 'import.meta.env.VARIABLE_NAME'

#### There is diffferent way for creating variablen and accessing the variable in different environment(like vite, create react-app, next JS)

### One important thing when we change anything in the .env file, every time to view changes we need to run the (npm run dev) everytime

### The environment variable name must be string

### We create a conf.js file inside conf folder where we store all the envionment variibabe in an object using String(import.meta.env.VARIABLE_NAME). This is a good approach and a production grade approach

### we create two files auth.js(where we did all the authorization part) and config.js(where we did databse and bucket work)
