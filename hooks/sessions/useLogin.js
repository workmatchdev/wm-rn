import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import useStoreLogin from "./store";
import { useNavigation } from '@react-navigation/native';


const useLogin = () => {

  const router = useNavigation();
  const [error, setError] = useState(null);

  const {
    user,
    setUser,
    token,
    setToken,
    setMembership,
    setIsActiveMembership,
    setIsFreeMembership
  } = useStoreLogin();

  // useEffect(() => {
  //   if(user && token) router.navigate('Home');
  // }, [user,token])

  const handleLogin = async (values) => {
    try {
      const response = await axios.post('https://workmatch-server-0c86658d19cb.herokuapp.com/api/auth/user/auth/app', values);
      const sessionData = response.data;
      setUser(sessionData.usuario);
      setToken(sessionData.token);
      setMembership({
        activeMembership: sessionData.activeMemberships,
        membership: sessionData.membership
      })
      setIsActiveMembership(sessionData.isActive)
      setIsFreeMembership(sessionData.freePlan)
      router.navigate('Home')
    } catch (error) {
      setError(error?.response?.data?.msg)
    }
  };

  return {
    token,
    user,
    error,
    handleLogin
  };
}

export default useLogin;