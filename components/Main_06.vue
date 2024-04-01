<template>
  <div class="grid grid-col-12 bg-white">
    <div class="col-span-12">
      <div class="flex flex-col justify-center items-center h-full">
        <div
          class="flex flex-col justify-center items-center gap-10 my-16 h-full w-full"
        >
          <ContentDoc path="main/block_06" v-slot="{ doc }">
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
              class="text-xl w-1/2 mb-8 text-center font-medium text-gray-600"
            />

            <div class="grid grid-cols-12 gap-16 mx-auto">
              <div class="col-span-6">
                <NuxtImg src="contact-us.jpg" />
              </div>
              <div class="col-span-6">
                <form
                  class="flex flex-col justify-start items-start gap-8 px-8 py-12 shadow-xl"
                >
                  <h1 class="text-gray-600 font-bold text-xl">
                    {{ doc.form_title }}
                  </h1>
                  <div class="flex flex-col justify-start items-start w-full">
                    <label for="name" class="text-gray-500"
                      >Name
                      <small class="text-smart_orange_01">&ast;</small></label
                    >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="border-b w-full focus:outline-none focus:border-gray-400 py-2 px-1 text-gray-500"
                    />
                  </div>

                  <div class="flex flex-col justify-start items-start w-full">
                    <label for="email" class="text-gray-500"
                      >Email
                      <small class="text-smart_orange_01">&ast;</small></label
                    >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="border-b w-full focus:outline-none focus:border-gray-400 py-2 px-1 text-gray-500"
                    />
                  </div>

                  <div class="flex flex-col justify-start items-start w-full">
                    <label for="comment" class="text-gray-500"
                      >Message
                      <small class="text-smart_orange_01">&ast;</small></label
                    >
                    <textarea
                      id="comment"
                      name="comment"
                      class="border-b w-full focus:outline-none focus:border-gray-400 py-2 px-1 text-gray-500"
                    ></textarea>
                  </div>
                  <button
                    class="text-base text-white font-semibold uppercase rounded-3xl px-8 py-2 shadow-xl bg-smart_indigo_01 hover:bg-smart_orange_01 border-2 border-[#d43024] cursor-pointer"
                  >
                    {{ doc.form_button }}
                  </button>
                </form>
              </div>
            </div>
          </ContentDoc>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// script
</script>
<style lang="css" scoped>
div::after {
  content: "";
}
</style>
