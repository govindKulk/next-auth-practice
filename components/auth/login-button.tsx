'use client';

import { useRouter } from 'next/navigation';

interface LoginButtonProps {
    children: React.ReactNode,
    asChild?: boolean,
    mode?: 'redirect' | 'modal'
};

function LoginButton({
  children,
  asChild,
  mode = 'redirect',
}: LoginButtonProps) {
  const router = useRouter();

  const handleOnClick = () => {
    router.push('/auth/login');
  };

  if (mode === 'modal') {
    return <span>TODO; IMPLEMENT MODAL</span>;
  }

  return (
    <span className='cursor-pointer' onClick={handleOnClick}>
      {children}
    </span>
  );
}
export default LoginButton;