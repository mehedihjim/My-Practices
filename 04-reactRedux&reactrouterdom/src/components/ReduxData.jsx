import React from 'react'
import { useSelector } from 'react-redux'

const ReduxData = () => {

    const reduxData = useSelector((state) => state.userInfo.value)

    return (
        <div className='w-[520px] h-auto py-4 px-8 bg-white'>
            <h1>Ja lekhum: {reduxData}</h1>
        </div>
    )
}

export default ReduxData