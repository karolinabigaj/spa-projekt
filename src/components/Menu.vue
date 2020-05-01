<template>
  <div id="menu">
    <b-container fluid>
      <b-row class="menu-container">
        <router-link to="/converter" class="link">
          <b-button class="btn btn-info btn-lg">Przelicznik<br /> walut</b-button>
        </router-link>
        <img src="../assets/equity.svg" class="img-fluid" alt="Money" />
        <router-link to="/chart" class="link">
          <b-button class="btn btn-info btn-lg">
            Wykres <br />walutowy
          </b-button>
        </router-link>
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
  margin: 2% auto;
  border-bottom: 1px solid black;
}
.menu-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
button {
  width: 180px;
  height: 180px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.link {
  margin: 10%;
}
.link:hover {
  color: transparent;
}
.img-fluid {
  width: 300px;
  height: 300px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

  @media screen and (max-width: 830px) {
    .img-fluid {
      display: none;
    }
  }

@media screen and (max-width: 1100px) {

  .link {
    margin: 5%
  }
}

</style>
