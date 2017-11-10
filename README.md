# Theatre-Management
This app enables theatre owners to manage movie schedule and let the visitors know which movies are currently playing and scheduled to play in the future.

The theatre owner has to login with his credentials to view and manage movie schedule for display on multiple screens in multiple time slots.

The user/visitor has to subscribe to view the movie schedules. By default, today's date is selected for displaying current movies on display

## demo: https://www.youtube.com/watch?v=aP2fLZ_2Y74

# Motivation
This app was created to give a one-step solution for the theatre owners and movie enthusiasts. 

It enables the theatre owner to manage multiple screens by scheduling different movies on them.

Firstly, the app carries out a movie search and displays its poster along with release date and plot. The admin can then schedule it on a range of dates by selecting different time slots for it.

All these results are sorted and displayed or user view.

When the user logs on the website, they can see the movies currently playing and those scheduled for the future. By selecting the movie, they can see its schedule and reserve their seats based on availability.

The app runs on a database having many to many relationship in implementation.


# Technologies for building app

## HTML Libraries
* [Bootstrap](http://getbootstrap.com/) -  Front-end component library
* [jQuery](http://api.jquery.com/) - The Javascript library used.
* [Handlebars.js](http://handlebarsjs.com/) - Popular templating engine that is powerful, simple to use and has a large community.

## APIs
* [IMDB](http://www.omdbapi.com/) - The OMDb API is a RESTful web service to obtain movie information

## Runtime Libraries
* [Node.js®](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Password Hash](https://www.npmjs.com/package/password-hash) - node.js library to simplify use of hashed passwords
* [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node.
* [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware
* [express-handlebars](https://www.npmjs.com/package/express-handlebars) - A Handlebars view engine for Express
* [client-sessions](https://www.npmjs.com/package/client-sessions) - client-sessions is connect middleware that implements sessions in encrypted tamper-free cookies
* [experss-validator](https://www.npmjs.com/package/express-validator) - An express.js middleware for validator.
* [Sequeilze](https://www.npmjs.com/package/sequelize) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, SQLite and Microsoft SQL Server


# App Developers

* **Minu James** - *Back-End: Modeling + relating database, bulding queries and implementing routes for the website*
* **Sairam Jalakam** - *Back-End: Password Storage / Session Manager implementation*
* **Derrick Lee** - *Front-End: Website Layout, Admin landing page and its complete functionality*
* **Fawaz Ahmed** - *Front-End: User Landing Page and its functionality*
