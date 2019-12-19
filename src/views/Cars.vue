<template>
  <div class="cars container-fluid">
    <div class="row">
      <div class="col">
        <h4>gregslist</h4>
        <div id="nav" class="d-flex justify-content-center">
          <div class="m-1">
            <router-link v-if="$route.name != 'home'" :to="{ name: 'home' }"
              >Home</router-link
            >
          </div>
          <div>
            <router-link v-if="$route.name != 'cars'" :to="{ name: 'cars' }"
              >Cars</router-link
            >
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
    <div class="row">
      <div class="col-8">insert all car posts here</div>
      <div class="col-3">
        <h5>Add Car For Sale</h5>
        <form @submit.prevent="createCar">
          <div class="form-group">
            <input
              required
              class="form-control form-control-sm"
              type="text"
              placeholder="Make"
              id="make"
              v-model="newCar.make"
            />
          </div>
          <div class="form-group">
            <input
              required
              class="form-control form-control-sm"
              type="text"
              placeholder="Model"
              id="model"
              v-model="newCar.model"
            />
          </div>
          <div class="form-group">
            <input
              required
              class="form-control form-control-sm"
              type="number"
              placeholder="Year"
              id="year"
              v-model="newCar.year"
            />
          </div>
          <div class="form-group">
            <input
              required
              class="form-control form-control-sm"
              type="number"
              placeholder="Price"
              id="price"
              v-model="newCar.price"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control form-control-sm"
              type="text"
              placeholder="Image URL"
              id="imgUrl"
              v-model="newCar.imgUrl"
            />
          </div>
          <div class="form-group">
            <textarea
              id="description"
              type="text"
              placeholder="Enter short description..."
              v-model="newCar.description"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cars",
  data() {
    return {
      newCar: {
        make: "",
        model: "",
        price: "",
        year: "",
        imgUrl: "",
        description: ""
      }
    };
  },
  methods: {
    createCar() {
      let car = { ...this.newCar };
      this.$store.dispatch("createCar", car);
      this.newCar = {
        make: "",
        model: "",
        price: "",
        year: "",
        imgUrl: "",
        description: ""
      };
    }
  }
};
</script>

<style>
h4 {
  color: purple;
  margin-bottom: -2px;
  padding-left: 4px;
  padding-top: 5px;
}

#nav {
  font-size: 10pt;
}

.col {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}

.container-fluid {
  height: 100%;
  margin: 0;
}

#description {
  width: 100%;
  height: 35vh;
  font-size: 10pt;
}
</style>
