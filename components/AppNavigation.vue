<template>
  <div class="grid grid-col-12">
    <div class="col-span-12 bg-smart_blue_01">
      <div
        class="hidden lg:flex flex-row justify-between items-center w-3/5 mx-auto"
      >
        <div class="flex flex-row justify-between items-center gap-6 py-4">
          <a href="/">
            <NuxtImg src="sstakelogo.png" class="w-12 h-auto" />
          </a>
          <h1 class="text-lg text-white font-medium">SmartStake.AI</h1>
        </div>
        <ul class="flex flex-row justify-end items-center gap-14 shadow p-4">
          <li
            v-for="(item, index) in navigationTree"
            :key="index"
            class="text-lg text-white font-medium uppercase hover:text-smart_orange_01"
          >
            <NuxtLink :to="item._path === '/main' ? '/' : item._path">
              {{ item.children[0].title }}
            </NuxtLink>
          </li>
          <a href="https://bigiba.com/registration/1S41GS" target="_blank">
            <button
              class="text-xl text-white font-light uppercase rounded-3xl px-8 py-2 bg-gradient-to-r from-[#780072] to-[#e00019] border-2 border-[#d43024] cursor-pointer"
            >
              Join us
            </button>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  navigationTree: {
    type: Array,
    default: () => [],
  },
});

onMounted(() => {
  console.log("navigationTree", props.navigationTree[0].children[0]._path);
  console.log("title", props.navigationTree[0].children[0].title);
});
</script>

<style lang="scss" scoped>
div {
  content: "";
}
</style>
