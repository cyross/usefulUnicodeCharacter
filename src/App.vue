<template>
  <div class="text-center mt-4 items-center">
    <h1 class="text-5xl font-bold">
      文字を見つけてクリップボードにコピーするアプリ
    </h1>
    <h3 class="text-2xl font-bold">
      (注)フォントによっては、表示されない文字もございます
    </h3>
  </div>
  <div class="flex justify-center py-8">
    <Base />
  </div>
</template>

<script setup lang="ts">
import Base from '@/views/Base.vue';
</script>
