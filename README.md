# BackEnd
Overview

This is the back-end for my own personal website. It has a post route at /email. Which accepts a request with a body and stores it in a database.

Features

   Has a route where user can send a piece of content over and with the content it stores it in a mongo db database. This is done trough express js and mongoose
   Express js sets up the route. And I use mongoose to create a model and save into my remote database which is in the mongo db. The required
   fields of the model are subject, and body of the message.
   
Site Acess
   you can acess the site at api at https://hidden-bayou-27100.herokuapp.com/ It might take some time to load because heroku, puts the app to sleep. And the specific post
   route is at https://hidden-bayou-27100.herokuapp.com/email

Cloning
   You can clone the repo if you want to use it and change the code based on what you need. 
License

100% free to use and open source. 🙈 🙉 🙊
