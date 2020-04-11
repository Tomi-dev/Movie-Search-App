# Nuxt.js_Movie_Search_App

> My tremendous Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

-------- Necessary information for the app to work --------

For the app to work you'll have register for an api key at http://www.omdbapi.com/apikey.aspx
If you got the api key, create .env in the root folder and set your api key to "omdbApiKey=YOUR_API_KEY" after this you're good to go!

-------- Some info about the app --------

The App contains a text input through which you can search for movies by title. (Left box in the app)
After you searched for a movie, you can select the specified movie as favourite. (You can have multiple favourites).
Your selected favourite movies will appear in the right box in the app.
You can remove a favourite movie by hovering over them and clicking the "Remove" button. (On mobile, 1 click brings up the overlay and the "Remove" button).
The Favourite Movies box also has pagination.
