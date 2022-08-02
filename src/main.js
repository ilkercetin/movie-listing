import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)

const store = createStore({
    state () {
        return {
            movies: [],
            favoriteMovies: [],
            selectedMovie: {},
        }
    },
    mutations: {
        setMovies (state, movies) {
            state.movies = movies;
        },

        setSelectedMovie (state, movie) {
            state.selectedMovie = movie;
        },

        addFavoriteMovie (state, movie) {
            state.favoriteMovies.push(movie);
        },

        deleteFavoriteMovie (state, movie) {
            const deletedMovieList = state.favoriteMovies.filter(favoriteMovie => favoriteMovie.id !== movie.id);

            state.favoriteMovies = deletedMovieList;
        },
    }
});

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.use(store);

app.mount('#app');
