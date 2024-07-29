'use client';

import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../actions';
import { UserStateType } from '../reducers';
import UserDashboard from '@/components/UserDashboard';
import AdminDashboard from '@/components/AdminDashboard';

export type User = {
  username: string;
  role: string;
};

export default function Home() {
  const user = useSelector((state: UserStateType) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/`)
      .then(response => {
        console.log({ response });
        dispatch(setUser(response.data));
      });
  }, []);

  if (!user) {
    return 'Loading ...';
  }

  return (
    <div className='m-10'>
      {user.role === 'user' ? (
        <UserDashboard username={user.username} />
      ) : (
        <AdminDashboard username={user.username} />
      )}
    </div>
  );
}
