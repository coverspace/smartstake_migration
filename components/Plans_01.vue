<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12 xl:w-2/3 mx-4 xl:mx-auto">
      <div
        class="container flex flex-col justify-between items-center mx-auto w-full h-full"
      >
        <ContentDoc path="/plans/block_01" v-slot="{ doc }">
          <div
            v-for="(set, index) in doc.sets"
            :key="set"
            class="flex flex-col xl:flex-row justify-start items-center mt-8 xl:mt-16 h-full w-full rounded-lg shadow-lg border last:mb-16"
          >
            <div
              class="flex flex-col justify-center items-center h-full w-full"
            >
              <NuxtImg
                v-if="set.image"
                :src="set.image"
                class="m-0 p-0 w-full h-full bg-center bg-no-repeat bg-cover bg-fixed rounded-t-lg xl:rounded-l-lg xl:rounded-t-none"
              />
            </div>
            <div
              class="flex flex-col justify-between items-start w-full p-4 xl:p-6 h-full"
            >
              <div class="flex flex-col justify-start items-start gap-2">
                <h1 class="text-gray-600 font-semibold text-2xl truncate">
                  {{ set.title }}
                </h1>
                <!-- truncate text -->
                <p class="text-gray-500 text-lg text-justify truncate-5">
                  {{ set.text }}
                </p>
                <div
                  class="flex flex-col xl:flex-row justify-start items-center w-full"
                >
                  <small
                    class="text-xs text-gry-500 font-semibold uppercase cursor-pointer my-4 xl:my-0"
                  >
                    {{ set.hint }}
                  </small>
                  <button
                    @click="openModal(index)"
                    class="text-base ml-auto mr-0 text-white font-semibold uppercase rounded-md px-4 py-1 bg-blue-900 cursor-pointer"
                  >
                    {{ set.text_button }}
                  </button>
                </div>
              </div>

              <hr class="border-b border-gray-200 my-8 w-full" />

              <div
                class="flex flex-col xl:flex-row justify-center items-center gap-8 w-full"
              >
                <NuxtLink
                  :to="set.buy_link"
                  class="text-base w-full xl:w-auto xl:ml-auto xl:mr-0 whitespace-nowrap text-white font-semibold uppercase rounded-3xl px-8 py-2 bg-gradient-to-r from-[#780072] to-[#e00019] border-2 border-[#d43024] cursor-pointer"
                >
                  {{ set.buy_button }}
                </NuxtLink>
                <div
                  class="flex flex-row justify-between items-center w-full gap-4"
                >
                  <div
                    class="flex flex-col justify-between items-center whitespace-nowrap px-8 py-2 border border-gray-300 rounded-md bg-gradient-to-r from-blue-800 to-indigo-200 shadow-md"
                  >
                    <h1 class="text-white text-2xl font-bold">
                      {{ set.stat_number }}
                    </h1>
                    <p class="text-white font-semibold">
                      {{ set.stat_text }}
                    </p>
                  </div>
                  <div
                    class="flex flex-col justify-between items-center w-full"
                  >
                    <h1
                      class="text-gray-600 text-lg xl:text-4xl font-bold bg-gradient-to-r from-[#780072] to-[#e00019] inline-block text-transparent bg-clip-text"
                    >
                      <span class="text-5xl xl:text-4xl">{{
                        set.stat_percentage
                      }}</span>
                      <br class="xl:hidden" />
                      in
                      {{ set.stat_date }}
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <!-- <pre class="border">{{ set.guides }}</pre> -->
          </div>
        </ContentDoc>
      </div>
    </div>

    <Transition>
      <ContentDoc path="/plans/block_01" v-slot="{ doc }">
        <ModalBar
          :setModal="setModal"
          @cancel="setModal = false"
          :guidesData="doc.sets[setModalNumber]"
        />
      </ContentDoc>
    </Transition>
  </div>
</template>

<script setup>
import ModalBar from "@/components/partials/ModalBar.vue";

const setModal = ref(false);
const setModalNumber = ref(null);

const openModal = (index) => {
  setModalNumber.value = index;
  console.log("openModal", index);
  setModal.value = !setModal.value;
};
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
