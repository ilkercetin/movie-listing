<template>
  <div class="home">
    <MovieCard :movies="movies"/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import MovieCard from "../components/MovieCard.vue";
import axios from "axios";
import {API_TOKEN} from "../env";

export default {
  computed: mapState({
    movies: 'movies',
  }),

  components: {
    MovieCard,
  },

  methods: {
    async getPopularMovies() {
      const movieData = await
          axios.get('https://api.themoviedb.org/3/trending/all/day', {
            params: {
              api_key: API_TOKEN
            }
          });

      this.$store.commit('setMovies', movieData?.data?.results);
    },
  },

  mounted() {
    this.getPopularMovies();
  },

  name: "PopularMovies"
}
</script>

<style lang="scss">
  .home {
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;
  }
</style>