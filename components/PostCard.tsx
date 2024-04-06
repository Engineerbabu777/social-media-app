import Card from './Cart'
import Avatar from './Avatar'
import ClickOutHandler from 'react-clickout-handler'
import { useContext, useState } from 'react'
import Link from 'next/link'
import ReactTimeAgo from 'react-time-ago'
import { UserContext } from '@/context/userContext'

export default function PostCard ({
  content,
  profiles: profile,
  created_at,
  photos
}: {
  created_at: any,
  content: string,
  photos: any,
  profiles: any
}) {
  const [showDropDown, setShowDropDown] = useState < boolean > (false)

  const { profile: myProfile } = useContext(UserContext)

  return (
    <Card>
      <div className='flex gap-2'>
        <div className=''>
          <Link href={'/profile'}>
            <Avatar url={profile?.avatar} />
          </Link>
        </div>
        <div className='grow'>
          <p className=''>
            <Link
              href={'/profile/'+myProfile?.id}
              className='font-semibold hover:underline hover:text-opacity-40'
            >
              {profile?.name}
            </Link>{' '}
            shared a <span className='text-[#2191FA]'>album</span>
          </p>
          {created_at && <p className='text-sm text-gray-400'>
            <ReactTimeAgo date={created_at} />
          </p>}
        </div>
        z
        <div>
          <button
            title={'view more options'}
            type='button'
            className='text-gray-400'
            onClick={() => setShowDropDown(!showDropDown)}
          >
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
                d='M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
              />
            </svg>
          </button>
          <ClickOutHandler
            onClickOut={() => {
              setShowDropDown(false)
            }}
          >
            <div className='relative'>
              {showDropDown && (
                <>
                  <div className='absolute bg-white border shadow-md rounded-md flex flex-col gap-2  w-48 right-0 shadow-gray-300 p-3 '>
                    <Link
                      href={'/'}
                      className='flex gap-3 py-2 my-2 transition-all hover:scale-110 hover:bg-[#2191FA] hover:text-white -mx-4 px-4 hover:shadow-gray-300 hover:shadow-md '
                    >
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
                          d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
                        />
                      </svg>
                      <p>Save post</p>
                    </Link>

                    <Link
                      href={'/'}
                      className='flex gap-3 py-2 my-2 transition-all hover:scale-110 hover:bg-[#2191FA] hover:text-white -mx-4 px-4 hover:shadow-gray-300 hover:shadow-md '
                    >
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
                          d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5'
                        />
                      </svg>

                      <p>Turn notifications</p>
                    </Link>

                    <Link
                      href={'/'}
                      className='flex gap-3 py-2 my-2 transition-all hover:scale-110 hover:bg-[#2191FA] hover:text-white -mx-4 px-4 hover:shadow-gray-300 hover:shadow-md '
                    >
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
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <p>Hide post</p>
                    </Link>

                    <Link
                      href={'/'}
                      className='flex gap-3 py-2 my-2 transition-all hover:scale-110 
                                hover:bg-[#2191FA] hover:text-white -mx-4 px-4 hover:shadow-gray-300 hover:shadow-md '
                    >
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
                          d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                        />
                      </svg>

                      <p>Delete</p>
                    </Link>

                    <Link
                      href={'/'}
                      className='flex gap-3 py-2 my-2 transition-all hover:scale-110 hover:bg-[#2191FA] hover:text-white -mx-4 px-4 hover:shadow-gray-300 hover:shadow-md '
                    >
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
                          d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                        />
                      </svg>

                      <p>Report</p>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </ClickOutHandler>
        </div>
      </div>
      <div className=''>
        <p className='my-3 text-sm'>{content}</p>
        {photos?.length > 0 && (
          <div className='flex gap-4'>
            {photos?.map((photo: any) => (
              <div className='' key={photo}>
                <img src={photo} alt='some' className='rounded-md' />
              </div>
            ))}
          </div>
        )}
        {/* <div className='rounded-md overflow-hidden w-full'>
          <img src='/album-1.avif' alt='text-alt' className='w-full' />
        </div> */}
      </div>

      {/* BUTTONS !! */}
      <div className='flex gap-6 mt-2'>
        <div className=''>
          <span className='flex gap-1 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
              />
            </svg>
            {'76'}
          </span>
        </div>

        <div className=''>
          <span className='flex gap-1 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
              />
            </svg>
            {'18'}
          </span>
        </div>

        <div className=''>
          <span className='flex gap-1 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z'
              />
            </svg>
            {'89'}
          </span>
        </div>
      </div>

      {/* COMMENTS !! */}
      <div className='mt-2 flex gap-3'>
        <div className=''>
          <Avatar url={myProfile?.avatar} />
        </div>
        <div className='grow relative border rounded-full '>
          <textarea
            className='w-full block p-3 resize-none border focus:border-[#2191FA] outline-none  overflow-hidden shadow-sm px-4 rounded-full h-12'
            placeholder={'Leave a comment!'}
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6 absolute right-3 top-3 text-gray-400 cursor-pointer'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
            />
          </svg>
        </div>
      </div>
    </Card>
  )
}
