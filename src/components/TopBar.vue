<template>
  <header>
    <img id="money" class="img-fluid" src="../assets/money.svg" />
  </header>
</template>

<script>
export default {
  name: "TopBar"
};
</script>

<style scoped>
header {
  width: 100%;
  margin: 0 auto 0 auto;
  text-align: center;
}
#money {
  justify-content: flex-start;
  height: 100px;
  border-bottom: 1px solid black;
  padding: 10px;
  width: 100%;
}
</style>