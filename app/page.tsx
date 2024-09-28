'use client'

import { useRouter } from "next/navigation"

export default function home () {
  const router = useRouter()

  const handelClick = () => {
    router.push('/about')
  }

  return (
    <div> <button onClick={handelClick}>home_page</button>
  
    </div>
  )
}