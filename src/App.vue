<script setup xmlns="http://www.w3.org/1999/html">
import { RouterView } from 'vue-router'
</script>

<template>
    <header>
        <router-link to="/">
            <h1>PopularMovieList</h1>
        </router-link>
        <router-link to="/favourites">
            <h1>Favorites</h1>
        </router-link>
    </header>
    <main>
        <router-view/>
    </main>
</template>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        background-color: #35495e;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 16px;
            background-color: #2C3D4E;

            h1 {
                color: #000000;
                font-size: 28px;
                background-color: #f5c518;
                border-radius: 5px;
                padding: 5px;
                font-weight: bold;
                cursor: pointer;
            }
        }

        a {
            text-decoration: none;
        }
    }
</style>
