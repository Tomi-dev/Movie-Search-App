import axios from 'axios';

export const state = () => ({
    movie: {},
    favouriteMovies: []
});

export const getters = {
    getMovie: (state) => state.movie,
    getFavourites: (state) => state.favouriteMovies
}

export const mutations = {
    setMovie: (state, movie) => {
        const movieIsFavourite = state.favouriteMovies.filter( favouriteMovie => favouriteMovie.imdbID === movie.imdbID ).length > 0
        movie.userFavourite = movieIsFavourite;

        state.movie = movie;
    },
    addToFavourites: (state, movie) =>  {
        movie.userFavourite = true;
        state.favouriteMovies.push(movie);
    },
    removeFromFavourites: (state, favouriteMovieToDelete) => {
        const movieIndex = state.favouriteMovies.findIndex( favMovie => favMovie.imdbID == favouriteMovieToDelete.imdbID);

        if(movieIndex > -1){
            state.movie.imdbID == state.favouriteMovies[movieIndex].imdbID ? state.movie.userFavourite = false : '';
            state.favouriteMovies.splice(movieIndex, 1);
        }
    }
}

export const actions = {
    async fetchMovie({commit}, title) {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.omdbApiKey}&t=${title}`);
        
        commit('setMovie', response.data);
    },

    addMovieToFavourites({commit}, movie){
        commit('addToFavourites', movie);
    },

    removeFavouriteMovie({commit}, favouriteMovie) {
        commit('removeFromFavourites', favouriteMovie);
    }
}