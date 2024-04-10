<template>
  <div class="grid grid-cols-12 lg:container mx-auto">
    <div class="col-span-12 h-[80dvh]">
      <div
        v-for="item in content"
        v-if="content"
        class="flex flex-col justify-center items-center w-full mt-8 xl:my-16"
      >
        <h1
          class="text-4xl xl:text-7xl text-center font-bold bg-gradient-to-r from-[#780072] to-[#e00019] inline-block text-transparent bg-clip-text uppercase"
        >
          {{ item.note }}
        </h1>
        <h1 class="text-lg text-center">{{ item.redirect }}</h1>
        <!-- | -->
        <div class="relative mx-auto my-8 h-[120px] w-[120px] text-center">
          <div class="flex flex-col justify-center items-center h-full">
            <p class="text-gray-600 text-xl font-bold">{{ countdown }}</p>
            <p class="text-gray-600 text-base">seconds</p>
          </div>
          <svg class="absolute top-0 right-0 h-[120px] w-[120px]">
            <circle
              r="54"
              cx="60"
              cy="60"
              stroke="lightgray"
              fill="none"
              stroke-width="8px"
              stroke-linecap="round"
              stroke-dashoffset="0"
              stroke-dasharray="339px"
            ></circle>
          </svg>
        </div>
        <!-- | -->
        <small class="text-center text-xl mx-16">
          {{ item.body.children[0].children[0].value }}
        </small>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: content } = await useAsyncData("contact", () => {
  return queryContent("/_partials/contact").where({ _partial: true }).find();
});

const countdown = ref(4);
const router = useRouter();

onMounted(() => {
  const interval = setInterval(() => {
    countdown.value--;
    if (countdown.value === 0) {
      clearInterval(interval);
      router.push("/");
    }
  }, 1000);
});
</script>

<style lang="css" scoped>
svg {
  transform: rotateY(-180deg) rotateZ(-90deg);
}

svg circle {
  animation: countdown 5s linear infinite forwards;
}

@keyframes countdown {
  from {
    stroke-dashoffset: 0px;
  }
  to {
    stroke-dashoffset: 339px;
  }
}
</style>
