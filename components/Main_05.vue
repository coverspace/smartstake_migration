<template>
  <div class="grid grid-col-12">
    <div class="col-span-12">
      <div class="flex flex-col justify-center items-center h-full">
        <div
          class="flex flex-col justify-center items-center gap-10 my-16 h-full"
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
                  class="text-lg text-white font-medium shadow-xl uppercase rounded-3xl px-8 py-2"
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

            <div
              class="flex flex-col justify-center items-start gap-4 border border-red-500"
            >
              <div
                v-for="(item, index) in doc?.questions[activeTab]"
                :key="question"
              >
                <div
                  v-for="(set, index) in item"
                  :key="set"
                  class="text-lg text-black font-medium shadow-xl uppercase rounded-3xl px-8 py-2"
                >
                  <div v-for="element in set" :key="element">
                    <template v-if="index > 0">
                      <h1 class="border border-red-500">
                        {{ element.question }}
                      </h1>
                      <p class="border border-blue-500">{{ element.answer }}</p>
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
const activeTab = ref<number>(0);

const elementTabs = (index: number) => {
  activeTab.value = index;
};
</script>
<style lang="css" scoped>
div::after {
  content: "";
}
</style>
