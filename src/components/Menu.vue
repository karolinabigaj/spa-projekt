<template>
  <div id="menu">
    <b-container fluid>
      <b-row>
        <b-col md>
          <router-link to="/converter">
            <b-button class="btn btn-info btn-lg">Przelicznik<br /> walut</b-button>
          </router-link>
        </b-col>
        <b-col md>
          <img src="../assets/equity.svg" class="img-fluid" alt="Money" />
        </b-col>
        <b-col md>
          <router-link to="/chart">
            <b-button class="btn btn-info btn-lg">
              Wykres <br />walutowy
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
  margin: 10% auto 10% auto;
  width: 180px;
  height: 180px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
a:hover {
  color: transparent;
}
img {
  width: 300px;
  height: 300px;
  text-align: center;
  margin: 0px auto 3% auto;
  display: flex;
  justify-content: center;
}
</style>
