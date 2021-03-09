import { RectangleNode } from "../nodes/RectangleNode";
import { CircleNode } from "../nodes/CircleNode";
import { TextNode } from "../nodes/TextNode";
import { RectangleOutlineNode } from '@/nodes/RectangleOutlineNode';
import { CircleOutlineNode } from '@/nodes/CircleOutlineNode';
import { RoundRectNode } from '@/nodes/RoundRectNode';
import { RoundRectOutlineNode } from '@/nodes/RoundRectOutlineNode';
import { TextOutlineNode } from '@/nodes/TextOutlineNode';
import { PixelCanvasNode } from '@/nodes/PixelCanvasNode';

export const templateGroups = [
  {
    title: "图形",
    templates: [
      { type: RectangleNode, display: "矩形" },
      { type: CircleNode, display: "圆形" },
      { type: RoundRectNode, display: "圆角矩形" },
    ],
  },
  {
    title: "边框",
    templates: [
      { type: RectangleOutlineNode, display: "矩形边框" },
      { type: CircleOutlineNode, display: "圆形边框" },
      { type: RoundRectOutlineNode, display: "圆角矩形边框" },
    ],
  },
  {
    title: "文字",
    templates: [
      { type: TextNode, display: "普通文字" },
      { type: TextOutlineNode, display: "空心文字" },
    ],
  },
  {
    title: "其他",
    templates: [
      { type: PixelCanvasNode, display: "像素画布" },
    ],
  },
];