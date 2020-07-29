import React, {useContext, useState} from "react";
import {DesktopContext} from "../context/desktops/desktopContext";
import {ResDrag} from "../containers/Rnd";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from "@material-ui/core/Icon";

export const Desktop = () => {
  const {state, changeDesktop} = useContext(DesktopContext)

  const {widgetState, currentDesktop, desktopState} = state

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const swapHandler = event => {
    const id = event.target.getAttribute('data-id')
    const root = event.target.getAttribute('data-root')
    changeDesktop(id, root)
    handleClose()
  }

  return (
    <>
      {/* eslint-disable-next-line array-callback-return */}
      {widgetState.map(node => {
        if (node.desktopPosition === currentDesktop) {
          return (
            <div key={node.objectId}>
              <ResDrag width={node.width} height={node.height} x={node.x} y={node.y} id={node.objectId}>
                <div className="rnd-menu">
                  <div className="menu-changer">
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                      <Icon className='changer'>swap_horiz</Icon>
                    </Button>
                    <Menu
                      id={node.objectId}
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}

                    >
                      {desktopState.map(el => {
                        return (
                          <MenuItem key={el.desktopId} data-id={el.desktopId} data-root={node.objectId} onClick={swapHandler}>{el.name}</MenuItem>
                        )
                      })}
                    </Menu>
                  </div>
                </div>
              </ResDrag>
            </div>
          )
        }
      })}
    </>
  )
}