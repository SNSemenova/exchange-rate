<template>
  <div>
    <div v-for="rate in rates" :key="rate.ID">
      <span>{{ rate.currency }}</span>
      <span>{{ rate.value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rates: ({}),
  },
};
</script>
