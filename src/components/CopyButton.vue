<template>
  <div class="flex">
    <div>
      <button class="bg-cyan-200 py-1 px-2 border border-spacing-1 border-black rounded-lg" @click="copyToClipboard">
        <span class="material-symbols-outlined">content_copy</span>
      </button>
    </div>
    <input id="copy-text" type="hidden" :value="char" />
  </div>
</template>

<script setup lang="ts">
// Props 定義
const props = defineProps<{
  char: string;
}>();

const  isIOS = () => {
  const agent = window.navigator.userAgent;
  return agent.indexOf("iPhone") != -1 || agent.indexOf("iPad") != -1 || agent.indexOf("iPod") != -1;
}

const copyIOS = () => {
  const doc = document.getElementById("copy-text") as HTMLInputElement;
  const selected = window.getSelection()!;

  const range = document.createRange();

  range.selectNodeContents(doc);

  selected.removeAllRanges();
  selected.addRange(range);

  document.execCommand("copy");
}

// クリップボードにコピーする関数
const copyToClipboard = async () => {
  try {
    if (isIOS()) {
      copyIOS();
    }
    else {
      await navigator.clipboard.writeText(props.char);
    }
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
</script>
