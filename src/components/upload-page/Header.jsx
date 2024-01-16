import Logo from "../Logo";
import GithubSvg from "./GithubSvg";

export default function Header() {
  return (
    <div className='flex justify-between pt-5 px-7'>
      <Logo />
      <div className='flex justify-evenly items-center font-body'>
        <div className='text-md text-center text-xs px-5'>Usage</div>
        <a
          className='flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-3 py-2 text-xs text-gray-600 transition-colors hover:bg-gray-100'
          href=''
          target='_blank'
          rel='noopener noreferrer'
        >
          <GithubSvg />
          <p>Star on GitHub</p>
        </a>
      </div>
    </div>
  );
}
