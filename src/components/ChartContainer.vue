<template>
  <div class="container">
    <div>
      <b-form-select
        v-model="selected"
        :options="options"
        size="sm"
        class="mt-3"
        @change="setupChart"
      ></b-form-select>
    </div>
    <line-chart v-if="loaded" :chart-data="datacollection" :options="chartoptions"></line-chart>
  </div>
</template>

<script>
import LineChart from "./Chart.vue";
import axios from "axios";

export default {
  name: "LineChartContainer",
  components: { LineChart },
  data: () => ({
    loaded: false,
    datacollection: null,
    chartoptions: {
      responsive: true,
      maintainAspectRatio: false
    },
    selected: null,
    options: [
      { value: "null", text: "Wybierz walutę", disabled: true },
      { value: "EUR", text: "Euro" },
      { value: "USD", text: "Dolar amerykański" },
      { value: "JPY", text: "Jen japoński" },
      { value: "AUD", text: "Dolar australijski" },
      { value: "CAD", text: "Dolar kanadyjski" },
      { value: "CHF", text: "Frank szwajcarski" },
      { value: "CNY", text: "Yuan chiński" },
      { value: "SEK", text: "Szwedzka korona" },
      { value: "NZD", text: "Dolar nowozelandzki" }
    ]
  }),
  methods: {
    setupChart: function(currency) {
      if (currency == "null") {
        return;
      }
      try {
        axios
          .get(
            `https://api.nbp.pl/api/exchangerates/rates/a/${currency}/last/30/?format=json`
          )
          .then(response => {
            let dates = [];
            let mid = [];
            response.data.rates.forEach(rate => {
              dates.push(rate.effectiveDate);
              mid.push(rate.mid);
            });
            this.datacollection = {
              labels: dates,
              datasets: [
                {
                  label: `${currency}/PLN`,
                  data: mid,
                  borderColor: "#80b6f4",
                  pointBorderColor: "#80b6f4",
                  pointBackgroundColor: "#80b6f4",
                  pointHoverBackgroundColor: "#80b6f4",
                  pointHoverBorderColor: "#80b6f4",
                  pointBorderWidth: 10,
                  pointHoverRadius: 10,
                  pointHoverBorderWidth: 1,
                  pointRadius: 3,
                  fill: false,
                  borderWidth: 4
                }
              ]
            };
            this.loaded = true;
          });
      } catch (e) {
        console.error(e);
      }
    }
  },
  mounted() {
    this.setupChart("EUR");
  }
};
</script>