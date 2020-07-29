import React, {useContext, useState} from "react";
import {DesktopContext} from "../context/desktops/desktopContext";
import Icon from '@material-ui/core/Icon';

export const Navbar = () => {
  const {state, changeDesktopName, addNewDesktop, changeCurrentDesktop} = useContext(DesktopContext)
  const {desktopState, currentDesktop} = state
  const [input, changeInput] = useState('')

  const onPressHandler = event => {
    if (event.key === 'Enter') {
      changeDesktopName(input, currentDesktop)
    }
  }

  const onClickHandler = event => {
    const id = event.target.getAttribute('data-id')
    changeCurrentDesktop(id)
  }


  return (
    <nav className='navbar'>
      <div className="dashboard-head">
        <input
          className='dashboard-head-name'
          placeholder='Изменить название'
          value={input}
          onChange={event => changeInput(event.target.value)}
          onKeyPress={onPressHandler}
          type="text"/>
      </div>
      <ul className="navbar-nav">
        {
          desktopState.map(node => {
            return (
              <li key={node.desktopId}>
                <span className="nav-item" data-id={node.desktopId} onClick={event => onClickHandler(event)}>{node.name}</span>
              </li>
            )
          })
        }
        <Icon className='icon' onClick={addNewDesktop}>add_circle</Icon>
      </ul>
    </nav>
  )
}
