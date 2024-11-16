<template>
  <div class="flex px-1 py-1">
    <div class="bg-white text-4xl text-center w-12 py-2">
      {{  char }}
    </div>
    <div class="bg-white text-center py-2 pl-1 pr-2">
      <CopyButton :char="char" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CopyButton from '@/components/CopyButton.vue';

defineProps<{
  char: string,
}>()
</script>