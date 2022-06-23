<template>
    <div class="home">
        <form
            @submit.prevent="searchMovies()"
            class="search-form">
            <input
                class="search-input"
                placeholder="Search for a movie"
                v-model="searchedKeyword">
            <button
                type="submit"
                class="search-submit">Search</button>
            <button
                type="reset"
                class="search-reset"
                @click="resetMovies()">Reset</button>
        </form>
        <MovieCard :movies="movies"/>
    </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { mapState } from "vuex"
import { API_URL, API_TOKEN } from '../env.js';
import MovieCard from '../components/MovieCard.vue';


export default {
    computed: mapState({
        movies: 'movies',
    }),

    data () {
        return {
            searchedKeyword: ref(''),
        }
    },

    components: {
        MovieCard,
    },

    methods: {
        async getPopularMovies () {
            const movieData = await
                axios.get('https://api.themoviedb.org/3/trending/all/day', {
                    params: {
                        api_key: API_TOKEN
                    }
                });

            this.$store.commit('setMovies', movieData?.data?.results);
        },

        async searchMovies () {
            if (this.searchedKeyword !== '') {
                const movieData = await
                    axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        page: 1,
                        query: this.searchedKeyword,
                        api_key: API_TOKEN
                        }
                    });

                this.$store.commit('setMovies', movieData?.data?.results);
            } else {
                await this.resetMovies();
            }
        },

        async resetMovies () {
            await this.getPopularMovies();

            this.searchedKeyword = '';
        },
    },

    mounted() {
        this.getPopularMovies();
    },


}
</script>

<style lang="scss">
    .home {
        display: flex;
        flex-wrap: wrap;

        .search-form {
            width: 100%;
            text-align: center;
            margin: 30px 0;
            padding: 0 10px;
            display: flex;
            align-items: center;
            justify-content: center;

            .search-input {
                width: 300px;
                height: 40px;
                font-size: 20px;
                border: unset;
                outline: unset;
                padding-left: 3px;
            }

            .search-input::placeholder {
                font-size: 20px;
            }

            .search-submit,
            .search-reset {
                margin-left: 20px;
                width: 100px;
                height: 40px;
                font-size: 20px;
            }
        }
    }
</style>