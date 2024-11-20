<template>
  <div>
    <div v-if="subCategories.length === 0" class="py-2 px-2 bg-white">
      左側のカテゴリリストからカテゴリをクリックしてください
    </div>
    <div v-else>
      <div v-for="subCategory in subCategories">
        <div class="w-full text-center pt-1 pb-2 mb-2 bg-slate-300">
          <span class="text-2xl font-bold">{{  subCategory }}</span>
        </div>
        <div class="flex flex-wrap mb-2">
          <div v-for="code in codes[subCategory]" class="flex">
            <CodeLine :char="code" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import CodeLine from '@/components/CodeLine.vue';

import { JsonDataBySubCategory } from '@/types/jsonData';

const props = defineProps<{
  codes: JsonDataBySubCategory
}>()

const subCategories = computed(() => Array.from(Object.keys(props.codes)))
</script>