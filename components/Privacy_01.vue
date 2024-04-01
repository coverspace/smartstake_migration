<template>
  <div class="grid grid-col-12">
    <div class="col-span-12">
      <ContentDoc path="privacy/block_01" v-slot="{ doc }">
        <ContentRenderer
          :value="doc"
          class="text-[4rem] w-1/2 text-center font-light text-white uppercase"
        />
        <h1 class="text-xl w-1/2 text-center font-medium text-gray-50">
          {{ doc.description }}
        </h1>
      </ContentDoc>
    </div>
  </div>
</template>
