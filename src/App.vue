// https://vue-draggable-next.vercel.app/
<template>
  <el-container>
    <el-header
      class="border"
      style="
        display: flex;
        display: -webkit-flex;
        align-items: center;
        height: 40px;
      "
    >
      <el-dropdown
        @command="handleMenuClick"
        v-for="menuGroup in menuGroups"
        v-bind:key="menuGroup.title"
      >
        <span class="el-dropdown-link">
          {{ menuGroup.title }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="menuItem in menuGroup.children"
              v-bind:key="menuItem.name"
              :command="menuItem.command"
              >{{ menuItem.name }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside class="border" style="display: flex; flex-direction: column">
        <div style="flex: 1; overflow: auto">
          <el-tree
            :data="treeData"
            node-key="uuid"
            :props="treeDefaultProps"
            :current-node-key="currentNodeKey"
            :expand-on-click-node="false"
            :default-expand-all="true"
            draggable
            highlight-current
            ref="tree"
            @node-click="handleNodeClick"
          >
            <template #default="{ node, data }">
              <span class="custom-tree-node">
                <span>{{ node.label }}</span>
                <span>
                  <i
                    :class="data.isLocked ? 'el-icon-lock' : 'el-icon-unlock'"
                  ></i>
                </span>
              </span>
            </template>
          </el-tree>
        </div>
        <div class="border" style="flex: 1; overflow: auto">
          <template v-for="group in templateGroups" v-bind:key="group.title">
            <el-divider>{{ group.title }}</el-divider>
            <el-button
              v-for="template in group.templates"
              v-bind:key="template.type"
              round
              style="margin: 5px"
              size="mini"
              @click="handleAddNode(template.type)"
              >{{ template.display }}</el-button
            >
          </template>
        </div>
      </el-aside>
      <el-container>
        <el-main
          class="border"
          style="
            overflow: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          <canvas
            id="canvas"
            :width="canvasConfig.width"
            :height="canvasConfig.height"
            style="background-image: url('./bg_tile.png'); border: solid 1px"
            :style="{
              width: canvasConfig.width * canvasConfig.zoom + 'px',
              height: canvasConfig.height * canvasConfig.zoom + 'px',
            }"
          ></canvas>
        </el-main>
        <el-footer
          style="display: flex; align-items: center; justify-content: center"
        >
          <div style="display: flex; align-items: center">
            尺寸
            <el-input-number
              placeholder="width"
              v-model="canvasConfig.width"
              size="mini"
            >
            </el-input-number>
            &nbsp;x&nbsp;
            <el-input-number
              placeholder="height"
              v-model="canvasConfig.height"
              size="mini"
            >
            </el-input-number>
            &nbsp;&nbsp;缩放
            <el-input-number
              placeholder="zoom"
              v-model="canvasConfig.zoom"
              size="mini"
              :precision="2"
              :step="0.1"
              :min="0.1"
              :max="10"
            >
            </el-input-number>
            &nbsp;&nbsp;背景
            <el-color-picker
              size="mini"
              show-alpha
              v-model="canvasConfig.color"
            ></el-color-picker>
          </div>
        </el-footer>
      </el-container>
      <el-aside class="border" style="padding: 10px">
        <el-form
          ref="form"
          label-position="left"
          v-if="currentNode"
          :model="currentNode"
          label-width="80px"
          size="mini"
        >
          <el-form-item>
            <el-button
              type="danger"
              v-if="currentNode"
              @click="handleDeleteNode(currentNode)"
              >删除</el-button
            >
            <el-button type="warning" @click="handleLockNode(currentNode)">{{
              currentNode.isLocked ? "解锁" : "锁定"
            }}</el-button>
          </el-form-item>
          <el-form-item
            :label="key.display"
            v-for="key in nodeKeys"
            v-bind:key="key.name"
          >
            <el-input
              size="mini"
              v-model="currentNode[key.name]"
              v-if="key.type == 'String'"
              :disabled="key.disabled"
            ></el-input>
            <el-input-number
              style="width: 100%"
              size="mini"
              v-model="currentNode[key.name]"
              v-if="key.type == 'Number'"
            ></el-input-number>
            <el-color-picker
              class="node-color"
              size="mini"
              show-alpha
              v-model="currentNode[key.name]"
              v-if="key.type == 'Color'"
            ></el-color-picker>
          </el-form-item>
        </el-form>
      </el-aside>
    </el-container>
  </el-container>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script lang="ts">
// import { defineComponent } from "vue";
import { Options, Vue } from "vue-class-component";
// import HelloWorld from "./components/HelloWorld.vue";
import { INode, INodeKey } from "./nodes/NodeCommon";
import { templateGroups } from "./configs/TemplatesConfig";

let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;

// @Options({
//   props: {
//     msg: String,
//   },
//   components: {
//     HelloWorld
//   }
// })
export default class App extends Vue {
  msg!: string;
  uuid = 0;
  canvasConfig = {
    width: 500,
    height: 500,
    zoom: 1,
    color: "rgba(0, 0, 0, 0)",
  };
  menuGroups = [
    {
      title: "文件",
      children: [
        { name: "新建", command: "new-file" },
        { name: "保存", command: "save-file" },
      ],
    },
    {
      title: "关于",
      children: [
        { name: "版本：101", command: "" },
        { name: "源码", command: "source" },
      ],
    },
  ];
  currentNode: INode = null!;
  currentNodeKey = -1;
  nodeKeys: INodeKey[] = [];
  treeData: INode[] = [];
  templateGroups = templateGroups;
  treeDefaultProps = {
    label: "name",
    children: "children",
  };
  mounted() {
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    context = canvas.getContext("2d")!;
    let dragGraph: any;
    let mouseStart: any;
    let offset: any;
    canvas.addEventListener(
      "mousedown",
      (e) => {
        mouseStart = {
          x:
            (e.clientX - canvas.getBoundingClientRect().left) /
            this.canvasConfig.zoom,
          y:
            (e.clientY - canvas.getBoundingClientRect().top) /
            this.canvasConfig.zoom,
        };
        this.treeData.forEach((node: INode) => {
          if (!node.isLocked && node.isPointInPath(context, mouseStart.x, mouseStart.y)) {
            dragGraph = node;
          }
        });
        if (dragGraph) {
          this.handleNodeClick(dragGraph);
          offset = {
            x: mouseStart.x - dragGraph.x,
            y: mouseStart.y - dragGraph.y,
          };
        }
        e.preventDefault();
      },
      false
    );
    canvas.addEventListener(
      "mousemove",
      (e) => {
        if (dragGraph) {
          const mouseMove = {
            x:
              (e.clientX - canvas.getBoundingClientRect().left) /
              this.canvasConfig.zoom,
            y:
              (e.clientY - canvas.getBoundingClientRect().top) /
              this.canvasConfig.zoom,
          };
          dragGraph.x = mouseMove.x - offset.x;
          dragGraph.y = mouseMove.y - offset.y;
        }
        e.preventDefault();
      },
      false
    );
    canvas.addEventListener(
      "mouseup",
      (e) => {
        if (dragGraph) {
          dragGraph = null;
        }
        e.preventDefault();
      },
      false
    );
    requestAnimationFrame(this.draw);
  }
  handleMenuClick(command: string) {
    if (command === "save-file") {
      this.handleSaveFile();
    } else if (command === "new-file") {
      this.canvasConfig = {
        width: 500,
        height: 500,
        zoom: 1,
        color: "rgba(0, 0, 0, 0)",
      };
      this.treeData = [];
      this.currentNode = null!;
    }
  }
  handleNodeClick(node: any) {
    this.currentNode = node;
    this.nodeKeys = this.currentNode.getKeys();
    this.currentNodeKey = this.currentNode.uuid;
    (this.$refs.tree as any).setCurrentKey(this.currentNodeKey);
  }
  handleAddNode(type: any) {
    const node = new type(context);
    if (node) {
      node.uuid = this.uuid++;
      this.treeData.push(node);
    }
  }
  handleSaveFile() {
    this.exportCanvasAsPNG("canvas", "image-creator.png");
  }
  handleDeleteNode(node: INode) {
    const index = this.treeData.findIndex((item) => item.uuid === node.uuid);
    if (index > -1) {
      this.treeData.splice(index, 1);
      this.currentNode = null!;
      this.nodeKeys = [];
    }
  }
  handleLockNode(node: INode) {
    node.isLocked = !node.isLocked;
  }
  exportCanvasAsPNG(id: string, fileName: string) {
    const canvasElement = document.getElementById(id) as HTMLCanvasElement;
    const MIME_TYPE = "image/png";
    const imgURL = canvasElement.toDataURL(MIME_TYPE);
    const dlLink = document.createElement("a");
    dlLink.download = fileName;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(
      ":"
    );
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
  }
  draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = this.canvasConfig.color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    this.treeData.forEach((node) => node.paint(context));
    requestAnimationFrame(this.draw);
  }
}
</script>

<style>
html,
body,
#app,
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
  overflow: hidden;
}
.border {
  border: 1px solid #d7dae2;
}
.el-dropdown-link {
  cursor: pointer;
  color: black;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown {
  margin-right: 20px;
}
.node-color .el-color-picker__trigger {
  width: 100% !important;
}
.node-color {
  width: 100% !important;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
