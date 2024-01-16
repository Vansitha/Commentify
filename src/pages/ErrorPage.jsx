import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className='h-screen flex flex-col items-center justify-center font-body'>
      <div className='mb-4'>
        <span className='inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10'>
          Error
        </span>
      </div>
      <h1 className='text-9xl'>404</h1>
      <p>The page you are looking for is not found.</p>
      <Link className='underline mt-3' to='/'>
        Go to Commentify
      </Link>
    </div>
  );
}
