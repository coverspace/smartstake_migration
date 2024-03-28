<template>
  <div class="grid grid-col-12">
    <div class="col-span-12">
      <div
        class="flex flex-col justify-start items-center relative landing-page"
      >
        <span
          class="bg-[#2b108e] opacity-50 absolute top-0 right-0 bottom-0 left-0 w-full h-full z-0"
        ></span>
        <NuxtImg
          src="header-bg.jpg"
          class="m-0 p-0 w-full h-full bg-center bg-no-repeat bg-cover bg-fixed"
        />
        <div
          class="flex flex-col justify-start items-center absolute gap-16 top-32"
        >
          <ContentDoc path="main/block_01" v-slot="{ doc }">
            <ContentRenderer
              :value="doc"
              class="text-[4rem] w-1/2 text-center font-light text-white uppercase"
            />
            <h1 class="text-xl w-1/2 text-center font-medium text-gray-50">
              {{ doc.description }}
            </h1>
            <button
              class="text-xl text-white font-light uppercase rounded-3xl px-8 py-2 bg-gradient-to-r from-[#780072] to-[#e00019] border-2 border-[#d43024]"
            >
              <span>{{ doc.main_button }}</span>
            </button>
          </ContentDoc>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
main {
  border: 1px solid green;

  h1:nth-child(3) {
    background: green;
  }
}
</style>
