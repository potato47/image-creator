import { INode, INodeKey } from './NodeCommon';

interface IPoint { x: number, y: number, color: string };

export class PixelCanvasNode implements INode {
  uuid = 0;
  type = 'PixelCanvas';
  name = '像素画布';
  x = 0;
  y = 0;
  pointSize = 10;
  cols = 10;
  rows = 10;
  color = '#333333';
  isEditing = true;
  isLocked = false;
  private points: IPoint[][] = [];

  constructor(context: CanvasRenderingContext2D) {
    this.x = context.canvas.width / 2 - this.pointSize * this.cols / 2;
    this.y = context.canvas.height / 2 - this.pointSize * this.rows / 2;
    this.resizePoints();
  }

  private createPath(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.rect(this.x, this.y, this.pointSize * this.cols, this.pointSize * this.rows);
    context.closePath();
  }

  paint(context: CanvasRenderingContext2D): void {
    if (this.isEditing) {
      this.createPath(context);
      context.strokeStyle = 'black';
      context.stroke();
    }
    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        const point = this.points[x][y];
        if (point.color) {
          context.fillStyle = point.color;
          context.fillRect(this.x + point.x * this.pointSize, this.y + point.y * this.pointSize, this.pointSize, this.pointSize);
        }
      }
    }
  }

  updatePoint(x: number, y: number, color: string) {
    this.points[x][y] = { x, y, color };
  }

  stepPoints(cb: (point: IPoint) => void) {
    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        cb(this.points[x][y]);
      }
    }
  }

  resizePoints() {
    this.points.length = this.cols;
    for (let x = 0; x < this.cols; x++) {
      this.points[x] = [];
      this.points[x].length = this.rows;
      for (let y = 0; y < this.rows; y++) {
        let color = this.points[x]?.[y]?.color || '';
        this.points[x][y] = { x: x, y: y, color };
      }
    }
  }

  clearPoints() {
    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        this.points[x][y] = { x: x, y: y, color: '' };
      }
    }
  }

  isPointInPath(context: CanvasRenderingContext2D, x: number, y: number): boolean {
    this.createPath(context);
    return context.isPointInPath(x, y);
  }

  getKeys(): INodeKey[] {
    return [
      { name: 'type', display: 'Type', type: 'String', disabled: true },
      { name: 'name', display: 'Name', type: 'String' },
      { name: 'x', display: 'X', type: 'Number' },
      { name: 'y', display: 'Y', type: 'Number' },
      { name: 'width', display: 'Width', type: 'Number' },
      { name: 'height', display: 'Height', type: 'Number' },
      { name: 'pointSize', display: 'PointSize', type: 'Number' },
      { name: 'rows', display: 'Rows', type: 'Number', disabled: false },
      { name: 'cols', display: 'Cols', type: 'Number', disabled: false },
      { name: 'isEditing', display: 'Edit', type: 'Bool' },
    ];
  }

}