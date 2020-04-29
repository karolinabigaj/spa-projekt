<template>
  <div id="menu">
    <b-row>
      <button type="button" class="btn btn-info btn-lg">Info</button>
      <img src="../assets/equity.svg" class="img-fluid" alt="Money" />
      <button type="button" class="btn btn-info btn-lg">Info</button>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>
<style scoped>
button {
  margin: 10px auto 10px auto;
  width: 200px;
  height: 200px;
  text-align: center;
}
img {
  text-align: center;
  margin: 0 auto 0 auto;
  max-height: 400px;
}
</style>
