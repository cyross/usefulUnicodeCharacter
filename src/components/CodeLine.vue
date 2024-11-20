<template>
  <div class="px-1 py-1">
    <div class="flex bg-white px-2 py-2">
      <div class="text-4xl text-center">{{  char }}</div>
      <div class="text-center pl-2">
        <CopyButton :char="char" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CopyButton from '@/components/CopyButton.vue';

defineProps<{
  char: string,
}>()
</script>