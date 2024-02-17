<template>
  <div v-if="pending">
    loading...
  </div>
  <div v-else>
    <UTable :rows="amortizations" />
  </div>
</template>

<script setup lang="ts">

const { error, pending, data: amortizations }: {data: any, error: any, pending: any}= await useLazyFetch('/api/amortizations')
watch(amortizations, (newAmortizations) => {
  console.log('WATCH ListComponent',newAmortizations)
})

</script>