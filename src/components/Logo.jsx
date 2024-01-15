export default function Logo() {
  return (
    <div className='flex items-center'>
      <h1 className='font-title font-bold text-xl cursor-pointer'>
        &lt;Commentify/&gt;
      </h1>
      <span className='ms-2 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-body font-medium text-red-700 ring-1 ring-inset ring-red-600/10'>
        alpha
      </span>
    </div>
  );
}
