import React from 'react'
import { useSession } from '../../Store/UseSession';

const DatosUser = () => {
    const {user} = useSession();
  return (
    <>
    <input type="text" value={user.name}/>
    <input type="text" value={user.surname}/>
    <input type="text" value={user.email}/>
    </>
  )
}

export default DatosUser