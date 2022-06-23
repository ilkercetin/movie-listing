import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetail from '../views/MovieDetail.vue';
import FavoriteMovies from '../views/FavoriteMovies.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movie/:id',
      name: 'Movie Detail',
      component: MovieDetail
    },
    {
      path: '/favourites',
      name: 'Favorite Movies',
      component: FavoriteMovies
    }
  ]
})

export default router
