import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSetupMenus } from '../hooks';
import { Navbar } from './Navbar';

export const Layout = (props) => {
  const { menus } = useSelector(state => state.data)
  const setupMenus = useSetupMenus()

  useEffect(() => { if (menus.length === 0) setupMenus() }, [])

  return (
    <div className='vh-100 w-100'>
      <Navbar />
      <div className='d-flex align-items-center justify-content-center h-75'>
        {props.children}
      </div>
    </div>
  )
};
