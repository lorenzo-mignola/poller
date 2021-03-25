<template>
  <el-card v-for="o in 4" :key="o" class="box-card" shadow="hover">
    <div class="text item">
      {{ "List item " + o }}
    </div>
  </el-card>
</template>

<script setup lang="ts"></script>

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
