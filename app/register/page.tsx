import React from 'react';

export default function Register() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-2xl w-full bg-white p-8 rounded-lg shadow-md flex flex-row gap-10'>
        <div className='mb-4 h-auto bg-green-200 w-[300px] rounded-lg'></div>
        <div>
          <h2 className='text-center text-2xl font-bold mb-6'>
            Create Your Account
          </h2>
          <form>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-gray-700'>
                Full Name
              </label>
              <input
                type='text'
                id='name'
                className='w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-gray-700'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600'
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='password' className='block text-gray-700'>
                Password
              </label>
              <input
                type='password'
                id='password'
                className='w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600'
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='confirm-password' className='block text-gray-700'>
                Confirm Password
              </label>
              <input
                type='password'
                id='confirm-password'
                className='w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200'
            >
              Register
            </button>
          </form>
          <div className='mt-6 text-center'>
            <a href='/login' className='text-green-600 hover:underline'>
              Already have an account? Log In Here.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
