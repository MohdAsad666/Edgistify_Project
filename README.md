# Practice Project
With this web application one can post a feed and either one itself or other registered user can comment in Post or if they want they can make their own feed.

## Technology Used
1. This application is built using HTML, CSS and JavaScript on the top of NodeJS. It uses Express, express-sessions, EJS templates, layouts, cookie-parser, SASS, Passport along with AJAX to implement functionality of this web-application.
 
2. It uses used MongoDB for DataBase implemented it with help of Mongoose and Multer for uploading Profile pictures.
 
3. One thing I want to clear is that this project doesn't use REACT or any other HTML5 frame work, instead use static HTML with EJS template, but when it comes to functionality on Backend part I tried to implement each and every sought after conditions with my 100% effort.
 
## Features
 
1. User can register and login with valid email id.
 
2. All the post are visible in homepage, no matter user is logged-in or signed-out.
 
3. Users can create a new post and publish it.
 
4. Users can comment on any of the posts, including their own.
 
5. User if want can delete their comments and posts, but same cannot be done on others post or comment.
 
6. When a post is deleted all under lying comment it be automatically deleted.
 
7. User if want can upgrade their credentials and can also upload profile pictures.
 
8. If User doesn't want to upload a profile picture, a default profile picture will be alloted.
 
9. On the home screen one can see all the resigtered user in users-sections.
 
## User Guide
 
1. After extracting Edgistify_Project.zip.
 
2. Open Edgistify_Project folder in ide.

3. Type ```npm init``` and hit enter as long it asks forit, after its done.
 
4. Type 
 ``` nodemon index.js```
 on the console.
 
5. If thows error ```required stack not found``` type ``` npm i node-sass-middleware``` in console and install it, It should work fine.
 
6. Type ```localhost:8000``` in url input field in browser, and hit enter.
 
7. Click on Sign Up, will be redirected to ```http://localhost:8000/users/sign-up ``` , enter credentials and git sign-up.
 
8. Will be redirected to ```http://localhost:8000/users/sign-in``` , enter valid credentials and hit sign-in.
 
9. Type in given text area and comment will be added in real time.

10. If want to change the credentials and profile picture, click on your name on the nav-bar or in the user section.

11. Enter wanted credentials along with profile picture and hit upgrade. Now your profile has been upgraded.
