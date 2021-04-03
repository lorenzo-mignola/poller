<template>
  <router-link :to="`/poll/${id}`">
    <el-card class="box-card" shadow="hover">
      <div class="text item">
        {{ name }}
      </div>
    </el-card>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.box-card {
  margin: 1rem;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    div {
      background-color: #f0f0f0;
    }
  }
}
</style>
