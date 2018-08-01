# Entry path

entry path is `src/app.js`. if you want to change it, change inside `package.json` file.

# Alias in webpack

* `Root`: point to root directory, means `src`.

# Others

* if you want to point anything to our CDN like images or videos, you can use `@@CDN@@` string everywhere you want.
* development CDN is `localhost:5001/static`.

# Serving static files

if you want some files like images to being serve statically, just put them in `src/static` and it will be served by web server at `localhost:5001/static`.

# index.html

if you want to add something in your html file just change `server/index.html`.

# Developing process

run `npm run dev:build` and in another terminal run `node .`, then change `app.js` and build your react app. when you wanna test your app just open `http://localhost:5001`.
