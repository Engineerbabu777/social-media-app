import Card from '@/components/Cart'
import Login from '@/components/Login'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

export default function Page ({}) {
  return (
    <>
      <Login />
    </>
  )
}
