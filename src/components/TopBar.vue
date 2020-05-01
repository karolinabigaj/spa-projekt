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
  border-bottom: 1px solid black;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
}
#money {
  height: 70px;
}
</style>