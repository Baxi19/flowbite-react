import type { FC } from 'react';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Footer } from '../../lib/components/Footer';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const FooterPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default Footer',
      code: (
        <Footer>
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <Footer.LinkGroup className="mt-3 flex-wrap items-center text-sm sm:mt-0">
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      ),
    },
    {
      title: 'Footer with logo',
      code: (
        <Footer className="flex flex-col">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />

            <Footer.LinkGroup className="mt-3 flex-wrap items-center text-sm sm:mt-0">
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        </Footer>
      ),
    },
    {
      title: 'Footer with social media icons',
      code: (
        <Footer className="flex flex-col">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="https://flowbite.com"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                name="Flowbite"
                className="m-6"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">About</h2>
                <Footer.LinkGroup className="flex-col">
                  <Footer.Link className="mb-4" href="#">
                    Flowbite
                  </Footer.Link>
                  <Footer.Link className="mb-4" href="#">
                    Tailwind CSS
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
                <Footer.LinkGroup className="flex-col">
                  <Footer.Link className="mb-4" href="#">
                    Gihub
                  </Footer.Link>
                  <Footer.Link className="mb-4" href="#">
                    Discord
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
                <Footer.LinkGroup className="flex-col">
                  <Footer.Link className="mb-4" href="#">
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link className="mb-4" href="#">
                    Terms &amp; Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" className="text-gray-400 hover:text-gray-900" icon={BsFacebook} />
              <Footer.Icon href="#" className="text-gray-400 hover:text-gray-900" icon={BsInstagram} />
              <Footer.Icon href="#" className="text-gray-400 hover:text-gray-900" icon={BsTwitter} />
              <Footer.Icon href="#" className="text-gray-400 hover:text-gray-900" icon={BsGithub} />
              <Footer.Icon href="#" className="text-gray-400 hover:text-gray-900" icon={BsDribbble} />
            </div>
          </div>
        </Footer>
      ),
    },
    {
      title: 'Footer sitemap links',
      code: (
        <Footer className="flex flex-col bg-gray-800">
          <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-400">Company</h2>
              <Footer.LinkGroup className="flex-col">
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  About
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Careers
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Brand Center
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>
              <Footer.LinkGroup className="flex-col">
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Discord Server
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Twitter
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Facebook
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Contact Us
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-400">Legal</h2>
              <Footer.LinkGroup className="flex-col">
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Licensing
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>
              <Footer.LinkGroup className="flex-col">
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  iOS
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Android
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Windows
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  MacOS
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright className="text-gray-300" href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" className="text-gray-400 hover:text-white" icon={BsFacebook} />
              <Footer.Icon href="#" className="text-gray-400 hover:text-white" icon={BsInstagram} />
              <Footer.Icon href="#" className="text-gray-400 hover:text-white" icon={BsTwitter} />
              <Footer.Icon href="#" className="text-gray-400 hover:text-white" icon={BsGithub} />
              <Footer.Icon href="#" className="text-gray-400 hover:text-white" icon={BsDribbble} />
            </div>
          </div>
        </Footer>
      ),
    },
  ];
  return <DemoPage examples={examples} />;
};
export default FooterPage;
