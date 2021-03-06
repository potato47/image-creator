import { INode, INodeKey } from './NodeCommon';

export class CircleOutlineNode implements INode {
    uuid = 0;
    type = 'CircleOutline';
    name = '圆形边框';
    x = 50;
    y = 50;
    radius = 50;
    lineWidth = 5;
    color = '#333333';
    isLocked = false;

    constructor(context: CanvasRenderingContext2D) {
        this.x = context.canvas.width / 2;
        this.y = context.canvas.height / 2;
    }

    paint(context: CanvasRenderingContext2D): void {
        this.createPath(context);
        context.strokeStyle = this.color;
        context.lineWidth = this.lineWidth;
        context.stroke();
    }
    
    isPointInPath(context: CanvasRenderingContext2D, x: number, y: number): boolean {
        this.createPath(context)
        return context.isPointInPath(x, y);
    }

    getKeys(): INodeKey[] {
        return [
            { name: 'type', display: 'Type', type: 'String', disabled: true },
            { name: 'name', display: 'Name', type: 'String' },
            { name: 'x', display: 'X', type: 'Number' },
            { name: 'y', display: 'Y', type: 'Number' },
            { name: 'radius', display: 'Radius', type: 'Number' },
            { name: 'lineWidth', display: 'LineWidth', type: 'Number' },
            { name: 'color', display: 'Color', type: 'Color' },
        ];
    }

    private createPath(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.closePath();
    }

}