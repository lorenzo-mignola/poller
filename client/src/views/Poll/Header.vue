<template>
  <el-page-header @back="goBack" :title="'All poll'" :content="name" class="pollHeader">
  </el-page-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  props: {
    name: {
      type: String,
      default: 'No name',
    },
  },
  setup() {
    const router = useRouter();

    function goBack() {
      router.push('/');
    }

    return { goBack };
  },
});
</script>

<style scoped lang="scss">
.pollHeader{
  color: black;
  background-color: $bgLight;
  padding: 8px;
  margin-bottom: 16px;
}
</style>
