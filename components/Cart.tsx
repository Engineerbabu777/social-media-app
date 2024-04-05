

import React from 'react'

type Props = {
  children: React.ReactNode;
  noPadding?:boolean;

}

function Card({ children, noPadding=false }: Props) {
  return (
    <div className={"bg-white shadow-md shadow-gray-300 mb-4 rounded-md "+(noPadding? ' p-0 ':' p-2  ')}>{children}</div>
  )
}

export default Card