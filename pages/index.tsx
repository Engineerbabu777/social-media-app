import { Inter } from 'next/font/google'
import PostFormCard from '@/components/PostFormCard'
import PostCard from '@/components/PostCard'
import Layout from '@/components/Layout'
import { useCallback, useEffect, useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

const inter = Inter({ subsets: ['latin'] })

export default function Page ({}) {
  const supabase = useSupabaseClient()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    supabase
      .from('posts')
      .select('id,content,created_at,profiles(name,avatar)')
      .order('created_at', { ascending: false })
      .then((res: any) => {
        setPosts(res.data)
        console.log(res.data)
      })
  }

  return (
    <>
      <Layout>
        <PostFormCard onPost={fetchPosts} />

        {posts.map((post: any, ind: number) => {
          return <PostCard {...post} key={ind} />
        })}
      </Layout>
    </>
  )
}
