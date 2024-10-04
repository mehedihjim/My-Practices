import React, { useState } from 'react'
import UserContext from './UserContext'


const UserContextProvider = ({ child }) => {
    const [name, setName] = useState([])
    return (
        <UserContext.Provider value={{ name, setName }}>
            {child}
        </UserContext.Provider>
    )
}

export default UserContextProvider