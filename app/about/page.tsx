
'use client'

import { useRouter } from "next/navigation"


export default function app() {
    const router = useRouter()

    return (
        <div>
            <button onClick={() => router.push('/about/main')}>go_main</button>
        </div>
    )
}