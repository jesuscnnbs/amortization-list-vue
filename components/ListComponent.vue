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
      <h2
        class="font-semibold text-xl text-gray-900 dark:text-white leading-tight"
      >
        Amortizations
      </h2>
    </template>
    <div>
      <div class="flex justify-between items-center w-full px-4 py-3">
        <div class="flex items-center gap-1.5">
          <span class="text-sm leading-5">Rows per page:</span>

          <USelect
            v-model="pageCount"
            :options="[3, 5, 10, 20, 30, 40]"
            class="me-2 w-20"
            size="xs"
          />
        </div>
      </div>
      <UTable
        v-model:sort="sort"
        :rows="rows"
        :columns="columns"
        :loading="pending"
        sort-asc-icon="i-heroicons-arrow-up"
        sort-desc-icon="i-heroicons-arrow-down"
        :sort-button="{
          icon: 'i-heroicons-arrow-path-rounded-square',
          color: 'primary',
          variant: 'outline',
          square: false,
        }"
        sort-mode="manual"
      />
      <div
        class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"
      >
        <UPagination
          v-model="page"
          :page-count="parseInt(pageCount)"
          :total="totalAmortization"
        />
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { Amortization } from "@/types";
interface Sort {
  column: string;
  direction: "asc" | "desc";
}
const columns = [
  {
    key: "schedule_date",
    label: "Date",
    sortable: true,
  },
  {
    key: "state",
    label: "State",
    sortable: true,
  },
  {
    key: "amount",
    label: "Amount",
    sortable: true,
  },
  {
    key: "project_id",
    label: "Project Id",
    sortable: true,
  },
];
const pageCount = ref<string>("5");
const page = ref<number>(1);
const pageTotal = ref<number>(1);
const totalAmortization = ref<number>(5);
const rows = ref([] as Amortization[]);
const sort = ref<Sort>({
  column: "schedule_date",
  direction: "desc" as const,
});

const url = computed(() => {
  const BASE_URL = "/api/amortizations";
  if (!sort.value.column) return BASE_URL;
  return `${BASE_URL}?orderBy=${sort.value.column}&direction=${sort.value.direction}`;
});

const {
  pending,
  data: amortizations,
  refresh,
}: { data: any; pending: any; refresh: any } = await useLazyFetch(url);

watch([sort], (_newSort) => refresh());

watch(
  [amortizations, pageCount, page],
  ([newAmortizations, newPageCount, newPage]) => {
    if (newAmortizations.length) {
      totalAmortization.value = newAmortizations.length
      pageTotal.value = newAmortizations.length / parseInt(newPageCount);
      rows.value = newAmortizations.slice(
          (newPage - 1) * parseInt(newPageCount),
          newPage * parseInt(newPageCount)
        )
    } else {
      rows.value = []
    }
  }
);
</script>
