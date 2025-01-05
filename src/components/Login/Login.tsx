/* eslint-disable react/react-in-jsx-scope */
import { Navbar } from '../Navbar';
import { useState } from 'react';
import { postLogin } from './api/Login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '../LoadingSpinner';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await postLogin(loginForm);

      if (response.status === 204) {
        console.log('Login failed');
      } else if (response.status === 200) {
        dispatch({
          type: 'auth/user',
          payload: {
            _id: response.data.data._id,
            username: response.data.data.username,
            name: response.data.data.name,
            image: response.data.data.image,
          },
        });
        navigate('/dashboard');
      }
      setIsLoading(false);
    } catch (error) {
      console.log('Login failed', error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar className="bg-black" />
      <div className="flex h-[calc(100vh-5rem)] items-center justify-center bg-black">
        <div className="w-[400px] rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-primary-dark mb-4 text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="text-secondary-dark block text-sm font-medium">
                Username
              </label>
              <Input id="username" type="text" placeholder="Enter your username" value={loginForm.username} onChange={handleInputChange} />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-secondary-dark block text-sm font-medium">
                Password
              </label>
              <Input id="password" type="password" placeholder="Enter your password" value={loginForm.password} onChange={handleInputChange} />
            </div>
            <Button type="submit" className="flex w-full items-center justify-center rounded-lg bg-[#00df9a] py-2 text-center text-white hover:bg-[#00bf85] focus:outline-none">
              {isLoading ? <LoadingSpinner /> : 'Login'}
            </Button>
          </form>
          <p className="text-secondary-dark mt-4 text-center text-sm">
            Don’t have an account?{' '}
            <a href="/signup" className="text-[#00df9a] underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
