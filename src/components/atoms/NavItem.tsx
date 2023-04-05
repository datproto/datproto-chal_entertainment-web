import React from 'react'

interface INavItem {
  children: React.ReactNode
}

function NavItem({children}: INavItem) {
  return (
    <li className='relative flex h-4 w-4 items-center'>
      {children}
    </li>
  )
}

export default NavItem
