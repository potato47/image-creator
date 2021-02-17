import { INode, INodeKey } from './NodeCommon';

export class RoundRectNode implements INode {
    uuid = 0;
    type = 'RoundRect';
    name = '圆角矩形';
    x = 0;
    y = 0;
    width = 100;
    height = 100;
    radius = 10;
    color = '#333333';

    constructor(context: CanvasRenderingContext2D) {
        this.x = context.canvas.width / 2 - this.width / 2;
        this.y = context.canvas.height / 2 - this.height / 2;
    }

    private createPath(context: CanvasRenderingContext2D) {
        const ptA = { x: this.x + this.radius, y: this.y };
        const ptB = { x: this.x + this.width, y: this.y };
        const ptC = { x: this.x + this.width, y: this.y + this.height };
        const ptD = { x: this.x, y: this.y + this.height };
        const ptE = { x: this.x, y: this.y };
        context.beginPath();
        context.moveTo(ptA.x, ptA.y);
        context.arcTo(ptB.x, ptB.y, ptC.x, ptC.y, this.radius);
        context.arcTo(ptC.x, ptC.y, ptD.x, ptD.y, this.radius);
        context.arcTo(ptD.x, ptD.y, ptE.x, ptE.y, this.radius);
        context.arcTo(ptE.x, ptE.y, ptA.x, ptA.y, this.radius);
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
            { name: 'radius', display: 'Radius', type: 'Number' },
            { name: 'color', display: 'Color', type: 'Color' },
        ];
    }

}