## Notiz

Notiz is a note taking app and note organization app. Users signup and then login to bring them to their notebooks page. They can then create a new notebook, after creating a notebook they can click the notebook link to display that particular notebook's page. Once there, they can create a new note which is initialized with a title, the date created, a brief description of the note and the note content. After a note is created, the user may edit that note, delete the note or even translate that note into over 100 different languages!



## Available Scripts

Backend built with Ruby on Rails API using Postgres. Endpoints for users, user tokens, notebooks, and notes.

Frontend built with React.Js and Redux for state management. User Interface designed with custom CSS styling.

Ruby Knock Gem on the backend and bcrypt on the frontend for JWT Authentication. Google Cloud Translation Api for translating notes into foreign languages. Notebooks and notes stored on the backend, with the date created for notes formatted using Moment.js. Multi-page and dynamic links created using React Router and WithRouter.

Backend
Run the rails API from https://github.com/SauceDoctR914/mod6project-Backend-api/ on port 3002 with

bundle install
rails db:create
rails db:migrate
rails s -p 3002
Frontend

To install frontend dependencies run

npm install

To open in browser run
npm start

Usage Example

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
