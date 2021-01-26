<template>
  <main>
    <currencies-selection/>
    <currencies-table :rates="ratesToShow"/>
    <button type="button" @click="getCurrencies()">Обновить курсы</button>
  </main>
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
    };
  },
  mounted() {
    this.getCurrencies();
    this.requestInterval = setInterval(this.getCurrencies, 10000);
  },
  methods: {
    getCurrencies() {
      fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(
          (response) => response.json(),
        ).then((json) => {
          this.allRates = json.Valute;
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

<style scoped>
main {
  flex-grow: 1;
}
</style>
