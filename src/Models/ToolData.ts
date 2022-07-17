import {ToolDataGroupEnum} from "../Enums/ToolDataGroupEnum";

export class ToolData {
    public readonly name: string;
    public readonly imgSrc?: string | undefined;
    public readonly infoSrc: string;
    public readonly group: ToolDataGroupEnum

    constructor(params: {name: string, imgSrc?: string | undefined, infoSrc: string, group: ToolDataGroupEnum}) {
        this.name = params.name;
        this.imgSrc = params.imgSrc;
        this.infoSrc = params.infoSrc;
        this.group = params.group;
    }
}