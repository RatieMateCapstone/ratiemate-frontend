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