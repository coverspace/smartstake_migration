<template>
  <div class="grid grid-cols-12 lg:container mx-auto">
    <div class="col-span-12">
      <div
        class="flex flex-col justify-start items-start w-full my-8 shadow-lg"
      >
        <ContentDoc path="terms/block_01" v-slot="{ doc }">
          <ContentRenderer :value="doc" class="marked" />
        </ContentDoc>
      </div>
    </div>
  </div>
</template>
