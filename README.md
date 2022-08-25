# Nextjs-Practice-Movies

### deployed on [heroku](https://nextjs-practice-movies.herokuapp.com/)

<a href="https://nextjs-practice-movies.herokuapp.com/">
  <img src="https://github.com/WilleLee/files/blob/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-08-26%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.58.25.png" width="330" height="450" />
</a>

## Dev Logs

### Building Authentication

* login function is available only on the dev mode yet.

#### Database

Before creating parts of authentication, the application must be connected to a database so that the application could remember the information of users, which offers the keyframe of the whole function. In this case, mongoDB is applied to this project by using mongoose, and there's [a greate sample source code](https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/lib/dbConnect.js) for this section implementing mongoose to next.js applications.

#### session

Though it is possible for **me** to remember users with the help of the database, the browser that renders the application requires to receive sessions that describe whether any users are logged in so that the browser could decide which pages are allowed to be rendered. Vercel team helps this part as well providing [an example](https://github.com/vercel/next.js/tree/canary/examples/with-iron-session) that utilizes iron-session modules.
