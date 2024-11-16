<template>
  <div class="container">
    <div class="grid grid-cols-4">
      <div class="py-4 px-4 bg-green-200">
        <Categories :categories="categories" @on-click-category="onSelectCategory" />
      </div>
      <div class="py-8 px-4 col-span-3 bg-slate-500">
        <Codes :codes="codes" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

import { JSON_FILE_PATH } from '@/lib/const';
import { fetchJson } from '@/lib/fetchJson';

import { JsonDataInterface, JsonDataMapInterface } from '@/types/jsonData';

import Categories from '@/components/Categories.vue';
import Codes from '@/components/Codes.vue';

const data = ref<JsonDataMapInterface>({})
const categories = ref<string[]>([])
const codes = ref<JsonDataInterface[]>([])

const onSelectCategory = ({ category }: { category: string}) => {
  codes.value = data.value[category]
}

onMounted( async () => {
  data.value = await fetchJson(JSON_FILE_PATH);
})

watch(
  data,
  () => {
    categories.value = Array.from(Object.keys(data.value))
  }
)
</script>
