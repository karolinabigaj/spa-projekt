<template>
  <b-container fluid="lg">
    <TopBar />
    <Menu />
    <Chart></Chart>
    <Footer />
  </b-container>
</template>

<script>
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import Menu from "@/components/Menu";
import Chart from "@/components/Chart";

export default {
  name: "Main",
  components: {
    TopBar,
    Footer,
    Menu,
    Chart
  },
  data() {
    return {
      test: "heheszki",
      test2: "orzeszki"
    };
  },
  methods: {
    openCurrency() {
      console.log(this.test);
    },
    openChart() {
      console.log(this.test2);
    }
  }
};
</script>

<style scoped>
</style>
