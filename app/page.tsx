'use client';

import { useRouter } from 'next/navigation';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <EnvelopeIcon className="h-12 w-12 text-blue-900" />
          <h1 className="mt-2 text-2xl font-bold text-blue-900">TisTracker</h1>
        </div>
        <p className="text-center text-gray-600 mb-2">Bem-vindo de volta!</p>
        <h2 className="text-center text-3xl font-extrabold mb-8">Entrar</h2>

        <form
          className="space-y-6"
          onSubmit={e => {
            e.preventDefault();
            router.push('/dashboard');
          }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="admin"
              className="w-full pb-2 border-b-2 border-gray-300 focus:border-blue-900 bg-transparent outline-none"
            />
            <EnvelopeIcon className="absolute right-0 bottom-2 h-5 w-5 text-gray-500" />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="•••••"
              className="w-full pb-2 border-b-2 border-gray-300 focus:border-blue-900 bg-transparent outline-none"
            />
            <LockClosedIcon className="absolute right-0 bottom-2 h-5 w-5 text-gray-500" />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-900 text-white rounded-lg font-semibold"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Desenvolvido por <span className="text-blue-900 font-medium">TIS</span>
        </p>
      </div>
    </div>
  );
}
