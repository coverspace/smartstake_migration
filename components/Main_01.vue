<template>
  <div class="grid grid-cols-12">
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
          class="flex flex-col justify-start items-center absolute gap-6 xl:gap-16 top-4 xl:top-32"
        >
          <ContentDoc path="main/block_01" v-slot="{ doc }">
            <ContentRenderer
              :value="doc"
              class="text-base xl:text-6xl w-3/5 xl:w-1/2 text-center font-light text-white uppercase"
            />
            <h1
              class="text-xs xl:text-xl w-3/5 xl:w-1/2 text-center font-medium text-gray-50"
            >
              {{ doc.description }}
            </h1>

            <!-- <div
              class="flex flex-row justify-center items-center my-4 xl:my-12 w-full"
            >
              <div
                v-for="(item, index) in doc.sets"
                :key="index"
                class="flex flex-col justify-start items-center px-2 xl:px-8 border-r last:border-none"
              >
                <h1 class="text-white text-xs xl:text-4xl font-bold">
                  {{ item.number }}
                </h1>
                <small
                  class="text-smart_orange_01 uppercase text-center text-[8px] xl:text-lg font-semibold"
                  >{{ item.label }}</small
                >
              </div>
            </div> -->
          </ContentDoc>
        </div>
      </div>
    </div>
  </div>
</template>
