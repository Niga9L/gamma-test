import React from "react";
import { Rnd } from "react-rnd";

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#D6FF79",
};

export class ResDrag extends React.Component{
    render() {
        return(
            <Rnd
                style={style}
                default={{
                    x: this.props.x,
                    y: this.props.y,
                    width: this.props.width,
                    height: this.props.height
                }}
                bounds=".container"
            >
                {this.props.children}
            </Rnd>
        )
    }
}