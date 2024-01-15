import Logo from "../components/Logo";
import Animation from "../components/Animation";
import Footer from "../components/Footer";

export default function DownloadPage() {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <div className='flex justify-between container mx-auto mt-5'>
        <Logo />
        <button className='bg-zinc-900 font-body border-zinc-900 border rounded-xl inline-flex items-center justify-center py-3 px-6 text-center text-xs font-medium text-white hover:bg-zinc-800 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
          Download
        </button>
      </div>
      <main className='flex flex-col justify-center items-center'>
        <Animation />
      </main>
      <Footer />
    </div>
  );
}
