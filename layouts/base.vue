<template>
  <div class="">
    <header class="sticky top-0 z-10">
      <slot name="navigation">
        <AppNavigation :navigation-tree="navigation" />
      </slot>
    </header>
    <section class="bg-gray-200">
      <slot />
    </section>
    <footer class="lg:container mx-auto">
      <AppFooter />
    </footer>
    <ScrollToTopButton />
  </div>
</template>

<script lang="ts" setup>
import ScrollToTopButton from "@/components/partials/ScrollToTopButton.vue";

const route = useRoute();
const { data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation();
});
</script>
