export class Camera {
    public _id: string;
    public ip: string;
    public data: string
    public density: number
    public stageName: string

    constructor(density: number) {
        this.density = density;
    }
}