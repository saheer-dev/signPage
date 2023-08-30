import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import logo from "../amigos3.png"
import bg from '../home.png'
import { ArrowCircleLeft, ArrowCircleRight, House} from '@phosphor-icons/react'


type FormValues = {
    First: string,
    last: string,
    email: string,
    phn: number,
    pass: number
}

export default function Sign() {

    const form = useForm<FormValues>();
    const { register,control,handleSubmit, formState } = form;
    const {errors} = formState;

    const onSubmit = (data:FormValues) => {
        console.log("form submitted,",data);
        
    }


  return (
      <div className='w-[100vw] h-[100vh]'>
        <form onSubmit={handleSubmit(onSubmit)} noValidate >
    <div className="w-[100vw] h-[4rem] flex items-center bg-black/10 justify-between  border-b-2 border-black">
       <img className="w-36 mt-16" src={logo} alt="" />

       <div className='flex gap-0'>
      <ArrowCircleLeft size={35} color='black' className="mr-7" />
       <House size={35} color='black' className="mr-7" />
       <ArrowCircleRight size={35} color='black' className="mr-7" />
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
                  <input className='w-64 h-8 rounded-lg p-5' type="text" placeholder='First name' id="First" {...register("First", {
                    required:{
                        value:true,
                        message:"Enter the Name",
                    }
                  })} />
                  <p className="text-[12px] text-red-700 font-thin"> {errors.First?.message} </p>
                    <input className='w-64 h-8 rounded-lg p-5' type="text" placeholder='Last name' id="last" {...register("last")} />
                       </div>
                        <input className='w-96 h-8 rounded-lg p-5' type="text " placeholder='Email' id="email" {...register("email", {
                            pattern:{
                                value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message:"Invalid Email Format",
                            },
                        })} />
                        <p className="text-[12px] text-red-700 font-thin"> {errors.email?.message} </p>

                       <div className='flex justify-start items-center gap-1'>
                         <input className='w-12 h-10 text-center rounded-lg' type="tel" value="+91"/>
                           <input className='w-80 h-8 rounded-lg p-5' type="tel" placeholder='Enter number' id="phn" {...register("phn",{
                            required:{
                                value:true,
                                message:"Enter the phone number"
                            }
                           })} />
                           <p className="text-[12px] text-red-700 font-thin"> {errors.phn?.message} </p>
                              </div>

                       <div className='flex flex-col gap-2'>
                          <p>*Password</p>
                           <input  className='w-80 h-8 rounded-lg p-5' type="password" placeholder='Password' id="pass" {...register("pass",{
                            required:{
                                value:true,
                                message:"Enter Your Password "
                            },
                           })} />
                           <p className="text-[12px] text-red-700 font-thin"> {errors.pass?.message} </p>
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
                                      </form>
                                      <DevTool control={control}/>
                                        </div>
                                          )}
