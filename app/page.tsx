'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Login() {
  const router = useRouter();
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-2xl w-full bg-white p-8 rounded-lg shadow-md flex flex-row gap-10'>
        <div className='mb-4 h-auto bg-indigo-200 w-[300px] rounded-lg'></div>
        <div>
          <h2 className='text-center text-2xl font-bold mb-6'>Welcome Again</h2>
          {/* <form> */}
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='block text-gray-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600'
            />
          </div>
          <button
            onClick={() => router.push('/dashboard')}
            type='submit'
            className='w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200'
          >
            Log In
          </button>
          {/* </form> */}
          <div className='flex items-center justify-center mt-6'>
            <span className='text-gray-600'>or</span>
          </div>
          <div className='flex justify-center mt-4'>
            <button className='flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-200 mr-2'>
              G
            </button>
            <button className='flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-200'>
              F
            </button>
          </div>
          <div className='mt-6 text-center'>
            <a href='/register' className='text-indigo-600 hover:underline'>
              New User? Register Here.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
