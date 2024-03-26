<template>
  <footer class="flex flex-row justify-center items-center fixed bottom-0 w-full border border-red-500" v-if="content">
    <div v-for="item in content">
      <h1>{{ item.title }} - {{ item.body.children[0].children[0].value }}</h1>
    </div>
  </footer>
</template>

<script setup>
const { data: content } = await useAsyncData("footer", () => {
  return queryContent("/_partials/footer").where({ _partial: true }).find();
});
</script>

<script setup></script>

<style lang="scss" scoped>
div {
  content: "";
}
</style>
