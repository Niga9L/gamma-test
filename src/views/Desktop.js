import React, {useContext, useState} from "react";
import {DesktopContext} from "../context/desktops/desktopContext";
import {ResDrag} from "../containers/Rnd";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export const Desktop = () => {
  const {state} = useContext(DesktopContext)
  const [anchorEl, setAnchorEl] = useState(null);

  const {widgetState, currentDesktop, desktopState} = state

  const onSwapHandler = (id, event) => {
    console.log(event.currentTarget.getParent('#simple'))
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* eslint-disable-next-line array-callback-return */}
      {widgetState.map((node, index) => {
        if (node.desktopPosition === currentDesktop) {
          return (
            <ResDrag width={node.width} height={node.height} x={node.x} y={node.y} id={node.objectId} key={node.objectId}>
              <div className="rnd-menu">
                <div className="menu-changer">
                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <Icon className='changer'>swap_horiz</Icon>
                  </Button>
                  <Menu
                    data-root={node.objectId}
                    id='simple'
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    {
                      desktopState.map(el => {
                        return (
                          <MenuItem
                            key={el.desktopId}
                            data-id={el.desktopId}
                            data-root={node.objectId}
                            onClick={e => {onSwapHandler(el.desktopId, e)
                              handleClose()
                            }}
                          >
                            {el.name}
                          </MenuItem>
                        )
                      })
                    }
                  </Menu>
                </div>
              </div>
            </ResDrag>
          )
        }
      })}
    </>
  )
}