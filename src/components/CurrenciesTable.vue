<template>
  <v-simple-table>
    <template v-slot:default>
      <tbody>
        <tr v-for="rate in rates" :key="rate.ID">
          <th>{{ rate.currency }}</th>
          <th>{{ rate.value }}</th>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    rates: {
      type: Array,
      required: true,
    },
  },
};
</script>
