'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRegister } from '@/hooks/use-auth'
import { useRouter } from 'next/navigation'

const registerSchema = z.object({
  email: z.string().email("Email noto'g'ri"),
  username: z.string().min(4, 'Username kamida 4 ta bo\'lsihi kerak'),
  password: z.string().min(6, 'Parol kamida 6 ta belgi'),
})

type RegisterForm = z.infer<typeof registerSchema>


export default function RegisterPage() {
  const { mutate: register, isPending, isError } = useRegister()
  
  const router = useRouter()

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  })

  const onSubmit = (data: RegisterForm) => {
    console.log(data);
    
    register(data)
  }

  return (
    <div className="flex min-h-screen items-center justify-center flex-col md:flex-row bg-[linear-gradient(45deg,#311852_20%,#030A1B_40%)]">
      
      {/* Chap qism — Form */}
      <div className='w-full lg:w-3/10 min-h-screen flex justify-center items-center'>
        <form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className='w-4/5 flex flex-col gap-y-6'
        >
          <h1 className='text-4xl font-semibold text-white'>Ro'yxatdan o'tish</h1>

          {/* Email */}
          <div className='flex flex-col gap-y-2'>
            <label className='text-white text-xl' htmlFor="email">
              Email *
            </label>
            <input
              {...form.register('email')}
              id='email'
              type="text"
              className='border-2 border-white outline-0 w-full h-10 text-lg text-white p-2 rounded-md bg-transparent'
            />
            {form.formState.errors.email && (
              <p className="text-red-400 text-sm">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
          
          {/* Username */}
          <div className='flex flex-col gap-y-2'>
            <label className='text-white text-xl' htmlFor="username">
              Foydalanuvchi Nomi *
            </label>
            <input
              {...form.register('username')}
              id='username'
              type="text"
              className='border-2 border-white outline-0 w-full h-10 text-lg text-white p-2 rounded-md bg-transparent'
            />
            {form.formState.errors.username && (
              <p className="text-red-400 text-sm">
                {form.formState.errors.username.message}
              </p>
            )}
          </div>

          {/* Parol */}
          <div className='flex flex-col gap-y-2'>
            <label className='text-white text-xl' htmlFor="password">
              Parol *
            </label>
            <input
              {...form.register('password')}
              id='password'
              type="password"
              className='border-2 border-white outline-0 w-full h-10 text-lg text-white p-2 rounded-md bg-transparent'
            />
            {form.formState.errors.password && (
              <p className="text-red-400 text-sm">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>

          {/* Server xatosi */}
          {isError && (
            <p className="text-red-400 text-sm">Email yoki parol noto'g'ri!</p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={isPending}
            className='w-full h-10 text-lg text-white rounded-md flex items-center justify-center bg-[#228EE5] hover:bg-[#1662a0] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors mt-4'
          >
            {isPending ? 'Kirilmoqda...' : "Ro'yxatdan o'tish"}
          </button>

          {/* Links */}
          <div className='flex justify-start gap-x-4 text-sm'>
            <span className='text-white hover:text-gray-400 cursor-pointer'
              onClick={() => router.push('/auth/login')}
            >
              Tizimga kirish
            </span>
            <span className='text-amber-200 hover:text-amber-300 cursor-pointer'>
              Parolni Unutdim
            </span>
          </div>

        </form>
      </div>

      {/* O'ng qism — Rasm */}
      <div className='hidden lg:flex w-7/10 min-h-screen justify-center items-center'>
        <img
          src="/login_right.png"
          alt="login_img"
          className='w-4/5 rounded-2xl'
        />
      </div>

    </div>
  )
}