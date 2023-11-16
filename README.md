

## Welcome to Ratie Mate!  https://frontend-ratiemate.onrender.com/

Ratie Mate is a movie rating application created by: Tori Calkins, Adrian Ramirez, Ilene Varela-Zul and Roniel Overton.
This appilcation was created to showcase the knowledge and skills acquired throughout our time at LEARN Academy as our final project "Capstone" before we start our interships. Us at Ratie Mate hope that you can view our app and be inspired to create your own web appilcation at some point.


## Features
- Welcome page.

- User can sign up and sign in.

- Logged in, user can search for movie in movie data base.

- User can create their own movie to rate.

- Created movie can be stored in its own "Your Movies" page.

- User can update information about the created movie.

- User can also delete unwanted movie.


## Running this app locally 
live version 

Ratie Mate Frontend: https://github.com/RatieMateCapstone/ratiemate-frontend

Ratie Mate Backend: https://github.com/RatieMateCapstone/ratiemate-backend



- cd into desktop or perferred directory.

- Clone Ratie Mate repo into terminal from provided links: $ git clone <link>.

- install yarn dependencies.

- Run a rails bundle.

- Run rails db:setup for database.

- Run rails start or s, fisrt for backend.

- Run yarn start for frontend, choose local host 3001.

- Enjoy!


## Dev Dependencies 
-  "bootstrap": "^5.3.2",
-  "react": "^18.2.0",
-  "react-dom": "^18.2.0",
-  "react-icons": "^4.11.0",
-  "react-router-dom": "^6.18.0",
-  "react-scripts": "5.0.1",
-  "reactstrap": "^9.2.0"



## Contributors
- Tori Calkins
- Adrian Ramirez 
- Ilene Varela-Zul 
- Roniel Overton
- Charlene Baxter
- Sarah Proctor
- Nicole Mares Rivera
- Tricia Sykes
- Alejandra Hale
- Andrea Lopez Delgado


## To Do List
- Add edit and delete functionality to external API
- Add external API database to user's "Your Movies" page

Process

## Branch: main
$ yarn create react-app ratiemate-frontend
$ cd ratiemate-frontend
Add the remote from your GitHub classroom repository
Create a default branch (main)
Make an initial commit to the repository
Ask your instructors for branch protection
$ yarn start

## Branch: dependencies
$ yarn 
$ yarn add bootstrap
$ yarn add reactstrap
$ yarn add @mui/material @emotion/react @emotion/styled
$ yarn add react-router-dom


## Create directories (src)
- components: react components that will always be displayed on the UI
- pages: react components that pertain to certain CRUD actions
- assets: images, videos, etc

## Create component files
```js

  import React from "react"

  const App = () => {
    return ( 
      <>
        <h1>Hello World!</h1>
      </>
    )
  }

   export default App
```

## Create page files
- Home.js: landing page
- MovieIndex.js: displays all the movies in the database
- MovieShow.js: displays one movie as specified by params id
- MovieNew.js: displays a form to collect the user input that will be used to create a new movie
- MovieEdit.js: displays a form to modify an existing movie
- NotFound.js: displays an error message to the UI if the URL is incorrect

## Import styling
- bootstrap and reactstrap
- Add necessary import to index.js

## Routes
- Add react-router-dom
- on the index.js: 
- import BrowserRouter
```jsx
import 'bootstrap/dist/css/bootstrap.min.css'
```
- Wrap BrowserRouter around the App in the index.js
- on App.js
- import Routes, Route 
- Routes will encapsulate each Route that is specified for each react component in the page directory
- Route needs two attributes: path and element

## Mock data
- create a file for the mock data using camelCasing naming convention in the src directory
- import the file onto App.js
- import useState for the react state
- make the mock data the initial value of the state variable

## Styling React components
- select UI component from the [reactstrap site](https://reactstrap.github.io/?path=/story/home-installation--page)
- copyright emblem `&copy;`
- css declarations can be made on App.css


## Branch: components-testing
Created three different folders called: components, pages, and assets.

In the components folder, add the Header and Footer files. 

In the pages folder add, About Us, Home, MovieIndex, Movie Delete, Movie New, Movie Show, Movie Update, SignUpSignIn

Then start routing each page and component with a path and element. 

Afterwards, work on Header and Footer of page, styling and creating functionality. Then once that's done create the testing for both.


## App.js
- modified the routes: 
- Index: pass props
- Show: add id param to url and pass props

## Branch: signin-signup
Started working on the styling of the page, this will contain both the sign in and sign up functions. The user NEEDS to sign up in order to navigate through webpage. 

CSS: Background image needs to be fixed. 
CSS: Fix Movie Matcher Image on signinsignup page
CSS Stretch: Make the forms look nicer (Like tickets)

## Branch: header-footer
Worked on header. Header1 needs on click functionality for account icon to have it show user movies that they've added or log out. 

CSS Stretch: Fix the border on account icon
JS: Need to connect log out option, so it navigates user back to signinsignup page

## Branch: index-show
Started working on the index page and the show page. We can now see all the movies in the database. Want to add sign to the index to show the movies.
ya
CSS: Add hover over icon to let user know that you can click on it!!
JS: Need to fix so that the user who added the data will be shown when you can see who created the entry. 

The show page testing was a little different. Instead of using:
```jsx
<BrowserRouter>
```
Use:
```jsx
<MemoryRouter>
    <Routes>
        <Route />
    <Routes>
</MemoryRouter>
```

## Branch: home-notfound
<div className="film-container">
                <div className="col1">
                    <div className="film1-image">
                        <img src={MovieFilm} alt="Movie film" className="movie-film"/>
                        <div className="tori-container">
                            <Card style={{ width: '18rem'}} id="tori-card">
                                <img alt="Tori" src={Tori} className="tori-image"/>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Tori Calkins
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        Project Manager
                                    </CardSubtitle>
                                    <CardText id="text">
                                    Hello! I'm Tori Calkins from San Diego, California. I am a former customer service worker going into full-stack web development. When I'm not coding, I enjoy going country dancing in a local brewery, binge watching movies I've seen 100 times, and spending time with my family and friends.
                                    </CardText>
                                    <div className="social-container">
                                        <NavLink>
                                            <AiFillLinkedin className="social-links"/>
                                        </NavLink>
                                        <NavLink>
                                            <AiFillGithub className="social-links"/>
                                        </NavLink>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <img src={MovieFilm} alt="Movie film" className="movie-film"/>
                </div>
                <div className="col2">
                    <img src={MovieFilm} alt="Movie film" className="movie-film"/>
                    <img src={MovieFilm} alt="Movie film" className="movie-film"/>
                </div>
            </div>
