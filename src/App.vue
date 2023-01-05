<template>
  <div class="main-background"></div>
  <div
    class="container m-auto flex md:flex-row flex-col justify-evenly p-6 relative"
  >
    <div class="w-full md:w-1/4">
      <PostList />
    </div>
    <div class="f-full md:w-1/3">
      <ActionsList />
    </div>
  </div>
</template>

<script lang="ts" setup>
import PostList from "@/components/PostList.vue";
import ActionsList from "@/components/ActionsList.vue";
</script>

<style lang="scss" scoped>
.main-background {
  @apply w-full h-48 absolute top-0 left-0;
  background: linear-gradient(to left top, #f6f6f6 49%, #6256b4 50%);
}
</style>
