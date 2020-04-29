<template>
  <div id="menu">
    <b-container fluid>
      <b-row>
        <b-col md>
          <b-button :pressed.sync="ConverterToggle" class="btn btn-info btn-lg">{{ConverterToggle}}</b-button>
        </b-col>
        <b-col md>
          <img src="../assets/equity.svg" class="img-fluid" alt="Money" />
        </b-col>
        <b-col md>
          <b-button :pressed.sync="ChartToggle" class="btn btn-info btn-lg">{{ChartToggle}}</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return { ConverterToggle: false, ChartToggle: false };
  },
  name: "Menu"
};
</script>

<style scoped>
#menu {
  margin: 2% auto 2% auto;
}
button {
  margin: 2% auto 2% auto;
  width: 230px;
  height: 200px;
  text-align: center;
  display: flex;
  justify-content: center;
}
img {
  width: 230px;
  height: 200px;
  text-align: center;
  margin: 0% auto 0% auto;
  display: flex;
  justify-content: center;
}
</style>
