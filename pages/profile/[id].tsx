/* eslint-disable @next/next/no-img-element */

import Layout from '@/components/Layout'
import Card from '@/components/Cart'
import Avatar from '@/components/Avatar'
import Link from 'next/link'
import PostCard from '@/components/PostCard'
import { useEffect, useState } from 'react'
import Friend from '@/components/Friend'
import { useRouter } from 'next/router'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Cover from '@/components/Cover'

export default function Page () {
  const [curr, setCurr] = useState('posts')
  const [profile, setProfile] = useState(null)

  const supabase = useSupabaseClient()
  const session = useSession()

  let active =
    'flex gap-1 items-center border-b-4 px-3 font-bold text-blue-500 border-blue-500 py-1 cursor-pointer'
  let unactive = 'flex gap-1 items-center px-3 py-1 cursor-pointer'
  const router = useRouter()
  const userId = router.query.id

  const isMyUser = userId === session?.user?.id

  async function fetchUser () {
    supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .then((result: any) => {
        if (result.data) {
          console.log(result.data[0])
          setProfile(result.data[0])
        }
      })
  }

  useEffect(() => {
    if (userId) {
      fetchUser()
    }
  }, [router?.query?.id])

  return (
    <Layout>
      {/* BACKGROUND! */}
      <Card noPadding>
        <div className='relative'>
          <Cover
            onChange={fetchUser}
            editable={isMyUser}
            url={
              profile?.cover ||
              'https://images.unsplash.com/photo-1617002424329-cdf48dadb1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80'
            }
          />

          <div className='absolute left-8 top-24'>
            <Avatar url={profile?.avatar || ''} big  onChange={fetchUser}
            editable={isMyUser} />
          </div>

          <div className='p-4 pb-0'>
            <div className='ml-40'>
              <h2 className='text-3xl font-bold'>{profile?.name || 'test'}</h2>
              <p className='text-gray-500 leading-4 font-semibold'>
                {profile?.place || 'Taskim, Turkey'}
              </p>
            </div>

            {/* OPTIONS!! */}
            <div className='flex gap-5 mt-10 ml-2'>
              <p
                className={curr === 'posts' ? active : unactive}
                onClick={() => setCurr('posts')}
              >
                {/* ICON!! */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                  />
                </svg>

                {/* TEXT!! */}
                <p>Posts</p>
              </p>

              <p
                className={curr === 'about' ? active : unactive}
                onClick={() => setCurr('about')}
              >
                {/* ICON!! */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
                  />
                </svg>

                {/* TEXT!! */}
                <p>About</p>
              </p>

              <p
                className={curr === 'friends' ? active : unactive}
                onClick={() => setCurr('friends')}
              >
                {/* ICON!! */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
                  />
                </svg>

                {/* TEXT!! */}
                <p>Friends</p>
              </p>

              <p
                className={curr === 'photos' ? active : unactive}
                onClick={() => setCurr('photos')}
              >
                {/* ICON!! */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                  />
                </svg>

                {/* TEXT!! */}
                <p>Photos</p>
              </p>
            </div>
          </div>
        </div>
      </Card>

      {curr === 'posts' && <PostCard />}

      {curr === 'about' && (
        <Card>
          <div className=''>
            <h2 className='mb-2 text-3xl'>About me</h2>
            <p className='text-sm mb-2'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using making it look like
              readable English.
            </p>
            <p className='text-sm mb-2'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using making it look like
              readable English.
            </p>
          </div>
        </Card>
      )}

      {curr === 'friends' && (
        <Card>
          <div>
            <h2 className='mb-2 text-3xl'>Friends</h2>

            <div className='grid gap-5 grid-cols-2'>
              <Friend />
              <Friend />
              <Friend />
            </div>
          </div>
        </Card>
      )}

      {curr === 'photos' && (
        <Card>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex items-center rounded-ms overflow-hidden shadow-md h-48'>
              <img src={'/album-1.avif'} alt={'alt'} />
            </div>

            <div className='flex items-center rounded-ms overflow-hidden shadow-md h-48'>
              <img src={'/album-1.avif'} alt={'alt'} />
            </div>

            <div className='flex items-center rounded-ms overflow-hidden shadow-md h-48'>
              <img src={'/album-1.avif'} alt={'alt'} />
            </div>

            <div className='flex items-center rounded-ms overflow-hidden shadow-md h-48'>
              <img src={'/album-1.avif'} alt={'alt'} />
            </div>
          </div>
        </Card>
      )}
    </Layout>
  )
}
