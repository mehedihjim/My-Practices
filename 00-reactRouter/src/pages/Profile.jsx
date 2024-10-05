import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {

    const { user } = useParams()

    return (
        <div className='flex justify-center items-center text-4xl text-green-500 py-10'>Name: {user}</div>
    )
}

export default Profile