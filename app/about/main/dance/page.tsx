
'use client'

import { useRouter } from "next/navigation"


export default function app() {
    const router = useRouter()

    return (
        <div>
            <button onClick={() => router.push('/')}>go_home</button>
            <button onClick={() => router.push('/about/main')}>go_back</button>
        </div>
    )
}