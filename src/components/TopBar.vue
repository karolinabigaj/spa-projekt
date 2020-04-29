<template>
  <img id="money" class="img-fluid" src="../assets/money.svg" />
</template>

<script>
export default {
  name: "TopBar"
};
</script>

<style>
#money {
  display: flex;
  justify-content: flex-start;
  max-height: 8vh;
  min-height: 8vh;
  width: 100%;
  border-bottom: 1px solid black;
  padding: 0.7vh;
}
</style>