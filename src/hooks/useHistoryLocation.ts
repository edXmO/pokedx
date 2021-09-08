import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import usePrevious from "./usePrevious";
import { LocationParams } from "../types/types";

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



