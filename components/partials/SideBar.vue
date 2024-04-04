<template>
  <div
    v-show="setBar"
    class="h-full overflow-hidden rounded-l-xl border border-gray-100 bg-gradient-to-r from-blue-300 to-gray-200"
  >
    <div class="flex flex-col justify-start items-start w-full h-full">
      <div
        class="flex flex-row justify-between items-center border-b-2 border-blue-500 w-full"
      >
        <div
          class="flex flex-row justify-start items-center ml-6 gap-x-2 w-full"
        >
          <IconSidebar class="w-8 h-auto text-gray-600" />
          <h1 class="text-lg text-gray-600 font-semibold">Sidebar</h1>
        </div>
        <span @click="$emit('cancel')" class="ml-auto mr-0">
          <IconClose
            class="w-10 h-auto p-2 m-8 text-gray-500 border-2 rounded-lg bg-slate-50 active:bg-slate-200"
          />
        </span>
      </div>
      <ul class="m-4">
        <li
          v-for="(item, index) in navigationTree.slice(0, 3)"
          :key="index"
          class="flex flex-row justify-start items-center w-full px-4 py-2"
        >
          <NuxtLink
            :to="item._path === '/main' ? '/' : item._path"
            class="text-gray-600 font-medium text-xl pb-1"
          >
            {{ item.children[0].title }}
          </NuxtLink>
        </li>
        <hr class="border-b border-blue-500 w-full" />
        <li
          v-for="(item, index) in navigationTree.slice(3)"
          :key="index"
          class="flex flex-row justify-start items-center w-full px-4 py-2"
        >
          <NuxtLink
            :to="item._path === '/main' ? '/' : item._path"
            class="text-gray-600 font-medium text-xl pb-1"
          >
            {{ item.children[0].title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import IconClose from "@/components/icons/IconClose.vue";
import IconSidebar from "@/components/icons/IconSidebar.vue";

const props = defineProps({
  setBar: {
    type: Boolean,
  },
  navigationTree: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["cancel"]);

// watch(
//   () => props.setBar,
//   (newValue) => {
//     if (newValue) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }
// );
</script>

<style lang="css" scoped>
.router-link-exact-active::before {
  content: "•";
  margin-left: -16px;
  position: absolute;
  color: gray;
}

.router-link-exact-inactive::before {
  content: "•";
  margin-left: -16px;
  position: absolute;
  color: transparent;
}
</style>
