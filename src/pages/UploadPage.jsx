import Header from "../components/upload-page/Header";
import Main from "../components/upload-page/Main";
import Uploader from "../components/upload-page/Uploader";
import Footer from "../components/Footer";

export default function UploadPage() {
  return (
    <div className='g h-screen flex flex-col justify-between'>
      <div className='container mx-auto font-body'>
        <Header />
        <div className='mt-10 mb-28'>
          <Main />
          <Uploader />
        </div>
      </div>
      <Footer />
    </div>
  );
}
