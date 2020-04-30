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
        <b-button @click="changePlaces()">&#8826;&equals;&equals;&#8827;</b-button>
        <b-form-select
          id="inline-form-custom-select-pref"
          class="mb-2 mr-sm-2 mb-sm-0"
          v-model="toCurrency"
          :options="options"
          :value="null"
        ></b-form-select>
      </div>
      <br />
      <div v-show="convertedCurrency">
        <strong>Wartość:</strong>
        {{ convertedCurrency }}
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
      fromCurrency: "USD",
      toCurrency: "EUR",
      rates: {}
    };
  },
  mounted() {
    axios.get("https://api.exchangeratesapi.io/latest").then(response => {
      this.info = response.data.rates;
      for (let [key, value] of Object.entries(this.info)) {
        this.rates[key] = value;
      }
      this.rates["EUR"] = 1; // Calculations based on EURO from
    });
  },
  computed: {
    convertedCurrency() {
      if (this.input.length == 0 || this.input.includes(",") || this.fromCurrency == this.toCurrency  ) {
        return 0;
      }
      let input = parseFloat(this.input);
      if(isNaN(input)) {
        return 0;
      }

      let from = this.rates[this.fromCurrency];
      let to = this.rates[this.toCurrency];

      return (input * (to / from)).toFixed(2);
    }
  },
  methods: {
    changePlaces() {
      let temp = this.fromCurrency;
      this.fromCurrency = this.toCurrency;
      this.toCurrency = temp;
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