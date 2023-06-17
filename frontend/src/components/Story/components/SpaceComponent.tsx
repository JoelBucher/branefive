import { SpaceStoryType } from "../types/blocks/SpaceStoryType";

export function SpaceComponent(props : {data : SpaceStoryType}){
    return(<div style={{height: props.data.space}}></div>)
}