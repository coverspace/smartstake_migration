<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12 bg-smart_blue_01">
      <div class="xl:hidden flex flex-row justify-between items-center">
        <a href="/">
          <NuxtImg src="sstakelogo.png" class="w-12 h-auto my-6 mx-4" />
        </a>
        <span @click="openMenu">
          <IconMenu
            class="w-10 h-auto p-2 border rounded-lg m-8 bg-gray-50 focus:bg-gray-200 text-gray-500"
          />
        </span>
      </div>
      <Transition>
        <SideBar
          :setBar="setBar"
          @cancel="setBar = false"
          :navigationTree="navigationTree"
          class="absolute top-0 right-0 z-10 w-3/4"
        />
      </Transition>

      <div
        class="hidden xl:flex flex-row justify-between items-center w-3/5 mx-auto"
      >
        <div class="flex flex-row justify-between items-center gap-6 py-4">
          <a href="/">
            <NuxtImg src="sstakelogo.png" class="w-12 h-auto" />
          </a>
          <h1 class="text-lg text-white font-medium">SmartStake.AI</h1>
        </div>
        <ul class="flex flex-row justify-end items-center gap-14 shadow p-4">
          <li
            v-for="(item, index) in navigationTree.slice(0, 3)"
            :key="index"
            class="text-lg text-white font-medium uppercase hover:text-smart_orange_01"
          >
            <NuxtLink :to="item._path === '/main' ? '/' : item._path">
              {{ item.children[0].title }}
            </NuxtLink>
          </li>
          <a href="https://bigiba.com/registration/1S41GS" target="_blank">
            <button
              class="text-xl text-white font-semibold uppercase rounded-3xl px-8 py-2 bg-gradient-to-r from-[#780072] to-[#e00019] border-2 border-[#d43024] cursor-pointer"
            >
              Join us
            </button>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconMenu from "@/components/icons/IconMenu.vue";
import SideBar from "@/components/partials/SideBar.vue";

const props = defineProps({
  navigationTree: {
    type: Array,
    default: () => [],
  },
});

const setBar = ref(false);

const openMenu = () => {
  console.log("openMenu");
  setBar.value = !setBar.value;
};

onMounted(() => {
  // console.log("navigationTree", props.navigationTree);
  // console.log("title", props.navigationTree[0].children[0].title);
});
</script>

<style lang="css" scoped>
.router-link-exact-active {
  border-bottom: 2px solid gray;
}

.router-link-exact-inactive {
  border-bottom: 2px solid transparent;
}

.v-enter-active,
.v-leave-active {
  right: 0;
  transition: right 200ms ease;
}

.v-enter-from,
.v-leave-to {
  right: -75%;
}
</style>
