import { useState } from 'react';
import DrawerNavigationItem from './DrawerNavigationItem';
import {CgMenuLeft, CgMenuLeftAlt, CgPokemon, CgSearch} from 'react-icons/cg';
import { RiSettings6Line, RiMapLine } from 'react-icons/ri'
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Drawer = ({ selectedView } : { selectedView: string } ) => {

  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
      <div className="w-24 h-full ml-4 bg-white pt-4 shadow-lg z-10">
        <Link to="/home">
          <DrawerNavigationItem style={selectedView === '/home' ? 'bg-gray-100' : 'bg-white'} onClick={() => setCollapsed(!collapsed)} >
            {!collapsed ? 
              <CgMenuLeftAlt className="w-1/2 h-auto" />
              :
              <CgMenuLeft className="w-1/2 h-1/2" />}
          </DrawerNavigationItem>
        </Link>

        <Link to="/search">
          <DrawerNavigationItem style={selectedView === '/search' ? 'bg-gray-100' : 'bg-white'} onClick={() => true}>
              <CgSearch className="w-1/2 h-1/2" />
          </DrawerNavigationItem>
        </Link>

        <Link to="/center">
          <DrawerNavigationItem style={selectedView === '/pokemon' ? 'bg-gray-100' : 'bg-white'} onClick={() => true}>
            <CgPokemon className="w-1/2 h-1/2"/>
          </DrawerNavigationItem>
        </Link>

        <Link to="/map">
          <DrawerNavigationItem style={selectedView === '/map' ? 'bg-gray-100' : 'bg-white'} onClick={() => true}>
            <RiMapLine className="w-1/2 h-1/2"/>
          </DrawerNavigationItem>
        </Link>

        <Link to="/settings">
          <DrawerNavigationItem style={selectedView === '/settings' ? 'bg-gray-100' : 'bg-white'} onClick={() => true}>
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


