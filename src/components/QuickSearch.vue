<template>
    <div class="quick-search-wrapper">
        <div
            v-for="movie in movies">
          <router-link :to="'/movie/' + movie.id" class="movie-img-wrapper" v-on:click="setSelectedMovie(movie)">
            <h3 class="movie-title">{{ movie.name || movie.title || movie.original_name }}</h3>
          </router-link>
        </div>
    </div>
</template>

<script>
import MovieMixin from '../mixins/Movie.js';

export default {
  name: "QuickSearch",

  mixins: [
    MovieMixin,
  ],

  props: {
    movies: {
      type: Array,
      default: []
    }
  },
}
</script>

<style lang="scss" scoped>
  .quick-search-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    width: 100%;
    padding: 5px;
    text-align: left;
    color: black;
    background-color: white;
    z-index: 100;
    border: 1px solid black;

    a {
      color: black;
    }
  }
</style>