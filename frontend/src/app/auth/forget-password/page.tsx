'use client'

import { useRouter } from "next/navigation"

const Page = () => {

  const router = useRouter()
  return (
    <div>
      <button
        onClick={() => router.push('/auth/login')}
      >Loginga qaytish</button>
    </div>
  )
}

export default Page
