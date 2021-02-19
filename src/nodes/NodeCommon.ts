export interface INodeKey {
    name: string;
    type: string;
    display: string;
    disabled?: boolean;
}

export interface INode {
    uuid: number;
    type: string;
    name: string;
    isLocked: boolean;

    paint(context: CanvasRenderingContext2D): void; 
    isPointInPath(context: CanvasRenderingContext2D, x: number, y: number): boolean;
    getKeys(): INodeKey[];
}
