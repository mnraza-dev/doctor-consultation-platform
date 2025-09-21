import Header from '@/components/landing/Header'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Home = () => {
  const user = {
    type: 'pa'
  }
  const router = useRouter();
  useEffect(() => {
    if (user.type === 'doctor') {
      router.replace('/doctor/dashboard')
    }
  }, [user, router])

  if (user?.type === 'doctor') {
    return null
  }
  return (
    <div className='min-h-screen bg-white'>
      <Header showDashboardNavbar={false} />
    </div>
  )
}

export default Home