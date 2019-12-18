<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1>gregslist</h1>
        <div id="nav" class="d-flex justify-content-center">
          <div class="m-1">
            <router-link v-if="$route.name != 'home'" :to="{name:'home'}">Home</router-link>
          </div>
          <div class="m-1">
            <router-link to="/cars">Cars</router-link>
          </div>
          <div class="m-1">
            <router-link to="/houses">Houses</router-link>
          </div>
          <div class="m-1">
            <router-link to="/jobs">Jobs</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
h1 {
  color: purple;
}

.container-fluid {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
