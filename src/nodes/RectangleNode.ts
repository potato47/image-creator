import { INode, INodeKey } from './NodeCommon';

export class RectangleNode implements INode {
    uuid = 0;
    type = 'Rectangle';
    name = '矩形';
    x = 0;
    y = 0;
    width = 100;
    height = 100;
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
        context.fillStyle = this.color;
        this.createPath(context);
        context.fill();
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
            { name: 'color', display: 'Color', type: 'Color' },
        ];
    }

}