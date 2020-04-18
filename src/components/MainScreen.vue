<template>
  <div class="container">
    <TopBar/>
    <div class="content">
      <div class="menu">
        <Button name="converter" title="Converter"/>
        <Button name="charts" title="Currency charts"/>
      </div>
      <div class="mainImage">
        <img id="equity" src="../assets/equity.svg"/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Button from '@/components/Button';
  import Footer from "@/components/Footer";
  import TopBar from "@/components/TopBar";

export default {
  name: 'Main',
  components: {
    TopBar,
    Footer,
    Button
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    max-width: 1600px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    min-width: 1200px;
  }
  .content{
    min-height: 84vh;
    display: flex;
    justify-content: center;
  }
  .menu{
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    justify-content: center;
    align-items: center;
  }
  .mainImage{
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    justify-content: center;
    align-items: center;
  }
  #equity{
    height: 80%;
  }
</style>
