import React, { useEffect, useState } from 'react'
import '../styles/output.css'

const Homepage = () => {

    const [theme, setTheme] = useState(false)


    return (

        <div className={` ${theme && 'dark'} `}>

            <div className='h-full  p-4 top-0 right-0 dark:bg-slate-600 dark:text-gray-50 '>
                <div className=' grid  justify-end'>
                    <button onClick={() => setTheme(!theme)}
                        className={` border-2 bg-green-500 font-bold py-2 px-4 rounded dark:bg-orange-400 `}
                        type="button" >

                        CLICK HERE
                        {/* {
                                !theme ? "Dark Mode" : "Light Mode"
                            } */}
                    </button>
                </div>
                <div>

                    <h3 className='uppercase text-center  dark:font-bold  '>This is MY HEADING of Tailwind csS</h3>


                    <h3 className='text-justify mt-5  py-2 px-4  '> avel blogs list even further with 6 new travel blogs to
                        check out, bringing it to 20, a perfect number for the 2020 year.
                        Without further ado, let's check out all the beautiful tra 2020 has come,
                        maybe not with a bang as a lot of us may have hoped,
                        but the world goes on and as such I have decided to extend this most
                        beautiful travel blogs list even further with 6 new travel blogs to
                        check out, bringing it to 20, a perfect number for the 2020 year.
                        Without further ado, let's check out all the beautiful travel blogs
                        out there.
                        2020 has come, maybe not with a bang as a lot of us may have hoped,
                        but the world goes on and as such I have decided to extend this most
                        beautiful travel blogs list even further with 6 new travel blogs to
                        check out, bringing it to 20, a perfect number for the 2020 year.
                        Without further ado, let's check out all the beautiful travel blogs
                        out there.
                    </h3>
                </div>

                <div className='mt-5 py-2 px-4  '>
                    2020 has come, maybe not with a bang as a lot of us may have hoped,
                    but the world goes on and as such I have decided to extend this most
                    beautiful travel blogs list even further with 6 new travel blogs to
                    check out, bringing it to 20, a perfect number for the 2020 year.
                    Without further ado, let's check out all the beautiful travel blogs
                    out there.
                </div>


                <div className=' grid  justify-center'>
                    <div className=" w-full max-w-l  ">
                        <form className="  bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-slate-300 ">
                            <div className="mb-4 ">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                    Email
                                </label>
                                <input className="border rounded w-full py-2 px-3 text-gray-700 " id="email" type="text" placeholder="Email" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                    Password
                                </label>
                                <input className="border rounded w-full py-2 px-3 text-gray-700 " id="password" type="text" placeholder="Password" />
                                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className=" bg-green-700 border-2  text-white font-bold py-2 px-4 rounded " type="button" >
                                    Sign In
                                </button>



                            </div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Already have an account ?
                            </label>
                        </form>

                    </div>
                </div>



                <div className="grid grid-rows-3 grid-flow-col gap-4 text-center">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                    <div>05</div>
                    <div>06</div>
                    <div>07</div>
                    <div>08</div>
                    <div>09</div>
                    <div>10</div>
                    <div>11</div>
                    <div>12</div>
                    <div>13</div>
                    <div>14</div>
                </div>


            </div>
        </div>

    )
}

export default Homepage
