<template>
  <div id="app">
    <div class="container-fluid m-0 mb-5 p-0">
      <b-navbar toggleable="lg" type="dark" variant="primary" class="p-3">
        <b-navbar-brand to="/">
          <img src="./assets/spellwell-white-3d.svg" width="200" alt="SpellWell">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap');
body {
  font-family: 'Comic Neue', cursive, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

</style>
