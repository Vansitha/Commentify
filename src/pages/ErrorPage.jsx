import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className='h-screen flex flex-col items-center justify-center font-body px-5'>
      <ExclamationTriangleIcon className='h-14 w-14 text-red-500 mb-3' />
      <h1 className='text-9xl'>404</h1>

      <p className='text-center my-3'>
        The page you are looking for is not found.
      </p>
      <Link className='underline mt-3' to='/'>
        Go Back to Commentify
      </Link>
    </div>
  );
}
