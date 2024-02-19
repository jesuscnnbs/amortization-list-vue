<template>
  <UCard
    class="w-full"
    :ui="{
      base: '',
      ring: '',
      divide: 'divide-y divide-gray-200 dark:divide-gray-700',
      header: { padding: 'px-4 py-5' },
      body: {
        padding: '',
        base: 'divide-y divide-gray-200 dark:divide-gray-700',
      },
      footer: { padding: 'p-4' },
    }"
  >
    <template #header>
      <UAvatar src="jesus.png" size="3xl" alt="Jesus" />
    </template>
    <div class="p-4">
      <h2
        class="font-semibold text-lg text-gray-900 dark:text-white leading-tight"
      >
        I'm Jesús! 😀
      </h2>
      <p
        class="font-semibold text-sm text-gray-900 dark:text-white mt-4 leading-7"
      >
        More than 4 years of web application development. I started as a
        frontend with frameworks like Vue or React. Now I can develop backend
        with languages like Java or Php.
      </p>
    </div>
  </UCard>
</template>
