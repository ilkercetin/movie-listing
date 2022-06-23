<template>
    <div class="favorite-home">
        <MovieCard :movies="favoriteMovies" />
    </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue';
import { mapState } from "vuex"

export default {
    computed: mapState({
        favoriteMovies: 'favoriteMovies',
    }),

    components: {
        MovieCard,
    },

    name: "FavoriteMovies.vue",
}
</script>

<style lang="scss">
.favorite-home {
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;
}
</style>
