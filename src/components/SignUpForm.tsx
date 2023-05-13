"use client"
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '@/domain/models/signUpSchema';


import LoginButton from './loginButton';

type SignUpFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};


export default function SignUpForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    // TODO: enviar os dados para o servidor e salvar no banco de dados
    localStorage.setItem('email', data.email);
    localStorage.setItem('password', data.password);
    console.log(data);

    // redirecionar para a página de Login
    router.push('/login');
  };



  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-6 mt-5 text-sm'
    >

      <div className='relative'>
        <input
          autoComplete="off"
          placeholder="Email"
          className={`w-full focus:outline-none bg-transparent p-2 border-b select-none ${errors.email ? 'border-b-red' : 'border-b-white'}`}
          id="email" {...register("email")} />

        <span className='absolute right-0 p-2 text-red select-none'>
          {errors.email ? ` ${errors.email.message}` : ""}
        </span>
      </div>
      {/* {errors.email && <span>{errors.email.message}</span>} */}

      <div className='relative'>
        <input
          placeholder="Password"
          className={`w-full focus:outline-none bg-transparent p-2 border-b ${errors.password ? 'border-b-red' : 'border-b-white'}`}
          id="password"
          type="password" {...register("password")} />
        <span className='absolute right-0 p-2 text-red select-none'>
          {errors.password ? ` ${errors.password.message}` : ""}
        </span>
      </div>
      {/* {errors.password && <span>{errors.password.message}</span>} */}

      <div className='relative'>
        <input
          placeholder="Repeat password"
          className={`w-full focus:outline-none bg-transparent p-2 border-b ${errors.confirmPassword ? 'border-b-red' : 'border-b-white'}`}
          id="confirmPassword"
          type="password" {...register("confirmPassword")} />
        <span className='absolute right-0 p-2 text-red select-none'>
          {errors.confirmPassword ? ` ${errors.confirmPassword.message}` : ""}


        </span>
      </div>
      {/* {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>} */}

      <LoginButton />

    </form>

  );
}