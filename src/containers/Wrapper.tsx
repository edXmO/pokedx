import { ReactNode, useEffect, useState } from 'react';
import Drawer from '../components/DrawerLayout/Drawer';
import useHistoryLocation from '../hooks/useHistoryLocation';

const Wrapper = ({ children, loaded }: { children: ReactNode | ReactNode[] | SVGSVGElement, loaded: boolean }) => {

  // primero estilos sin w-screen en ninguno de los dos contenedores,
  // y al cargar se aplica el w-screen
  const {currentLocation, prevLocation } = useHistoryLocation();
  const [selectedView, setSelectedView ] = useState(currentLocation.pathname);

  useEffect(() => { 
    setSelectedView(currentLocation.pathname)
  }, [currentLocation]);

  return (
    <body className={`container h-full transform py-8 skew-y-2 w-screen bg-blue-200 z-0 rounded-md transition-all duration-500 ease-in-out`}>
      <Drawer selectedView={selectedView} />
      <div className={`h-full py-12 px-10 z-10 scale-x-0 skew-y-4 transform ${!loaded ? '' : 'scale-x-100 -skew-y-2'} w-screen transition-all duration-300 delay-300 ease-in-out`}>
        {children}
      </div>
    </body>
  )
}

export default Wrapper;