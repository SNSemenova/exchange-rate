<template>
  <div>
    <template v-for="currency in availableCurrencies">
      <input :key="currency"
        type="checkbox" :id="currency" :value="currency" v-model="currenciesToShow">
      <label :key="`${currency}-label`" :for="currency">{{ currency }}</label>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      availableCurrencies: ['USD', 'EUR', 'CAD', 'JPY'],
    };
  },
  computed: {
    currenciesToShow: {
      get() {
        return this.$store.state.currenciesToShow;
      },
      set(newValue) {
        this.$store.commit('changeCurrenciesList', newValue);
      },
    },
  },
};
</script>
