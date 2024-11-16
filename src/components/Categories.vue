<template>
  <div class="py-2 mb-4 justify-items-center">
    <div v-for="category in categories" class="mb-2">
      <button type="button" class="py-1 px-4 text-sm rounded-lg border border-black bg-blue-500" @click="() => onClickCategory(category)">
        {{ category }}
      </button>
    </div>
  </div>
  <div>
    <span>選択中のカテゴリ：{{ selectedCategory }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<
{
  categories: string[]
}
>()

const emits = defineEmits(['on-click-category'])

const selectedCategoryString = ref<string>('')

const selectedCategory = computed(() => selectedCategoryString.value.length > 0 ? selectedCategoryString.value : 'なし')

const onClickCategory = (category: string) => {
  selectedCategoryString.value = category

  emits('on-click-category', { category })
}
</script>