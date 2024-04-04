<template>
  <div
    v-if="!cookieAccepted"
    class="fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-[#00000099]"
  >
    <!-- lg:h-1/3 -->
    <form
      v-for="(item, index) in content"
      v-if="content"
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-1/3 p-8 gap-8 rounded-lg shadow-lg border bg-gray-100 flex flex-col justify-between items-center"
    >
      <div class="flex flex-col justify-start items-start gap-4">
        <h1
          class="text-gray-600 text-3xl flex flex-row justify-between items-center gap-2"
        >
          <span>{{ item.title }}</span>
          <IconCookies class="w-8 h-auto text-amber-600" />
        </h1>
        <p class="text-justify text-sm lg:text-xl text-gray-600 font-normal">
          {{ item.body.children[0].children[0].value }}
        </p>
        <div class="flex flex-row justify-start items-center gap-4">
          <input
            type="checkbox"
            :name="terms + index.toString()"
            :id="terms + index.toString()"
            class="transform scale-150 cursor-pointer"
            required
          />
          <label
            :for="terms + index.toString()"
            class="text-justify text-sm lg:text-xl text-gray-600 font-normal cursor-pointer"
            >{{ item.text_terms }}</label
          >
        </div>
      </div>
      <div class="flex flex-row justify-center items-center gap-4">
        <button
          type="submit"
          @click="acceptCookies"
          class="text-xs xl:text-xl text-white font-normal uppercase rounded-3xl px-8 py-2 bg-gradient-to-r from-[#780072] to-[#e00019] border-2 border-[#d43024] cursor-pointer"
        >
          {{ item.button_accept }}
        </button>
        <button
          @click="declineCookies"
          class="text-xs xl:text-xl text-gray-600 font-normal uppercase rounded-3xl px-8 py-2 border-2 border-gray-400 cursor-pointer"
        >
          {{ item.button_cancel }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import IconCookies from "@/components/icons/IconCookies.vue";
import { ref } from "vue";

const { data: content } = await useAsyncData("cookies", () => {
  return queryContent("/_partials/cookies").where({ _partial: true }).find();
});

const cookieAccepted = ref(false);

const acceptCookies = () => {
  document.cookie =
    "cookieAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  cookieAccepted.value = true;
};

const declineCookies = () => {
  document.cookie =
    "cookieAccepted=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  cookieAccepted.value = true;
};

const checkCookie = () => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === "cookieAccepted") {
      cookieAccepted.value = value === "true";
      break;
    }
  }
};

onMounted(() => {
  checkCookie();
});
</script>
