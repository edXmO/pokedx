import { useEffect, useState } from "react"
import { useLocation } from "react-router";
import usePrevious from "./usePrevious";

const useHistoryLocation = () => {

  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location);
  const prevLocation = usePrevious(location);

  useEffect(() => {
    setCurrentLocation(location);
  }, [location])


  return {
    currentLocation,
    prevLocation
  }
}


export default useHistoryLocation;



