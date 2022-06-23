<template>
    <div v-if="movies?.length > 0" v-for="movie in movies" class="movie-card">
        <font-awesome-icon
            :icon="isFavoriteMovie(movie) ? 'fa-bookmark' : 'fa-regular fa-bookmark'"
            class="add-to-favorite"
            v-on:click="handleFavorites(movie)"
        />
        <router-link :to="'/movie/' + movie.id" class="movie-img-wrapper" v-on:click="setSelectedMovie(movie)">
            <img
                :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
                @error="
                    $event.target.src =
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgM1RkuSAlaYjvuc24ZN-nsVBNCv68D1PQw&usqp=CAU'
                "
                :alt="movie.name"
                class="movie-img"
            />
        </router-link>
        <div class="movie-detail">
            <h3 class="movie-title">{{ movie.name || movie.title || movie.original_name }}</h3>
            <p class="movie-description">{{ (movie.overview || "").slice(0, 160) }}</p>
        </div>
    </div>
    <div v-else class="movie-not-found">There is no movie</div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: mapState({
        favoriteMovies: 'favoriteMovies',
        selectedMovie: 'selectedMovie',
    }),

    props: {
        movies: {
            type: Array,
            default: []
        }
    },

    methods: {
        handleFavorites(movie) {
            var isMovieFavorited =
                this.favoriteMovies.filter((favoriteMovie) => favoriteMovie.id === movie.id).length > 0;

            if (!isMovieFavorited) {
                this.$store.commit("addFavoriteMovie", movie);
            } else {
                this.$store.commit("deleteFavoriteMovie", movie);
            }
        },

        isFavoriteMovie(movie) {
            return this.favoriteMovies.some((favoriteMovie) => favoriteMovie.id === movie.id);
        },

        setSelectedMovie (movie) {
            this.$store.commit('setSelectedMovie', movie);
        }
    },

    name: "MovieCard",
};
</script>

<style lang="scss">
.movie-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    width: 25%;
    margin: 0 4% 10px;
    border-radius: 10px;
    position: relative;

    .add-to-favorite {
        position: absolute;
        right: 1px;
        top: 5px;
        width: 30px;
        height: 30px;
        color: red;
    }

    .movie-img-wrapper {
        padding: 5px;

        .movie-img {
            display: block;
            width: 100%;
            height: 400px;
            object-fit: contain;
            border-radius: 10px;
        }
    }

    .movie-title {
        color: #ff0000;
        margin: 10px 0;
        padding: 0 30px;
        text-align: center;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .movie-description {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
        margin: 10px 30px;
        text-align: justify;
    }

    @media screen and (max-width: 1200px) {
        width: 40%;
    }

    @media screen and (max-width: 700px) {
        width: 90%;
    }
}

.movie-not-found {
    width: 100%;
    display: block;
    text-align: center;
    color: #ffffff;
    font-size: 36px;
}
</style>
