<template>
  <v-main>
    <currencies-selection/>
    <v-container v-if="ratesToShow.length > 0">
      <v-card :loading="isLoading">
        <v-container>
          <currencies-table :rates="ratesToShow"/>
          <v-divider/>
          <v-card-actions>
            <v-btn type="button" @click="getCurrencies()">Обновить курсы</v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import CurrenciesTable from './CurrenciesTable.vue';
import CurrenciesSelection from './CurrenciesSelection.vue';

export default {
  name: 'ExchangeRate',
  components: {
    CurrenciesTable,
    CurrenciesSelection,
  },
  data() {
    return {
      allRates: ({}),
      requestInterval: null,
      isLoading: false,
    };
  },
  mounted() {
    this.getCurrencies();
    this.requestInterval = setInterval(this.getCurrencies, 10000);
  },
  methods: {
    getCurrencies() {
      this.isLoading = true;
      fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(
          (response) => response.json(),
        ).then((json) => {
          this.allRates = json.Valute;
          setTimeout(() => { this.isLoading = false; }, 1000);
        });
    },
  },
  computed: {
    currenciesToShow() {
      return this.$store.state.currenciesToShow;
    },
    ratesToShow() {
      return Object.keys(this.allRates).reduce((previousValue, currentValue) => {
        if (this.currenciesToShow.includes(currentValue)) {
          return [
            ...previousValue,
            { currency: currentValue, value: this.allRates[currentValue].Value },
          ];
        }
        return previousValue;
      }, []);
    },
  },
  destroyed() {
    clearInterval(this.requestInterval);
  },
};
</script>
