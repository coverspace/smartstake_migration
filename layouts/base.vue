<script setup>
const route = useRoute();
const { data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation();
});
</script>

<template>
  <div class="base-container">
    <header class="">
      <slot name="navigation">
        <AppNavigation :navigation-tree="navigation" />
      </slot>
    </header>
    <section class="bg-gray-200">
      <slot />
    </section>
    <footer class="">
      <AppFooter />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
div {
  content: "";
}
</style>
