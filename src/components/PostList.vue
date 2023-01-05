<template>
  <div>
    <h1 class="text-white text-lg">Sortable Post List</h1>
    <div class="flex flex-col gap-4 py-6">
      <TransitionGroup name="list">
        <PostCard
          v-for="(post, index) in store.posts"
          :key="post.id"
          :post="post"
          :index="+index"
          :post-length="store.posts.length"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PostCard from "@/components/PostCard.vue";
import { usePostsStore } from "@/store";
import { onMounted } from "vue";

const store = usePostsStore();

onMounted(async () => {
  /**
   * Fetch the store list from the API
   * and populate the store with it.
   */
  await store.getPosts();
});
</script>
