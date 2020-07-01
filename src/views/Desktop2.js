import React, {useContext} from "react";
import {DesktopContext} from "../context/desktops/desktopContext";
import {ResDrag} from "../containers/Rnd";

export const Desktop2 = () => {
    const {state, changeDesktop} = useContext(DesktopContext)

    const clickHandler = (id, number) => {
        changeDesktop(id, number)
    }

    return (
        <>
            {state.map(node => {
                if (node.desktopPosition === 2) {
                    return (
                        <div key={node.objectId}>
                            <ResDrag width={node.width} height={node.height} x={node.x} y={node.y}>
                                <button onClick={e => clickHandler(node.objectId, -1)}>На {node.desktopPosition - 1}й рабочий стол</button>
                            </ResDrag>
                        </div>
                    )
                }
            })}
        </>
    )
}