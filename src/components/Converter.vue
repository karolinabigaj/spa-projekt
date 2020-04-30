<template>
  <div>
    <b-form id="form" inline>
      <label class="mr-sm-2" for="inline-form-custom-select-pref">Wybierz walute:</label>
      <div>
        <b-form-input v-model="input"></b-form-input>
        <b-form-select
          id="inline-form-custom-select-pref"
          class="mb-2 mr-sm-2 mb-sm-0"
          v-model="fromCurrency"
          :options="options"
          :value="null"
        ></b-form-select>
        <span>&#8826;&equals;&equals;&#8827;</span>
        <b-form-select
          id="inline-form-custom-select-pref"
          class="mb-2 mr-sm-2 mb-sm-0"
          v-model="toCurrency"
          :options="options"
          :value="null"
        ></b-form-select>
      </div>
      <br />
      <b-button @click="converter()" variant="primary">Calculate</b-button>
      <div>
        <strong>Wartość:</strong>
        {{result}}
      </div>
    </b-form>

    <br />
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Converter",
  data() {
    return {
      options: [
        { value: "null", text: "Wybierz walute" },
        { value: "EUR", text: "Euro" },
        { value: "USD", text: "Dolar amerykański" },
        { value: "JPY", text: "Jen japoński" },
        { value: "AUD", text: "Dolar australijski" },
        { value: "CAD", text: "Dolar kanadyjski" },
        { value: "CHF", text: "Frank szwajcarski" },
        { value: "CNY", text: "Yuan chiński" },
        { value: "SEK", text: "Szwedzka korona" },
        { value: "NZD", text: "Dolar nowozelandzki" },
        { value: "PLN", text: "Złoty polski" }
      ],
      input: "",
      fromCurrency: "null",
      toCurrency: "null",
      result: 0,
      rates: {}
    };
  },
  mounted() {
    axios.get("https://api.exchangeratesapi.io/latest").then(response => {
      this.info = response.data.rates;
      for (let [key, value] of Object.entries(this.info)) {
        this.rates[key] = value;
      }
      this.rates["EUR"] = 1; // Api Based on euro
    });
  },
  methods: {
    converter() {
      if (isNaN(this.input) || from == null || to == null) {
        this.result = "Podana zła wartość";
        return this.result;
      }
      let input = parseInt(this.input);
      let from = this.rates[this.fromCurrency];
      let to = this.rates[this.toCurrency];
      this.result = input * (to / from).toFixed(4);
      return this.result;
    }
  }
};
</script>

<style scoped>
#form {
  display: block;
  text-align: center;
}
</style>