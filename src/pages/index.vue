<template>
  <div text-gray-500>
    <div flex="~ col" justify-center items-center mt18 select-none>
      <div class="bubbles" ref="bubble" relative text-14>BUBBLE</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const bubble = useTemplateRef<HTMLElement | any>("bubble");

onMounted(() => {
  generateBubbles(bubble, "bubbles", "BUBBLE");
});
</script>
