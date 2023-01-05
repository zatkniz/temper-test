<template>
  <div class="shadow-lg rounded">
    <div class="bg-white p-4">
      <h1 class="text-black font-semibold text-lg">
        List of actions committed
      </h1>
    </div>
    <div class="p-4 flex flex-col gap-[1px] bg-gray-500">
      <TransitionGroup name="list" v-if="store.commitHistory.length">
        <ActionCard
          v-for="(item, index) in store.commitHistory"
          :key="item.firstIndex"
          :index="index"
          :commit-history="item"
        />
      </TransitionGroup>
      <div v-else class="bg-white p-4 text-center">
        No actions committed yet
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ActionCard from "./ActionCard.vue";

import { usePostsStore } from "@/store";
const store = usePostsStore();
</script>
