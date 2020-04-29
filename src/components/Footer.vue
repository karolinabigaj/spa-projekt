<template>
  <footer>
    <span>
      Icons made by
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> and
      <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    title: String
  }
};
</script>

<style>
footer {
  max-height: 8vh;
  min-height: 8vh;
  width: 100%;
  display: flex !important;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid black;
}
span {
  padding-left: 3vw;
}
a {
  color: #71c9ce !important;
}
</style>