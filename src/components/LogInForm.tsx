"use client"
import { useForm } from 'react-hook-form';
import { loginSchema } from '@/domain/models/signUpSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

type LoginFormData = {
    email: string;
    password: string;
};

export default function LogInForm() {

    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginFormData) => {
        // Faça aqui a lógica de autenticação do usuário

        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');
        if (data.email === savedEmail && data.password === savedPassword) {
            // redirecionar para a página de sucesso de login
            router.push('/dashboard');
        } else {
            // mostrar mensagem de erro
            alert('Email ou senha incorretos');
        }

    
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 mt-5 text-sm'>

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

            <button className="w-full h-12 bg-red rounded-lg text-base" type="submit">
                Login to your account
            </button>
        </form>
    );
};