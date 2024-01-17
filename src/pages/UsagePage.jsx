import Footer from "../components/Footer";
import Header from "../components/upload-page/Header";

export default function UsagePage() {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <div className='container mx-auto text-body px-3 lg:px-0'>
        <Header />
        <div className='mb-28 text-base w-full lg:w-10/12'>
          <h1 className='mb-5 mt-10 text-3xl font-medium'>Usage</h1>
          <p>
            Hi, you might be wondering the purpose behind this tool. Well, let
            me share the backstory. As a student myself, I used to procrastinate
            commenting my code until the very last moment, often leading to me
            not doing it at all and hastily submitting the assignment. If
            you&apos;re a comp sci student, you&apos;ve probably been there.
          </p>
          <p className='mt-3'>
            So, I created this tool with the purpose of being a last-minute
            lifesaver. It allows you to comment your entire coding project with
            just one click before submission. Let&apos;s face it, markers
            don&apos;t have the time to go through your code line by line.
            Having comments can make all the difference, helping you score those
            crucial marks. Of course, we&apos;re all aware of the importance of
            self-documenting code, but sometimes, a little extra effort in
            commenting can go a long way.
          </p>
          <p className='mt-3'>
            In essence, this tool is a win-win situation for both you and the
            markers. It streamlines the process, making it easier for them to
            evaluate your work and, in turn, increase your chances of scoring
            higher (possibly… idk).
          </p>
          <div className='mt-3'>
            <strong>The steps are simple:</strong>
            <ul className='list-disc px-7'>
              <li>Upload your project and click on commentify.</li>
              <li>Give it a min or two (go grab a coffee till then).</li>
              <li>Download your commentified project!</li>
            </ul>
          </div>
          <div className='mt-3'>
            <strong>Limitations:</strong>
            <ul className='list-disc px-7'>
              <li>
                Supports only Java currently (will add support for more soon).
              </li>
              <li>30 source files max per project.</li>
            </ul>
          </div>
          <p className='text-xs mt-10'>
            <strong>Disclaimer:</strong> This tool is provided for educational
            and entertainment purposes only. While it aims to assist you in
            commenting your code efficiently, I am not responsible for the
            accuracy or authenticity of the generated content. Please verify the
            comments to ensure compliance with academic integrity rules.
            Remember, this tool was built as a fun project.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
