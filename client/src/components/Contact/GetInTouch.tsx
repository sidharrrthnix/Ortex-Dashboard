import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

//This is a child component of Contact page. it displays the form
// for the users to contact Ortex

export default function GetInTouch() {
  return (
    <div className="relative bg-black text-theme">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-black" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 bg-metal">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight  sm:text-3xl">
              Get in touch
            </h2>
            <p className="text-white mt-3 text-lg leading-6 ">
              ORTEX brings you the most timely and accurate Short interest data
              available. ORTEX short interest data is sourced from the worlds
              largest combined pool of agent lenders, prime brokers, and
              broker-dealers who submit their inventory.
            </p>
            <dl className="mt-8 text-base ">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>110 Wall St</p>
                  <p>New York, NY 98665</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="flex-shrink-0 h-6 w-6 "
                    aria-hidden="true"
                  />
                  <span className="ml-3">+1 (212) 695 3421</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 h-6 w-6 "
                    aria-hidden="true"
                  />
                  <span className="ml-3">support@ortex.com</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base ">
              Looking for careers?{" "}
              <a href="#" className="font-medium  underline">
                View all job openings
              </a>
              .
            </p>
          </div>
        </div>
        <div className=" pt-16 pb-10 px-4 sm:px-6 lg:col-span-3 lg:pt-24 pb-10 lg:px-8 xl:pl-12 bg-header">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block bg-form w-full shadow-sm py-3 px-4 placeholder-gray-500  rounded-md"
                  placeholder="Full name"
                  style={{
                    border: "none",
                    color: "white",
                  }}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block bg-form w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Email"
                  style={{
                    border: "none",
                    color: "white",
                  }}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block bg-form w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Phone"
                  style={{
                    border: "none",
                    color: "white",
                  }}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block bg-form w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-white border border-gray-300 rounded-md"
                  placeholder="Message"
                  defaultValue={""}
                  style={{
                    border: "none",
                    color: "white",
                  }}
                />
              </div>
              <div className="flex-col justify-end">
                <button
                  type="submit"
                  className="py-3 px-6 border border-transparent shadow-sm text-white font-medium rounded-md  bg-theme hover:bg-lighttheme focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
