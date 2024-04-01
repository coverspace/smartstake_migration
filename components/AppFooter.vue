<template>
  <!-- fixed bottom-0 left-0 right-0 -->
  <footer
    class="flex flex-col lg:flex-row justify-between items-center w-full mx-auto pt-4 pb-8 border-t mt-8"
    v-for="item in content"
    v-if="content"
  >
    <h1 class="text-gray-500 text-center lg:text-left w-full">
      {{ item.brand }}
      &copy;
      {{ currentYear }}
      {{ item.body.children[0].children[0].value }}
      <a :href="item.link" class="text-smart_orange_01 font-semibold">
        {{ item.title }}</a
      >
    </h1>

    <div
      class="flex flex-row justify-center lg:justify-end items-center gap-8 w-full"
    >
      <a
        v-for="(button, index) in item.footer_buttons"
        :key="index"
        :href="button.link"
        class="text-gray-500 font-semibold uppercase hover:text-smart_orange_01"
      >
        {{ button.title }}</a
      >
    </div>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = ref(new Date().getFullYear());

const { data: content } = await useAsyncData("footer", () => {
  return queryContent("/_partials/footer").where({ _partial: true }).find();
});
</script>
