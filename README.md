# NodeBlog

Simple blog-like application built with Node JS and React.

[Live Demo hosted on Heroku.](https://nodeblog21.herokuapp.com/)

## Instructions

- [Install NodeJS and React.](https://reactjs.org/tutorial/tutorialhtml#setup-option-2-local-development-environment)
- From the root directory: `npm install`
- Start development server: `npm start-dev`
- The frontend will be live at `localhost:3000` and server will be live at `localhost:8000`.

**NOTE:** Use `npm start-dev` for development server because `npm start` is for production build. Also, make sure all dev dependencies which are `npm-run-all` and `nodemon` are installed.

## API Specification

- `/api/posts`: Show all posts for current user. ([Sample](https://nodeblog21.herokuapp.com/api/posts))
- `/api/posts/:postId`: Show all data for a post. ([Sample](https://nodeblog21.herokuapp.com/api/posts/1))
- `/api/posts/:postId/comments`: Show all comments for a post. ([Sample](https://nodeblog21.herokuapp.com/api/posts/1/comments))
- `/api/posts/:postId/comments/:commentId`: Show all data for a comment. ([Sample](https://nodeblog21.herokuapp.com/api/posts/1/comments/1))

**NOTE:** Default user id is set to 1 in server.js.
