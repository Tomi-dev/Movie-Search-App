<template>
  <main>
    <Header></Header>
    <section class="boxes">
      <MovieSearchBox></MovieSearchBox>
      <FavouriteMoviesBox></FavouriteMoviesBox>
    </section>
  </main>
</template>

<script>
import Header from '@/components/Header.vue';
import MovieSearchBox from '@/components/MovieSearchBox.vue';
import FavouriteMoviesBox from '@/components/FavouriteMoviesBox.vue';

export default {
  components: {
    Header,
    MovieSearchBox,
    FavouriteMoviesBox
  }
}
</script>

<style src="../assets/MainBox.css"></style>
