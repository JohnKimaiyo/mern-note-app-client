import React from 'react'
import authStore from '../stores/authStores'

export default function LogoutPage() {
    const store = authStore
    
    useEfect(()=>{
store.logout();
    },[])
  return (
    <div>You are now logged out</div>
  )
}
