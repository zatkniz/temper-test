<template>
  <div class="bg-white shadow p-2 flex justify-between items-center">
    <span
      >Moved post {{ commitHistory.postId }} from index
      {{ commitHistory.firstIndex }} to index
      {{ commitHistory.secondIndex }}
    </span>
    <button
      @click="timeTravel(commitHistory.history, index)"
      class="bg-green-500 px-4 py-2 rounded font-semibold"
    >
      Time travel
    </button>
  </div>
</template>

<script lang="ts" setup>
import { usePostsStore } from "@/store";
import { defineProps } from "vue";

const { timeTravel } = usePostsStore();

defineProps({
  commitHistory: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>
