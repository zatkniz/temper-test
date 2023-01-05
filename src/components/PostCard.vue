<template>
  <div
    class="bg-white px-2 py-1 h-16 rounded-sm shadow-md flex justify-between items-center transition duration-500 ease-in-out hover:shadow-lg hover:bg-gray-300 cursor-pointer"
  >
    Post {{ post.id }}
    <div class="flex gap-2 flex-col">
      <button
        @click="changePostOrder('up')"
        v-if="index > 0"
        class="h-4 w-4 text-black text-sm"
      >
        <ChevronUpIcon />
      </button>
      <button
        @click="changePostOrder('down')"
        class="h-4 w-4 text-black"
        v-if="index < postLength - 1"
      >
        <ChevronDownIcon />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePostsStore } from "@/store";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/solid";
import { defineProps } from "vue";

const { swapPostsElements } = usePostsStore();

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  postLength: {
    type: Number,
    required: true,
  },
});

/**
 * Swap the post elements in the store
 * @param direction
 */
const changePostOrder = (direction: string) => {
  /**
   * If the direction is up, we want to swap the current
   * post with the previous one, so we need to get the
   * previous index.
   * If the direction is down, we want to swap the current
   * post with the next one, so we need to get the next index.
   */
  const index = direction == "up" ? props.index - 1 : props.index + 1;
  swapPostsElements(props.index, index);
};
</script>
