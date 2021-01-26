<template>
  <div id="app">
    <header>
      <h1>Курсы обмена валют в RUB</h1>
    </header>
    <ExchangeRate/>
    <footer>
      <a href="https://www.cbr-xml-daily.ru/" target="_blank" rel="noopener">API для курсов ЦБ РФ</a>
    </footer>
  </div>
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

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
