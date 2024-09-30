'use client'

import { useRouter } from "next/navigation"

export default function home () {
  const router = useRouter()

  const handelClick = () => {
    router.push('/about')
  }
  
  

  return (
    <div> <button onClick={handelClick} className="p-4 bg-black">home_page</button>
      
  
    </div>
  )

}