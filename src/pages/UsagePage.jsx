import Footer from "../components/Footer";
import Header from "../components/upload-page/Header";

export default function UsagePage() {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <div className='container mx-auto'>
        <Header />
        <div className='px-7 font-body h-screen'>
          <h1 className='text-4xl font-medium mt-10 mb-5'>Usage</h1>
          <div className='text-sm w-3/4'>
            <p>
              Hi, why did I build this tool, you may ask? Well, let me share the
              backstory. As a student myself, I used to procrastinate commenting
              my code until the very last moment, often leading to me not doing
              it at all and hastily submitting the assignment. If you&apos;re a
              comp sci student, you&apos;ve probably been there.
            </p>
            <p className='mt-3'>
              So, I created this tool with the purpose of being a last-minute
              lifesaver. It allows you to comment on your entire coding project
              with just one click before submission. Let&apos;s face it, markers
              don&apos;t have the time to go through your code line by line.
              Having comments can make all the difference, helping you score
              those crucial marks. Of course, we&apos;re all aware of the
              importance of self-documenting code, but sometimes, a little extra
              effort in commenting can go a long way.
            </p>
            <p className='mt-3'>
              In essence, this tool is a win-win situation for both you and the
              markers. It streamlines the process, making it easier for them to
              evaluate your work and, in turn, increase your chances of scoring
              higher (possibly… idk).
            </p>
            <div className='mt-3'>
              <strong>The steps are:</strong>
              <ul className='list-disc px-7'>
                <li>Upload your project and click on commentify.</li>
                <li>Give it a min or two (go grab a coffe till then).</li>
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
          </div>
          <p className='text-xs w-3/4 font-body mt-16'>
            <strong>Disclaimer:</strong> This tool was built as a fun project
            for entertainment and educational purposes. It is not a substitute
            for proper coding practices or manual code review. Users are
            encouraged to exercise caution and not solely rely on automated
            commenting. The tool&apos;s effectiveness may vary, and it is
            essential to adhere to the institutions&apos;s academic
            requirements. The creator assumes no responsibility for its use or
            misuse in any academic or professional setting.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
