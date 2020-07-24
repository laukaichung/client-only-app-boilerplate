import React, {CSSProperties} from "react"
import {ReactNode} from "react";

interface Props {
    size?: "large" | "medium";
    className?:string;
    children?: ReactNode
    style?: CSSProperties;
}


const WingBlank = ({style, size, ...restProps}: Props)=>{
    const margin = size === "large" ? 20: 10;
    return (<span {...restProps} style={{marginLeft: margin, marginRight: margin, ...style}}/>)
};

export const ContainerWingBlank = (props: Props)=>{
    const margin = props.size === "large" ? 20: 10;
    return (
        <div {...props} style={{marginLeft: margin, marginRight: margin}}/>
    )
};

export default WingBlank