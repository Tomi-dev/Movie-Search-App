<template>
    <section class="movie-search-box">
        <h1>Start typing a movie title</h1>
        <input type="text" @keyup="searchedMovie" v-model="movieTitle">

        <div class="movie-container" v-if="Object.keys(getMovie).length !== 0">
            <div v-if="getMovie.Response === 'False'">
                <h1>{{getMovie.Error}}</h1>
            </div>

            <div v-else>
                <h1>{{getMovie.Title}}({{getMovie.Year}})</h1>

                <div class="img-container" v-if="getMovie.Poster !== 'N/A'">
                    <img :src="getMovie.Poster" :alt="getMovie.Title">
                </div>

                <p>{{getMovie.Plot}}</p>

                <button @click="addToFavourites($event)" v-if="getMovie.userFavourite === false">Add to Favourites <i class="fa fa-plus"></i></button>
            </div>
        </div>
    </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    data(){
        return {
            movieTitle: '',
        }
    },
    computed: {
        ...mapGetters(['getMovie', 'getFavourites'])
    },
    methods: {
        ...mapActions(['fetchMovie', 'addMovieToFavourites']),

        searchedMovie() {
            if(this.movieTitle.trim() !== ""){
                this.fetchMovie(this.movieTitle);
            }
        },

        addToFavourites(e) {
            this.addMovieToFavourites(this.getMovie);
        }
    }
}
</script>

<style src="../assets/MovieBoxes.css"></style>