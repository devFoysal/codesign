import React, { useState } from 'react'
import "./menulist.css"
import DesktopMenuList from './DesktopMenuList'
import MobileMenuList from './MobileMenuList'
import MenuIcon from '../../../libs/Icons/MenuIcon'

const MenuList = () => {
    const [open, setOpen] = useState(false)
    const handelOpen = () => {
        setOpen(true)
    }

    const handelClose = () => {
        setOpen(false)
    }
    return (
        <>
            <div className='menu-icon'>
                <MenuIcon handelOpen={handelOpen} />
            </div>
            <DesktopMenuList />

            <MobileMenuList open={open} handelClose={handelClose} />
        </>
    )
}

export default MenuList