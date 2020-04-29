<template>
  <div id="menu">
    <b-container fluid>
      <b-row>
        <b-col md>
          <router-link to="/converter">
            <b-button class="btn btn-info btn-lg">Currency Converter</b-button>
          </router-link>
        </b-col>
        <b-col md>
          <img src="../assets/equity.svg" class="img-fluid" alt="Money" />
        </b-col>
        <b-col md>
          <router-link to="/chart">
            <b-button class="btn btn-info btn-lg">
              Currency
              <br />Chart
            </b-button>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style scoped>
#menu {
  margin: 2% auto 2% auto;
  border-bottom: 1px solid black;
}
button {
  margin: 2% auto 2% auto;
  width: 200px;
  height: 200px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 200px;
  height: 200px;
  text-align: center;
  margin: 0px auto 0px auto;
  display: flex;
  justify-content: center;
}
</style>
