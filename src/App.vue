<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
      <a class="navbar-brand" href="#">Buy Me</a>

      <ul class="navbar-nav flex-row mr-auto">
        <li class="nav-item active">
          <RouterLink to="/" class="nav-link">Shopping</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/edit" class="nav-link">Edit</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="container mt-3">
      <router-view/>
    </div>
  </div>
</template>

<style lang="stylus">
.nav-item
  margin-right 1rem
</style>
