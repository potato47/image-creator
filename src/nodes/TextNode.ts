import { INode, INodeKey } from './NodeCommon';

export class TextNode implements INode {
    uuid = 0;
    type = 'Text';
    name = '文字';
    x = 0;
    y = 50;
    fontSize = 50;
    fontFamily = 'sans-serif'; // serif;
    color = '#333333';
    string = '文字';
    isLocked = false;

    constructor(context: CanvasRenderingContext2D) {
        const width = context.measureText(this.string).width;
        const height = this.fontSize;
        this.x = context.canvas.width / 2 - width / 2;
        this.y = context.canvas.height / 2 + height / 2;
    }

    paint(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.color;
        context.font = `${this.fontSize}px ${this.fontFamily}`;
        context.fillText(this.string, this.x, this.y);
    }

    isPointInPath(context: CanvasRenderingContext2D, x: number, y: number): boolean {
        context.font = `${this.fontSize}px ${this.fontFamily}`;
        const width = context.measureText(this.string).width;
        const height = this.fontSize;
        context.beginPath();
        context.rect(this.x, this.y - height, width, height);
        context.closePath();
        return context.isPointInPath(x, y);
    }

    getKeys(): INodeKey[] {
        return [
            { name: 'type', display: 'Type', type: 'String', disabled: true },
            { name: 'name', display: 'Name', type: 'String' },
            { name: 'x', display: 'X', type: 'Number' },
            { name: 'y', display: 'Y', type: 'Number' },
            { name: 'fontSize', display: 'FontSize', type: 'Number' },
            { name: 'fontFamily', display: 'FontFamily', type: 'String' },
            { name: 'color', display: 'Color', type: 'Color' },
            { name: 'string', display: 'String', type: 'String' },
        ];
    }

}