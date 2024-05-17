import React from 'react'
import { useDispatch } from 'react-redux'
// imoprt {useDispatch}
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
export default function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <Button onclick={logoutHandler} className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
        Logout
    </Button>
  )
}
