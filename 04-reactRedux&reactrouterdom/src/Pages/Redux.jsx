import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLoginInfo } from '../slices/userSlice';
import ReduxData from '../components/ReduxData';

const Redux = () => {

    const dispath = useDispatch();

    const data = useSelector((state) => state.userInfo.value)

    const [listInput, setListInput] = useState('')

    const handleSubmit = () => {
        dispath(userLoginInfo(listInput))
    }

    return (
        <div className='w-full py-7 mx-auto text-4xl text-black bg-slate-300 flex flex-col items-center justify-center h-screen'>
            <h1 className='py-8'>Redux Practice~</h1>
            <div className="mb-8">
                <input onChange={(e) => setListInput(e.target.value)} type="text" className='py-4 px-6 rounded-md ' />
                <button onClick={handleSubmit} className='py-4 px-8 w-fit bg-black text-white'>Add</button>
            </div>
            <ReduxData />
        </div>
    )
}

export default Redux