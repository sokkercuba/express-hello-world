import { useContext, useEffect } from 'react'
import {
  setError,
  setLoading,
  setLogin,
  setUser,
  setUsername
} from '../../store/actions'
import { AppContext } from '../../store/StoreProvider'

export const HomePage = () => {
  const { state, dispatch } = useContext(AppContext)

  // useEffect(() => {
  //   const fetchUser = async () => await getUserData(dispatch);
  //   fetchUser();
  // }, []);

  return <div>Hello HomePage</div>
}
