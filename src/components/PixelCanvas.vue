<template>
  <div
    ref="canvasContainer"
    style="width: 100%;margin-bottom:20px;"
  >
    <canvas ref="canvas"></canvas>
  </div>
  <el-container>
    <el-color-picker
      size="mini"
      show-alpha
      v-model="strokeColor"
      style="margin-right: 10px;"
    ></el-color-picker>
    <el-button
      type="primary"
      size="mini"
      circle
      @click="onBtnResize()"
      icon="el-icon-refresh"
    ></el-button>
    <el-button
      type="danger"
      size="mini"
      circle
      @click="onBtnClear()"
      icon="el-icon-delete"
    ></el-button>
  </el-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    node: {},
  },
})
export default class PixelCanvas extends Vue {
  node!: {
    pointSize: number;
    cols: number;
    rows: number;
    resizePoints: Function;
    clearPoints: Function;
    updatePoint: Function;
    stepPoints: (cb: (point: { x: number; y: number; color: string }) => void) => void;
  };
  strokeColor = 'black';
  canvas!: HTMLCanvasElement;
  context!: CanvasRenderingContext2D;

  mounted() {
    this.canvas = this.$refs.canvas as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d")!;
    this.resizeCanvas();

    let isDrawing = false;
    this.canvas.addEventListener("mousedown", e => {
      isDrawing = true;
      this.onPointTouch(e);
    }, false);
    this.canvas.addEventListener("mousemove", e => {
      if (isDrawing) {
        this.onPointTouch(e);
      }
    }, false);
    this.canvas.addEventListener("mouseup", e => isDrawing = false, false);
    this.canvas.addEventListener("mouseleave", e => isDrawing = false, false);
    requestAnimationFrame(this.paint);
  }

  onPointTouch(e: MouseEvent) {
    const x = e.clientX - this.canvas.getBoundingClientRect().left;
    const y = e.clientY - this.canvas.getBoundingClientRect().top;
    const pointSize = this.canvas.width / this.node.cols;
    console.log(pointSize);
    const col = x / pointSize | 0;
    const row = y / pointSize | 0;
    this.node.updatePoint(col, row, this.strokeColor);
    // e.preventDefault();
  }

  paint() {
    const { cols, rows } = this.node;
    const canvasWidth = this.canvas.width;
    const canvasHeight = this.canvas.height;
    const pointSize = canvasWidth / cols;
    this.context.clearRect(0, 0, canvasWidth, canvasHeight);
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        if ((x + y) % 2 === 0) {
          this.context.fillStyle = '#d9d9d9';
        } else {
          this.context.fillStyle = '#ffffff';
        }
        this.context.fillRect(pointSize * x, pointSize * y, pointSize, pointSize);
      }
    }
    this.node.stepPoints(point => {
      if (point.color) {
        this.context.fillStyle = point.color;
        this.context.fillRect(point.x * pointSize, point.y * pointSize, pointSize, pointSize);
      }
    });
    requestAnimationFrame(this.paint);
  }

  resizeCanvas() {
    const canvasContainer = this.$refs.canvasContainer as HTMLDivElement;
    canvasContainer.style.height =
      (canvasContainer.clientWidth * this.node.rows) / this.node.cols + "px";
    this.canvas.width = canvasContainer.clientWidth;
    this.canvas.height = canvasContainer.clientHeight;
    this.canvas.style.width = canvasContainer.clientWidth + "px";
    this.canvas.style.height = canvasContainer.clientHeight + "px";
  }

  onBtnResize() {
    this.node.resizePoints();
    this.resizeCanvas();
  }

  onBtnClear() {
    this.node.clearPoints();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
