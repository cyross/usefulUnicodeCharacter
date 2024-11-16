<template>
  <div>
    <div v-if="codes.length === 0" class="py-2 px-2 bg-white">
      左側のカテゴリリストからカテゴリをクリックしてください
    </div>
    <div v-else>
      <div class="flex flex-wrap">
        <div v-for="code in codes" class="flex">
          <CodeLine v-if="isVisible(code.大文字)" :char="code.大文字" />
          <CodeLine v-if="isVisible(code.小文字)" :char="code.小文字" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type JsonDataInterface } from '@/types/jsonData'

import CodeLine from '@/components/CodeLine.vue';

const isVisible = (char: string): boolean =>
  char.length > 0

defineProps<{
  codes: JsonDataInterface[]
}>()
</script>