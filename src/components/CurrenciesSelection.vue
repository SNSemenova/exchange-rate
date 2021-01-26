<template>
  <v-container>
    <v-card>
      <v-card-actions>
        <v-row>
          <v-col v-for="currency in availableCurrencies" :key="currency">
            <v-checkbox
              :label="currency" :value="currency" v-model="currenciesToShow">
            </v-checkbox>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
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
