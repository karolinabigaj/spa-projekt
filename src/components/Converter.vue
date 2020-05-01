<template>
  <div>
    <b-container fluid class="form">
      <!-- <b-form class="form" inline> -->
      <label md class="mr-sm-2">Wybierz walute:</label>
      <b-row>
        <b-col md>
          <b-form-input placeholder="Wprowadź wartość" v-model="input"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col md>
          <b-form-select
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="fromCurrency"
            :options="options"
            :value="null"
          ></b-form-select>
        </b-col>
      </b-row>
      <b-row>
        <b-col md>
          <b-button class="btn btn-info btn-lg"
            block
            style="background-color: #17a2b8;"
            @click="changePlaces()"
          ><img src="../assets/shapes-and-symbols.svg" class="img-fluid" alt="arrows" /></b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col md>
          <b-form-select
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="toCurrency"
            :options="options"
            :value="null"
          ></b-form-select>
        </b-col>
      </b-row>
      <b-row>
        <b-col id="value" v-show="convertedCurrency">
          <strong>Wartość:</strong>
          {{ convertedCurrency }}
        </b-col>
      </b-row>
    </b-container>
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
      if (
        this.input.length == 0 ||
        this.input.includes(",") ||
        this.fromCurrency == this.toCurrency
      ) {
        return 0;
      }
      let input = parseFloat(this.input);
      if (isNaN(input)) {
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
.form {
  text-align: center;
}
input,select, button{
  display: flex;
  width: 40%;
  margin-top: 1%;
  margin-left: 30%;
  justify-content: center;
}
img {
  width: 6%;
  height: 6%;
}
#value{
  margin-top: 1%;
}
</style>