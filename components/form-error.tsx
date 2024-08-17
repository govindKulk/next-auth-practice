import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

type FormErrorProps = {
  message?: string;
};

function FormError({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
      <ExclamationTriangleIcon className='h4 w-4' />
      <p>{message}</p>
    </div>
  );
}
export default FormError;