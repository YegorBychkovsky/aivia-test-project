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

<script>
export default {
  data() {
    return {
      sizeX: 0,
      sizeY: 0,
      squareColors: [],
    };
  },
  computed: {
    grid() {
      const rows = [];
      for (let i = 0; i < this.sizeY; i++) {
        const cols = [];
        for (let j = 0; j < this.sizeX; j++) {
          cols.push(j);
        }
        rows.push(cols);
      }
      return rows;
    },
  },
  methods: {
    resizeGrid() {
      this.squareColors = [];
      for (let i = 0; i < this.sizeY; i++) {
        const cols = [];
        for (let j = 0; j < this.sizeX; j++) {
          cols.push(false);
        }
        this.squareColors.push(cols);
      }
    },
    toggleSquareColor(rowIndex, colIndex) {
      this.squareColors[rowIndex][colIndex] =
        !this.squareColors[rowIndex][colIndex];
    },
  },
  created() {
    this.resizeGrid();
  },
};
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
