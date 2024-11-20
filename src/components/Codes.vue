<template>
  <div>
    <div v-if="codes.length === 0" class="py-2 px-2 bg-white">
      左側のカテゴリリストからカテゴリをクリックしてください
    </div>
    <div v-else>
      <div class="flex flex-wrap">
        <div v-for="code in codes" class="flex">
          <CodeLine :char="code" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CodeLine from '@/components/CodeLine.vue';

defineProps<{
  codes: string[]
}>()
</script>