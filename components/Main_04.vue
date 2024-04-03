<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12">
      <div class="flex flex-col justify-center items-center h-full">
        <div
          class="flex flex-col justify-center items-center gap-4 xl:gap-10 my-8 xl:my-16 h-full"
        >
          <ContentDoc path="main/block_04" v-slot="{ doc }">
            <h1
              class="text-lg xl:text-2xl text-center font-medium text-gray-600 uppercase"
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
          </ContentDoc>
        </div>
      </div>
    </div>

    <div class="col-span-12 mb-8 xl:hidden">
      <ContentDoc path="main/block_04" v-slot="{ doc }">
        <ul class="flex flex-col justify-start items-start gap-4 px-8">
          <li v-for="(slide, index) in doc.sets" :key="index" class="">
            <div
              class="flex flex-col justify-start items-center w-full bg-gray-50 shadow-md rounded-md gap-4 p-4"
            >
              <p class="text-gray-500 text-justify text-lg font-semibold py-2">
                {{ slide.message }}
              </p>
              <hr class="border-t border-[#d43024] w-full" />
              <div
                class="flex flex-row justify-evenly items-center gap-4 w-full"
              >
                <NuxtImg
                  :src="slide.image"
                  class="w-20 h-auto border-2 border-[#d43024] shadow-2xl rounded-lg"
                />
                <div class="flex flex-col justify-evenly items-start gap-2">
                  <h2
                    class="text-gray-600 text-xl uppercase font-semibold text-smart_red_01"
                  >
                    {{ slide.name }}
                  </h2>
                  <div
                    class="flex flex-row justify-start items-center w-full text-gray-500"
                  >
                    <div class="flex flex-col justify-center items-center">
                      <p>{{ slide.location }}</p>
                      <small>{{ slide.date }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </ContentDoc>
    </div>

    <div class="col-span-12 my-16 hidden xl:block">
      <!-- Gallery -->
      <ContentDoc path="main/block_04" v-slot="{ doc }">
        <Carousel
          :itemsToShow="2"
          :wrapAround="true"
          :transition="500"
          :autoplayz="3000"
          class="cursor-grab"
          id="carousel"
        >
          <Slide v-for="(slide, index) in doc.sets" :key="index">
            <div
              class="carousel__item flex flex-col justify-center items-center relative"
            >
              <div
                class="flex flex-col justify-start items-center w-full bg-gray-50 shadow-xl gap-4 p-4"
              >
                <p class="text-gray-500 text-lg font-semibold py-2">
                  {{ slide.message }}
                </p>
                <hr class="border-t border-[#d43024] w-full" />
                <h2
                  class="text-gray-600 text-xl uppercase font-semibold text-smart_red_01"
                >
                  {{ slide.name }}
                </h2>
                <div
                  class="flex flex-row justify-center items-center w-full text-gray-500"
                >
                  <small>{{ slide.location }}{{ slide.date }}</small>
                </div>
              </div>
              <span class="w-16 h-8 bg-gray-50 current-item shadow-lg"></span>
              <div
                class="p-2 border-2 border-dashed border-[#d43024] rounded-full mt-12"
              >
                <NuxtImg
                  :src="slide.image"
                  class="w-20 h-auto border-2 border-[#d43024] shadow-2xl rounded-full"
                />
              </div>
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
  margin: 0rem 3rem 3rem;
  width: auto;
}

.current-item {
  clip-path: polygon(50% 100%, 0 0, 100% 0);
}
</style>
