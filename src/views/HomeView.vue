<template>
    <div class="home">
        <form
            @submit.prevent="setSearchedMovies()"
            class="search-form">
          <div class="input-wrapper">
            <input
                class="search-input"
                placeholder="Search for a movie"
                v-model="searchedKeyword"
                @input="getQuickSearchMovies()">
            <QuickSearch
                v-if="quickSearchMovies.length > 0"
                :movies="quickSearchMovies.slice(0, 5)"/>
            <button
                type="submit"
                class="search-submit">Search</button>
            <button
                type="reset"
                class="search-reset"
                @click="resetMovies()">Reset</button>
          </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { API_TOKEN } from '../env.js';
import QuickSearch from '../components/QuickSearch.vue';


export default {
    data () {
        return {
            searchedKeyword: ref(''),
            quickSearchMovies: [],
        }
    },

    components: {
      QuickSearch,
    },

    methods: {
        async getMovies () {
            const movieData = await
                axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    page: 1,
                    query: this.searchedKeyword,
                    api_key: API_TOKEN
                    }
                });

            return movieData?.data?.results;
        },

      async setSearchedMovies () {
          const searchedMovies = await this.getMovies();

          this.searchedKeyword = '';
          this.quickSearchMovies = [];

          this.$store.commit('setMovies', searchedMovies);
      },

        async getQuickSearchMovies () {
            if (this.searchedKeyword.length === 0) {
              this.quickSearchMovies = [];
            } else if (this.searchedKeyword.length % 2 === 0) {
                this.quickSearchMovies = await this.getMovies();
            }

            return this.quickSearchMovies;
        },

        async resetMovies () {
            this.searchedKeyword = '';
            this.quickSearchMovies = [];
        },
    },
}
</script>

<style lang="scss">
    .home {
        .search-form {
            width: 100%;
            text-align: center;
            margin: 30px 0;
            padding: 0 10px;
            display: flex;
            align-items: center;
            justify-content: center;

          .input-wrapper {
            position: relative;

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
    }
</style>