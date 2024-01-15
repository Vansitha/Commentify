import Logo from "../Logo";
import GithubLogo from "../../assets/icons/github.png";

export default function Header() {
  return (
    <div className='flex justify-between pt-5 px-7'>
      <Logo />
      <div className='flex justify-evenly items-center'>
        <div className='text-md text-center text-xs px-5'>Usage</div>
        <img
          className='cursor-pointer'
          width={30}
          height={30}
          src={GithubLogo}
          alt='Github Logo'
        />
      </div>
    </div>
  );
}
