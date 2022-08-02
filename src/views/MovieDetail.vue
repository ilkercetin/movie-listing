<template>
    <div class="movie-detail-wrapper">
        <div class="movie-image">
            <img :src="'https://image.tmdb.org/t/p/w500' + selectedMovie.poster_path" alt="" srcset="">
        </div>
        <div class="movie-description">
            <div class="movie-name">
                {{ selectedMovie.name || selectedMovie.original_name || selectedMovie.title || selectedMovie.original_title }}
            </div>
            {{ selectedMovie.overview }}

            <div class="vote-average">
                Vote Average: {{ selectedMovie.vote_average }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: mapState({
        selectedMovie: 'selectedMovie'
    }),

    mounted() {
        if (!this.selectedMovie.id) {
            this.$router.push('/');
        }
    },

    name: "MovieDetail"
}

</script>

<style lang="scss">
.movie-detail-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2%;

    .movie-image > img{
        width: 300px;
    }

    .movie-description {
        background: white;
        margin: 20px 10px;
        padding: 5%;
        font-size: 24px;
        border-radius: 10px;

        .movie-name {
            color: red;
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .vote-average {
            margin-top: 20px;
            font-weight: bold;
        }
    }
}
</style>