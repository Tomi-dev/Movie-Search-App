<template>
    <section>
        <h1>Your favourites</h1>
        <div class="favourite-movies">
            <p v-if="favouriteMovies.length == 0">You dont have any favourite movies yet :(</p>
            <div v-else v-for="(favourite, index) in currentPagesItems" v-bind:key="index" >
                <div class="overlay">
                    <button @click="removeMovie(favourite)">Remove</button>
                </div>
                <img :src="favourite.Poster" :alt="favourite.Title">
            </div>
        </div>
        
        <div class="paginator" v-if="maxPages > 1">
            <button class="prev" @click="modifyPage(-1); scrollToPage('right');" :class="{disabled: page <= 1}">Previous</button>
            <div class="pages">
                <div @click="setPage(index)" :class="{'active-page': index === 1}" v-for="index in maxPages" v-bind:key="index" :data-page="index">{{index}}</div>
            </div>
            <button class="next" @click="modifyPage(+1); scrollToPage('left');" :class="{disabled: page + 1 > maxPages}">Next</button>
        </div>
    </section>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            page: 1,
            maxItemPerPage: 6,
        }
    },
    watch: {
    },
    computed: {
        ...mapGetters(['getFavourites']),
        favouriteMovies: function() {
            const movies = this.getFavourites;
            return movies;
        },
        maxPages: function() {
            return Math.ceil(this.favouriteMovies.length / this.maxItemPerPage);
        },
        currentPagesItems: function() {
            return this.favouriteMovies.slice((this.page - 1) * this.maxItemPerPage, this.page * this.maxItemPerPage);
        }
    },
    methods: {
        ...mapActions(['removeFavouriteMovie']),

        removeMovie(index) {
            this.removeFavouriteMovie(index);

            if(this.page > 1)
                this.setPage(1);
        },

        setPage(index) {
            this.page = index;
            this.setPageToActive();
        },
        modifyPage(pageValue) {
            if(this.page + pageValue < 1 || this.page + pageValue > this.maxPages) return false;

            this.page = this.page + pageValue;
            this.setPageToActive();
        },
        setPageToActive(){
            const currentPaginatorPage = document.querySelector(`.paginator div[data-page="${this.page}"]`);
            const activePaginatorPages = [...document.querySelectorAll('.paginator div.active-page')];

            if(activePaginatorPages.length > 0)
                activePaginatorPages.forEach( activePage => activePage.classList.remove('active-page'));

            currentPaginatorPage.classList.add('active-page');
        },
        scrollToPage(direction) {
            const pagesContainer = document.querySelector('.paginator .pages');
            const singlePagesWidth = document.querySelector('.paginator .pages div:first-child').offsetWidth - 10;
            const scrollable = pagesContainer.scrollWidth > pagesContainer.clientWidth;
            
            switch(direction) {
                case 'left':
                    scrollable ? pagesContainer.scrollLeft += singlePagesWidth : '';
                    break;
                case 'right':
                    scrollable ? pagesContainer.scrollLeft -= singlePagesWidth : '';
                    break;
            }

        }
    }
}
</script>

<style src="../assets/MovieBoxes.css"></style>