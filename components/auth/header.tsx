import { cn } from '@/lib/utils';
import { poppins } from '@/components/font';

type HeaderProps = {
  label: string;
};

function Header({ label }: HeaderProps) {
  return (
    <div className='w-full flex flex-col gap0y-4 items-center justify-center'>
      <h1
        className={cn('text-3xl font-semibold antialiased', poppins.className)}>
        🔐 Auth
      </h1>
      <p className='text-muted-foreground text-sm'>{label}</p>
    </div>
  );
}
export default Header;