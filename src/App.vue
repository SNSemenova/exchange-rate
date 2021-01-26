<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Курсы обмена валют в RUB</v-toolbar-title>
    </v-app-bar>

    <ExchangeRate/>

    <v-footer>
      <span>Источник курсов - </span>
      <a href="https://www.cbr-xml-daily.ru/" target="_blank" rel="noopener">API для курсов ЦБ РФ</a>
    </v-footer>
  </v-app>
</template>

<script>
import ExchangeRate from './components/ExchangeRate.vue';

export default {
  name: 'App',
  components: {
    ExchangeRate,
  },
};
</script>
