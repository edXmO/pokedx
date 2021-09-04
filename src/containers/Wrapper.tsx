import { ReactNode } from 'react';

const Wrapper = ({ children, loaded }: { children: ReactNode | ReactNode[] | SVGSVGElement, loaded: boolean }) => {

  // primero estilos sin w-screen en ninguno de los dos contenedores,
  // y al cargar se aplica el w-screen

  return (
    <body className={`container h-3/5 scale-x-0 py-8 transform skew-y-2 ${!loaded ? '' : 'scale-x-100'} w-screen bg-blue-200 z-0 rounded-md transition-all duration-500 ease-in-out`}>
      <div className={`py-10 px-8 z-10 scale-x-0 skew-y-4 transform ${!loaded ? '' : 'scale-x-100 -skew-y-2'} w-screen transition-all duration-300 delay-300 ease-in-out`}>
        {children}
      </div>
    </body>
  )
}

export default Wrapper;