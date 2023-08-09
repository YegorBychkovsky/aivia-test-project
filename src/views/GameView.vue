<template>
  <div>
    <v-text-field
      v-model="sizeX"
      label="Размер X"
      @input="resizeGrid"
    ></v-text-field>
    <v-text-field
      v-model="sizeY"
      label="Размер Y"
      @input="resizeGrid"
    ></v-text-field>
    <div class="grid">
      <div
        v-for="(row, rowIndex) in grid"
        :key="rowIndex"
        class="grid-row"
      >
        <div
          v-for="(col, colIndex) in row"
          :key="colIndex"
          class="grid-col"
          :class="{ blue: squareColors[rowIndex][colIndex] }"
          @mouseover="toggleSquareColor(rowIndex, colIndex)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const sizeX = ref(0);
const sizeY = ref(0);
const squareColors = ref([]);

const grid = computed(() => {
  const rows = [];
  for (let i = 0; i < sizeY.value; i++) {
    const cols = [];
    for (let j = 0; j < sizeX.value; j++) {
      cols.push(j);
    }
    rows.push(cols);
  }
  return rows;
});

const resizeGrid = () => {
  squareColors.value = [];
  for (let i = 0; i < sizeY.value; i++) {
    const cols = [];
    for (let j = 0; j < sizeX.value; j++) {
      cols.push(false);
    }
    squareColors.value.push(cols);
  }
};

const toggleSquareColor = (rowIndex, colIndex) => {
  squareColors.value[rowIndex][colIndex] =
    !squareColors.value[rowIndex][colIndex];
};

onMounted(resizeGrid);
</script>

<style scoped>
.grid {
  display: flex;
  flex-direction: column;
  background-color: #222;
  padding: 10px;
}

.grid-row {
  display: flex;
}

.grid-col {
  width: 36px;
  height: 36px;
  background-color: white;
  margin: 2px;
  transition: background-color 0.2s;
}

.blue {
  background-color: blue !important;
}
</style>
