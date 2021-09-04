import axios, { AxiosResponse } from "axios"
import { useState } from "react"

const useQuery = () => {

  const [error, setError] = useState<any>(null);

  const query = ( uri : string) : Promise<any> => {

    console.log('calling query', `${uri}`)
    const res = axios.get<any, AxiosResponse<any>>(uri)
    .then((data : AxiosResponse<any>) => data.data)
    .catch<void>((err : {err: Object}) => console.log(`dispatch error action ${err}`))

    return error ? error : res;
  }

  return {
    query
  }
}

export default useQuery;