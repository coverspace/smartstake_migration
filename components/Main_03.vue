<template>
  <div class="grid grid-col-12">
    <div class="col-span-12">
      <div class="flex flex-col justify-center items-center h-full">
        <div
          class="flex flex-col justify-center items-center gap-10 my-16 h-full"
        >
          <ContentDoc path="main/block_03" v-slot="{ doc }">
            <h1
              class="text-2xl text-center font-medium text-gray-600 uppercase"
            >
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
      <ContentDoc path="main/block_03" v-slot="{ doc }">
        <Carousel
          :itemsToShow="3.8"
          :wrapAround="true"
          :transition="500"
          :autoPlay="3000"
          class="cursor-grab"
          id="carousel"
        >
          <Slide v-for="(slide, index) in doc.sets" :key="index">
            <div
              class="carousel__item flex flex-col justify-center items-center relative gap-4 border bg-gray-50 px-8 pt-[12rem] pb-12 border-gray-100 shadow-lg !-mt-4"
            >
              <span
                class="bg-gray-300 w-[17rem] h-[17rem] rounded-full absolute -top-32"
              ></span>
              <h1 class="uppercase text-smart_red_01 text-[3rem] font-bold">
                {{ slide.percentage }}
              </h1>
              <h2 class="text-gray-600 text-xl uppercase font-semibold">
                {{ slide.title }}
              </h2>
              <div
                class="flex flex-row justify-between items-center gap-4 w-full"
              >
                <p class="flex text-gray-500 font-semibold text-lg">
                  {{ slide.min_text }}
                  <b class="font-bold text-gray-600"
                    >{{ slide.min_currency }}{{ slide.min_value }}</b
                  >
                </p>
                <p class="flex text-gray-500 font-semibold text-lg">
                  {{ slide.max_text }}
                  <b class="font-bold text-gray-600"
                    >{{ slide.max_currency }} {{ slide.max_value }}</b
                  >
                </p>
              </div>
              <button
                class="text-xl text-white font-light uppercase rounded-3xl px-8 py-2 bg-smart_purple_01 hover:bg-smart_orange_01 border-2 border-[#d43024] shadow-2xl"
              >
                {{ slide.button }}
              </button>
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
#carousel {
  width: 70%;
  margin: 0 auto;
}
#carousel > div > ol > li > div {
  margin: 0rem 0rem 3rem;
  width: auto;
}
</style>
