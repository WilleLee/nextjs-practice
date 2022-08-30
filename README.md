# Nextjs-Practice-Movies

### deployed on [heroku](https://nextjs-practice-movies.herokuapp.com/)

<a href="https://nextjs-practice-movies.herokuapp.com/">
  <img src="https://github.com/WilleLee/files/blob/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-08-26%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.58.25.png" width="330" height="450" />
</a>

## Dev Logs

### Building Authentication

#### Database

Before creating parts of authentication, the application must be connected to a database so that the application could remember the information of users, which offers the keyframe of the whole function. In this case, mongoDB is applied to this project by using mongoose, and there's [a greate sample source code](https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/lib/dbConnect.js) for this section implementing mongoose to next.js applications.

#### session

Though it is possible for **me** to remember users with the help of the database, the browser that renders the application requires to receive sessions that describe whether any users are logged in so that the browser could decide which pages are allowed to be rendered. Vercel team helps this part as well providing [an example](https://github.com/vercel/next.js/tree/canary/examples/with-iron-session) that utilizes iron-session modules.

#### hashed password

You must NOT save passwords of your users as what that actually is, otherwise passwords will be literally displayed on your database, which is not allowed to be called **secure**.

There's one way to make sure to save passwords as encrypted texts, which is **hashing**. To hash passwords my application would receive, I fistly installed **bcryptjs** and its @types into the project.

```
npm i bcryptjs && npm i --save @types/bcryptjs
```

### Hand-made Hooks

#### PublicOnly

```javascript
import { useRouter } from "next/router";
import { LoggedInUser } from "pages/api/user";
import { useEffect } from "react";

export default function publicOnly(user?: LoggedInUser) {
  const router = useRouter();
  useEffect(() => {
    if (user?.isLoggedIn) {
      console.log(user?.isLoggedIn);
      router.push("/");
      return;
    }
  });
}
```

[**publicOnly**](https://github.com/WilleLee/nextjs-practice/blob/main/hooks/publicOnly.ts) hook redirects users to "/" when they try to reach pages like "/join" and "/login" though they are already logged in, meaing the browser has the session of the user.

### Styles

#### star rates

The movie API offers the recent vote rates for each movie so that I wanted to make it styled with stars with color.

```javascript
// ./components/Detail.tsx
/*
...
*/
const Detail = ({ movie }: Props) => {
  const rate = `${movie.vote_average * 10}%`;

  return (
    <>
      <div className={styles.vote_average__container}>
        <div className={styles.vote_average__basic_stars}>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        <div style={{ width: rate }}>
          <div className={styles.vote_average__colored_stars}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
      </div>
      {/*
      ...
      */}
    </>
  );
};

export default Detail;
```

```scss
//Detail.module.scss
.vote_average__container {
  position: relative;
  .vote_average__colored_stars {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    color: $base-color;
    animation: getStars 1s linear forwards;
  }
  .vote_average__colored_stars,
  .vote_average__basic_stars {
    display: flex;
    align-items: center;
    gap: 4px;
    span {
      font-size: 20px;
    }
  }
}

@keyframes getStars {
  from {
    width: 0;
  }
  to {
    width: inherit;
  }
}
```

### Errors

#### Error: querySrv ENODATA

<img src="https://github.com/WilleLee/files/blob/main/error-querysrv-enodata.png" width="500" />

There's been an unexpected error like above using mongoDB, which happened when I was programming at a Starbucks using their WiFi. I've found some posts that say such error happens quite often when they use some public WiFis, and yes, the error went away as I turned my hotspot on, which sucks.

### Additionals

#### Configurate Paths to Handle Files in a Much More Intuitive Way

```javascript
//tsconfig.json
{
  "compilerOptions": {
    /*
      ...
    */
    "paths": {
      "@/components/*": ["components/*"],
      "@/lib/*": ["lib/*"],
      "@/styles/*": ["styles/*"],
      "@/hooks/*": ["hooks/*"]
    },
  },
  /*
    ...
  */
}
```
