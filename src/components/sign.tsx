import React from 'react'
import logo from "../assets/amigos3.png"
import bg from '../assets/home.png'
import { ArrowCircleLeft, ArrowCircleRight, House} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='w-[100vw] h-[100vh]'>
    <div className="w-[100vw] h-[4rem] flex items-center bg-black/10 justify-between  border-b-2 border-black">
       <img className="w-36 mt-16" src={logo} alt="" />

       <div className='flex gap-0'>
       <Link to="/"><ArrowCircleLeft size={35} color='black' className="mr-7" /></Link>
       <Link to="/"><House size={35} color='black' className="mr-7" /></Link>
       <Link to="/go/sign/choose"> <ArrowCircleRight size={35} color='black' className="mr-7" /></Link>
       </div>
       

            </div>
              <div className='flex w-[100vw] h-[calc(100vh-4rem)] bg-blue-100'>
                 <div className='w-[50vw] h-[calc(100vh-4rem)]'>
                   <img className='overflow-hidden object-cover p-24' src={bg} alt="" />
                     </div>


             <div className='w-[50vw] h-[calc(100vh-4rem)] flex flex-col gap-6 justify-center ml-8'>
               <div className=' flex flex-col gap-1'>
                 <h1 className='text-5xl'>Sign Up</h1>
                   <p className='font-thin'>Enter your details to create your Amigos account:</p>
                     </div>


                <div className='flex gap-6'>
                  <input className='w-64 h-8 rounded-lg p-5' type="text" placeholder='First name' />
                    <input className='w-64 h-8 rounded-lg p-5' type="text" placeholder='Last name' />
                       </div>
                        <input className='w-96 h-8 rounded-lg p-5' type="text " placeholder='Email' />

                       <div className='flex justify-start items-center gap-1'>
                         <input className='w-12 h-10 text-center rounded-lg' type="tel" value="+91"/>
                           <input className='w-80 h-8 rounded-lg p-5' type="tel" placeholder='Enter number' />
                              </div>

                       <div className='flex flex-col gap-2'>
                          <p>*Password</p>
                           <input  className='w-80 h-8 rounded-lg p-5' type="password" placeholder='Password' />
                             <p>*Re-enter Password</p>
                               <input  className='w-80 h-8 rounded-lg p-5' type="Password" placeholder='Re-password' />
                                  </div>


                       <div className='flex gap-1'>
                        <input type="checkbox" />
                          <p>I agree with Amigos <span className='text-blue-600'>User Agreement</span>and <span className='text-blue-600'>Privacy policy.</span></p>
                            </div>

                       <div className='flex gap-1'>
                          <input type="checkbox" />
                            <p>I am not a Robot. </p>
                              </div>
                                 <button className='w-48 h-9 bg-blue-600 rounded-lg text-white'>Sumbit</button>
                                    </div>
                                      </div>
                                        </div>
                                          )}
