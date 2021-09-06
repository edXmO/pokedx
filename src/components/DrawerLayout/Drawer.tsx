import React, { useState } from 'react';
import DrawerNavigationItem from './DrawerNavigationItem';
import {CgMenuLeft, CgMenuLeftAlt, CgPokemon, CgSearch} from 'react-icons/cg';
import { RiSettings6Line, RiMapLine } from 'react-icons/ri'
import {FiGithub} from 'react-icons/fi';
import Label from '../../librarycomponents/Label';
import { Link } from 'react-router-dom';


const Drawer = ({ }) => {

  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <div className="flex-col w-24 min-h-full pt-4 shadow-lg z-10">
      <Link to="/home">
        <DrawerNavigationItem onClick={() => setCollapsed(!collapsed)} >
          {!collapsed ? 
            <CgMenuLeftAlt className="w-1/2 h-auto" />
            :
            <CgMenuLeft className="w-1/2 h-1/2" />}
        </DrawerNavigationItem>
      </Link>

      <Link to="/search">
        <DrawerNavigationItem onClick={() => true}>
            <CgSearch className="w-1/2 h-1/2" />
        </DrawerNavigationItem>
      </Link>

      <Link to="/center">
        <DrawerNavigationItem onClick={() => true}>
          <CgPokemon className="w-1/2 h-1/2"/>
        </DrawerNavigationItem>
      </Link>

      <Link to="/map">
        <DrawerNavigationItem onClick={() => true}>
          <RiMapLine className="w-1/2 h-1/2"/>
        </DrawerNavigationItem>
      </Link>

      <Link to="/settings">
        <DrawerNavigationItem onClick={() => true}>
          <RiSettings6Line className="w-1/2 h-1/2"/>
        </DrawerNavigationItem>     
      </Link>
      <a
        target="_blank"
        href="https://github.com/edXmO"
        className="w-24 h-24 m-t-20 bg-gray-800 flex items-center justify-center cursor-pointer rounded-br-sm outline-none focus:outline-none">
          <FiGithub className="w-1/2 h-1/2 rounded-br-sm" color="white" />
      </a>
    </div>
  )


}

export default Drawer;


