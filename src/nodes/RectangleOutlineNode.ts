import { INode, INodeKey } from './NodeCommon';

export class RectangleOutlineNode implements INode {
    uuid = 0;
    type = 'RectangleOutline';
    name = '矩形边框';
    x = 0;
    y = 0;
    width = 100;
    height = 100;
    lineWidth = 5;
    color = '#333333';
    isLocked = false;

    constructor(context: CanvasRenderingContext2D) {
        this.x = context.canvas.width / 2 - this.width / 2;
        this.y = context.canvas.height / 2 - this.height / 2;
    }

    private createPath(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.closePath();
    }

    paint(context: CanvasRenderingContext2D): void {
        context.strokeStyle = this.color;
        context.lineWidth = this.lineWidth;
        this.createPath(context);
        context.stroke();
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
            { name: 'lineWidth', display: 'LineWidth', type: 'Number' },
            { name: 'color', display: 'Color', type: 'Color' },
        ];
    }

}