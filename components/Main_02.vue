<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12">
      <div class="flex flex-col justify-center items-center h-full">
        <div
          class="flex flex-col justify-center items-center gap-4 xl:gap-10 my-8 xl:my-16 h-full"
        >
          <ContentDoc path="main/block_02" v-slot="{ doc }">
            <h1
              class="text-lg xl:text-2xl text-center font-medium text-gray-600"
            >
              {{ doc.description }}
            </h1>

            <h1
              class="text-2xl xl:text-7xl text-center font-bold bg-gradient-to-r from-[#780072] to-[#e00019] inline-block text-transparent bg-clip-text uppercase"
            >
              {{ doc.label }}
            </h1>

            <ContentRenderer
              :value="doc"
              class="text-xl w-4/5 xl:w-2/3 text-center font-medium text-gray-600"
            />
            <small class="mx-8 text-justify lg:mx-auto">{{
              doc.comment
            }}</small>
          </ContentDoc>
        </div>
      </div>
    </div>

    <div class="col-span-12 mb-8 xl:hidden">
      <ContentDoc path="main/block_02" v-slot="{ doc }">
        <ul class="flex flex-col justify-start items-start gap-4 px-8">
          <li
            v-for="(slide, index) in doc.sets"
            :key="index"
            class="bg-gray-50 px-4 py-2 rounded-md shadow-md"
          >
            <h1 class="uppercase text-gray-500 text-lg font-bold">
              {{ slide.title }}
            </h1>
            <h2 class="text-gray-500 text-base">{{ slide.label }}</h2>
          </li>
        </ul>
      </ContentDoc>
    </div>

    <div class="col-span-12 my-16 hidden xl:block">
      <!-- Gallery -->
      <ContentDoc path="main/block_02" v-slot="{ doc }">
        <Carousel
          :itemsToShow="5"
          :wrapAround="true"
          :transition="500"
          :autoplay="3000"
          class="cursor-grab"
          id="carousel"
        >
          <Slide v-for="(slide, index) in doc.sets" :key="index">
            <div
              class="carousel__item flex flex-col justify-center items-center gap-4 border bg-gray-50 px-8 py-16 rounded-lg border-gray-100 shadow-md"
            >
              <h1 class="uppercase text-gray-500 text-xl">
                {{ slide.title }}
              </h1>
              <h2 class="text-gray-500 text-base">{{ slide.label }}</h2>
            </div>
          </Slide>
          <template #addons>
            <!-- <navigation /> -->
            <pagination />
          </template>
        </Carousel>
      </ContentDoc>
    </div>
  </div>
</template>

<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
</script>
<style lang="css" scoped>
#carousel > div > ol > li > div {
  border-radius: 0.75rem;
  margin: 1rem 1rem 3rem;
  width: auto;
}
</style>
