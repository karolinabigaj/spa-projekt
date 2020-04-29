<template>
  <div>
    <TopBar />
    <Menu />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import Menu from "@/components/Menu";

export default {
  name: "Main",
  components: {
    TopBar,
    Footer,
    Menu
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
