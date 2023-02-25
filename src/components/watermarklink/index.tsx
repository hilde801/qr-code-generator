import { FC } from "react";
import WatermarkLinkProps from "./props";

const WatermarkLink:FC<WatermarkLinkProps>  =(props:WatermarkLinkProps)=>{
    return (<a href={props.href} download={props.download}>
<props.icon/>
<a>{props.text}</a>
<props.icon/>
    </a>);
}

export default WatermarkLink;
