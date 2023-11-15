import passport from "passport";
import expressSession from 'express-session';
import LocalStrategy from 'passport-local';

export default function(app) {
  passport.serializeUser((user, done) => done(null, user.username));
  passport.deserializeUser((id, done) => {
    const user = {
      username: "huanNguyen",
      firstName: "Huan",
      lastName: "Nguyen"
    };
    done(null, user);
  });

  passport.use(
    new LocalStrategy((username, password, done) => {
      if (username === "huanNguyen" && password === "test") {
        done(null, {
          username: "huanNguyen",
          firstName: "Huan",
          lastName: "Nguyen"
        });
      } else {
        done(null, false);
      }
    })
  );

  app.use(
    expressSession({
      secret: "Top secret",
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.post("/login", passport.authenticate("local", { failureRedirect: "/login.html" }), (_request, response) => {
    response.redirect("/")
  })
}