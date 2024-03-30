<template>
  <div class="grid grid-col-12">
    <div class="col-span-12">
      <div class="flex flex-col justify-center items-center h-full">
        <div
          class="flex flex-col justify-center items-center gap-10 my-16 h-full"
        >
          <ContentDoc path="main/block_02" v-slot="{ doc }">
            <h1 class="text-2xl text-center font-medium text-gray-600">
              {{ doc.description }}
            </h1>

            <h1
              class="text-[4rem] text-center font-bold bg-gradient-to-r from-[#780072] to-[#e00019] inline-block text-transparent bg-clip-text uppercase"
            >
              {{ doc.label }}
            </h1>

            <ContentRenderer
              :value="doc"
              class="text-xl w-2/3 text-center font-medium text-gray-600"
            />
          </ContentDoc>
        </div>
      </div>
    </div>

    <div class="col-span-12 my-16">
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
