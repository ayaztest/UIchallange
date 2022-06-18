import Image from 'next/image'
import { useState } from 'react'
import { LockClosedIcon, EyeOffIcon } from '@heroicons/react/solid'
function Login() {
  const [toggle, setToggle] = useState(true)
  const toggleClass = 'transform translate-x-7'
  return (
    <div className='bg-gray-500 flex h-screen justify-center items-center'>
      <div className='bg-white p-20 rounded-sm '>
        <h1 className='pb-5 text-3xl font-bold '>Enter Your Password</h1>
        <div className='flex flex-row justify-start  '>
          <div className='relative h-20 w-20  '>
            <Image
              className='rounded-full'
              layout='fill'
              src='https://ayazmedia.com/wp-content/uploads/2022/06/5d0f2947-7c24-44b3-9e08-86f3bec762b9-removebg-preview-e1654715044169.png'
            />
          </div>

          <div className=' pl-4 my-auto'>
            <p className='text-md'>Business Account</p>
            <p className='text-lg font-bold mt-0'>Ayaz Khan</p>
          </div>
        </div>
        <div className='mt-5'>
          <form action=''>
            <div className='flex flex-col mb-4'>
              <label
                className='mb-2  font-semibold text-sm text-black'
                htmlFor='passward'
              >
                Password
              </label>
              <div className='flex justify-start 	'>
                <div className=' border-solid border py-4 px-4 border-black rounded-md '>
                  <LockClosedIcon className='inline-flex first-letter:h-5 w-5 text-black stroke-3 hover:stroke-2' />
                  <input
                    placeholder='*****'
                    type='password'
                    id='password'
                    className='lg:w-72 border-none outline-none pr-2 pl-4 self-center'
                  />
                </div>
                <EyeOffIcon className='h-5 w-5 text-black stroke-3 hover:stroke-2 ml-4 self-center' />
              </div>
              <div className='grid grid-cols-4 pt-10  items-center'>
                <div
                  className='md:w-16 md:h-8 w-16 h-8 flex items-center border-black border rounded-full p-1 cursor-pointer '
                  onClick={() => {
                    setToggle(!toggle)
                  }}
                >
                  {/* Switch */}
                  <div
                    className={
                      'bg-cyan-900 md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out ' +
                      (toggle ? null : toggleClass)
                    }
                  ></div>
                </div>
                <p className='justify-start text-base font-semibold'>
                  Stay Signed in
                </p>
                <button className='bg-cyan-900 py-3 px-4 font-semibold text-white rounded-md justify-self-center col-span-2 mr-5 '>
                  Continue
                </button>
              </div>
              <p className='underline text-lg text-black font-bold mt-8'>
                Reset Password
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
