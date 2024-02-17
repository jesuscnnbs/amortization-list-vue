<template>
  <div v-if="pending">
    loading...
  </div>
  <div v-else>
    {{ amortizations.length }}
  </div>
</template>

<script setup lang="ts">

const { error, pending, data: amortizations } = await useLazyFetch('/api/amortizations')
watch(amortizations, (newAmortizations) => {
  console.log('WATCH ListComponent',newAmortizations)
})
</script>