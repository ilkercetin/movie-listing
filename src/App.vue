<script setup xmlns="http://www.w3.org/1999/html">
import { RouterView } from 'vue-router'
import SideMenu from "./components/SideMenu.vue";
</script>

<template>
    <header>
        <router-link to="/">
            <h1>Movie Database</h1>
        </router-link>
      <div class="sidebar-button-wrapper"
           @click="toggleSidebar">
        <div v-if="!sideBarOpened"
            class="open-sidebar"></div>
        <div v-else
             class="close-sidebar"></div>
      </div>
    </header>
    <main>
        <router-view/>
    </main>
    <SideMenu v-show="sideBarOpened" @click="sideBarOpened = false;"/>
</template>

<script>
export default {
  data () {
    return {
      sideBarOpened: false,
    }
  },
  methods: {
    toggleSidebar () {
      this.sideBarOpened = !this.sideBarOpened;
    }
  }
}
</script>

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

          .sidebar-button-wrapper {
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;

            .open-sidebar {
              width: 40px;
              height: 5px;
              border-radius: 10px;
              background-color: #f5c518;
              position: relative;
            }

            .open-sidebar::before {
              content: "";
              position: absolute;
              left: 0;
              top: -10px;
              width: 40px;
              height: 5px;
              border-radius: 10px;
              background-color: #f5c518;
            }

            .open-sidebar::after {
              content: "";
              position: absolute;
              left: 0;
              top: 10px;
              width: 40px;
              height: 5px;
              border-radius: 10px;
              background-color: #f5c518;
            }

            .close-sidebar {
              position: absolute;
              width: 40px;
              height: 5px;
              transform: rotate(-45deg);
              border-radius: 10px;
              background-color: #f5c518;
            }

            .close-sidebar::before {
              content: "";
              position: absolute;
              width: 40px;
              height: 5px;
              transform: rotate(90deg);
              border-radius: 10px;
              background-color: #f5c518;
            }
          }
        }

        a {
            text-decoration: none;
        }
    }
</style>
