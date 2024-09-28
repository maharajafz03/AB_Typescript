
'use client'

import { useRouter } from "next/navigation"


export default function app() {
    const router = useRouter()

    return (
        <div>
            <button onClick={() => router.push('/about/main/dance')}>go_dance</button>
            <button onClick={() => router.push('/about')}>go_back</button>

            
        </div>
    )
}