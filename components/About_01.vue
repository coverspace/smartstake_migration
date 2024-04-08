<template>
  <div class="grid grid-cols-12 my-16 bg-white xl:container mx-auto">
    <div class="col-span-12">
      <div class="flex flex-col justify-center items-center">
        <div
          class="flex flex-col justify-center items-center gap-4 xl:gap-10 my-8 xl:my-16"
        >
          <ContentDoc path="about/block_01" v-slot="{ doc }">
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
              class="xl:text-xl xl:w-2/3 mx-8 text-justify mb-4 font-medium text-gray-600"
            />
          </ContentDoc>
        </div>
      </div>
    </div>

    <div class="col-span-12 mx-auto xl:mx-0 xl:col-span-6">
      <NuxtImg src="contact-us.jpg" />
    </div>
    <div class="col-span-12 px-4 xl:mx-0 xl:col-span-6 w-full mt-4 xl:mt-0">
      <ContentDoc path="about/block_01" v-slot="{ doc }">
        <form
          @submit.prevent="handleSubmit"
          class="flex flex-col justify-start items-start gap-4 xl:gap-8 px-8 py-12 shadow-xl"
        >
          <h1 class="text-gray-600 font-bold text-xl">
            {{ doc.form_title }}
          </h1>
          <div class="flex flex-col justify-start items-start w-full">
            <label for="name" class="text-gray-500"
              >Name <small class="text-smart_orange_01">&ast;</small></label
            >
            <input
              type="text"
              id="name"
              v-model="name"
              required
              minlength="3"
              class="border-b w-full focus:outline-none focus:border-gray-400 py-2 px-1 text-gray-500"
            />
          </div>
          <div class="flex flex-col justify-start items-start w-full">
            <label for="email" class="text-gray-500"
              >Email <small class="text-smart_orange_01">&ast;</small></label
            >
            <input
              type="email"
              id="email"
              v-model="email"
              required
              minlength="3"
              class="border-b w-full focus:outline-none focus:border-gray-400 py-2 px-1 text-gray-500"
            />
          </div>
          <div class="flex flex-col justify-start items-start w-full">
            <label for="comment" class="text-gray-500"
              >Message <small class="text-smart_orange_01">&ast;</small></label
            >
            <textarea
              id="comment"
              v-model="comment"
              required
              minlength="3"
              class="border-b w-full focus:outline-none focus:border-gray-400 py-2 px-1 text-gray-500"
            ></textarea>
          </div>
          <button
            type="submit"
            class="text-xs xl:text-lg mx-auto xl:mx-0 text-white font-semibold uppercase rounded-3xl px-8 py-2 shadow-xl bg-smart_indigo_01 hover:bg-smart_orange_01 border-2 border-[#d43024] cursor-pointer"
          >
            {{ doc.form_button }}
          </button>
        </form>
      </ContentDoc>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await this.$axios.post("/.netlify/functions/sendEmail", {
          name: this.name,
          email: this.email,
          message: this.message,
        });
        alert("Email sent successfully");
        // Reset form fields
        this.name = "";
        this.email = "";
        this.message = "";
      } catch (error) {
        alert("Failed to send email");
      }
    },
  },
};
</script>
