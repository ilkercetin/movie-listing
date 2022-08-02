<template>
  <div class="sidebar-wrapper">
    <router-link to="/">
      <h1>Search</h1>
    </router-link>
    <router-link to="/popular-movies">
      <h1>Popular Movies</h1>
    </router-link>
    <router-link to="/favourites">
      <h1>Favorites</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SideMenu"
}
</script>

<style scoped lang="scss">
  .sidebar-wrapper {
    position: fixed;
    right: 0;
    top: 62px;
    background-color: #2C3D4E;
    padding: 20px;

    h1 {
      color: #000000;
      background-color: #f5c518;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      padding: 5px;
      margin: 5px;
    }
  }
</style>