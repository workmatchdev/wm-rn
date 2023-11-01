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
  } = useStoreLogin();

  // useEffect(() => {
  //   if(user && token) router.navigate('Home');
  // }, [user,token])

  const handleLogin = async (values) => {
    try {
      const response = await axios.post('https://work-match-server.vercel.app/api/auth/user/auth/app', values);
      const sessionData = response.data;
      console.log(sessionData)
      setUser(sessionData.usuario);
      setToken(sessionData.token);      
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