<template>
  <div class="grid grid-col-12">
    <div class="col-span-12">
      <div class="flex flex-col justify-center items-center h-full">
        <div
          class="flex flex-col justify-center items-center gap-10 my-16 h-full w-full"
        >
          <ContentDoc path="main/block_05" v-slot="{ doc }">
            <h1 class="text-2xl text-center font-medium text-gray-600">
              {{ doc.description }}
            </h1>

            <h1
              class="text-[4rem] text-center font-bold bg-gradient-to-r from-[#780072] to-[#e00019] inline-block text-transparent bg-clip-text uppercase"
            >
              {{ doc.label }}
            </h1>

            <ul class="flex flex-row justify-center items-start gap-4">
              <li
                v-for="(item, index) in doc.questions"
                :key="question"
                class=""
              >
                <button
                  @click="elementTabs(index)"
                  class="text-lg font-medium shadow-xl uppercase rounded-3xl px-8 py-2"
                  :class="
                    index === activeTab
                      ? 'text-gray-50 bg-gradient-to-r from-[#cc002a] to-[#960057]'
                      : 'text-gray-600 bg-gray-50'
                  "
                >
                  {{ item.question[0].title }}
                </button>
              </li>
            </ul>

            <div class="grid grid-cols-12 w-3/5">
              <div
                v-for="(item, index) in doc?.questions[activeTab]"
                :key="question"
                class="col-span-12"
              >
                <div v-for="(set, index) in item" :key="set">
                  <div v-for="element in set" :key="element">
                    <template v-if="index > 0">
                      <div class="flex flex-col items-center gap-1 mb-4">
                        <div
                          @click="pickItem(index)"
                          class="flex flex-row justify-between items-center bg-gray-50 shadow-lg cursor-pointer w-full"
                        >
                          <h1
                            class="px-6 py-4 text-lg font-bold text-gray-600 rounded-t-sm w-full"
                          >
                            {{ element.question }}
                          </h1>
                          <IconArrow
                            class="w-10 h-auto text-smart_orange_01 p-2 mx-2 border rounded-full bg-white hover:bg-gray-50"
                            :class="{ 'rotate-180': index === activeItem }"
                          />
                        </div>
                        <p
                          v-show="index === activeItem"
                          class="bg-white px-6 py-4 text-gray-500 font-medium shadow-lg rounded-b-sm"
                        >
                          {{ element.answer }}
                        </p>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </ContentDoc>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconArrow from "./../components/icons/IconArrow.vue";
const activeTab = ref<number>(0);
const activeItem = ref<number>(0);

const elementTabs = (index: number) => {
  activeTab.value = index;
  activeItem.value = 0;
};
const pickItem = (index: number) => {
  activeItem.value = index;
};
</script>
<style lang="css" scoped>
div::after {
  content: "";
}
</style>
