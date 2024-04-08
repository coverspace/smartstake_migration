<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12">
      <div class="flex flex-col justify-center items-center h-full">
        <div
          class="flex flex-col justify-center items-center gap-4 xl:gap-10 my-8 xl:my-16 h-full"
        >
          <ContentDoc path="main/block_03" v-slot="{ doc }">
            <!-- <h1
              class="text-lg xl:text-2xl text-center font-medium text-gray-600 uppercase"
            >
              {{ doc.description }}
            </h1> -->

            <h1
              class="text-2xl xl:text-7xl text-center font-bold bg-gradient-to-r from-[#780072] to-[#e00019] inline-block text-transparent bg-clip-text uppercase"
            >
              {{ doc.label }}
            </h1>

            <ContentRenderer
              :value="doc"
              class="text-xl w-4/5 xl:w-2/3 text-center font-medium text-gray-600"
            />

            <NuxtLink
              :to="doc.link"
              class="text-xl text-white font-semibold uppercase rounded-3xl px-8 py-2 bg-gradient-to-r from-[#780072] to-[#e00019] border-2 border-[#d43024] cursor-pointer"
            >
              {{ doc.button }}
            </NuxtLink>
          </ContentDoc>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
</script>
<style lang="css" scoped>
#carousel {
  width: 70%;
  margin: 0 auto;
}
#carousel > div > ol > li > div {
  margin: 0rem 0rem 3rem;
  width: auto;
}
</style>
