<template>
  <div class="grid grid-col-12">
    <div class="col-span-12">
      <div
        class="flex flex-col justify-center items-center border-2 border-red-500 my-2"
      >
        <ContentDoc path="/plans/block_01" v-slot="{ doc }">
          <small>{{ doc.description }}</small>
          <ContentRenderer :value="doc" />
        </ContentDoc>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
div {
  content: "";
}
</style>
