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

## Branch:components-testing
Created three different folders called: components, pages, and assets.

In the components folder, add the Header and Footer files. 

In the pages folder add, About Us, Home, MovieIndex, Movie Delete, Movie New, Movie Show, Movie Update, SignUpSignIn

## Branch: routing
import each component/page into App.js
Then in index.js import { BrowserRouter } from react-router-dom and add it inside of the return. Also add (to make reactstrap and bootstrap work):
```jsx
import 'bootstrap/dist/css/bootstrap.min.css'
```

Then start routing each page and component with a path and element. 

Afterwards, work on Header and Footer of page, styling and creating functionality. Then once that's done create the testing for both.

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
