"use client";

import LeadForm from "./LeadForm";
import Image from "next/image";

const Hero = () => {
  return (
    <section className='w-full bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-grid-gradient-img.png")] bg-cover bg-center bg-no-repeat px-4 pb-10 scroll-mt-28' id="quote-form">
      <div className='w-full md:px-16 lg:px-24 xl:px-32 mx-auto flex flex-col md:flex-row items-center justify-between gap-12 sm:py-24 max-md:pb-0 max-md:pt-24' >
        
        {/* Left Content */}
        <div className='flex flex-col items-start flex-1'>
          <div className="flex items-center max-md:mx-auto gap-2 bg-blue-50 border border-blue-200 rounded-full p-1 pr-3 mt-10">
            <span className="bg-blue-600 text-white sm:text-xs text-[10px] px-3 py-1 rounded-full font-medium">
              FREE
            </span>

            <p className="flex items-center gap-2 text-blue-600 sm:text-sm text-[10px] font-medium">
              Compare quotes from top insurance providers
            </p>
          </div>

          <h1 className="text-center lg:text-left text-neutral-900 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-[700px] mt-6">
            Compare Auto Insurance Quotes & Save Up To $500 Per Year
          </h1>

          <p className="text-center lg:text-left sm:text-lg text-md text-neutral-600 max-w-[580px] mt-5">
            Get personalized auto insurance quotes in minutes. Compare rates
            from trusted providers and find the right coverage for your vehicle
            at the best possible price.
          </p>

          {/* Trust Points */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-neutral-700">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-sm max-md:px-2">
                ✓
              </div>
              <span>Licensed in all 50 states</span>
            </div>

            <div className="flex items-center gap-3 text-neutral-700">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-sm">
                ✓
              </div>
              <span>Trusted by over 1 million drivers</span>
            </div>

            <div className="flex items-center gap-3 text-neutral-700">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-sm">
                ✓
              </div>
              <span>Fast, secure and completely free quotes</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex items-center mt-10">
            <div className="flex -space-x-3 pr-4">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="customer"
                width={40}
                height={40}
                className="size-10 object-cover rounded-full border-2 border-white"
              />

              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="customer"
                width={40}
                height={40}
                className="size-10 object-cover rounded-full border-2 border-white"
              />

              <Image
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="customer"
                width={40}
                height={40}
                className="size-10 object-cover rounded-full border-2 border-white"
              />

              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
                alt="customer"
                width={40}
                height={40}
                className="size-10 object-cover rounded-full border-2 border-white"
              />
            </div>

            <div>
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="#FFB800"
                      className="mr-0.5"
                    >
                      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.4 8.168L12 18.896l-7.334 3.856 1.4-8.168L.132 9.21l8.2-1.192z" />
                    </svg>
                  ))}
              </div>

              <p className="sm:text-sm text-xs text-neutral-600 mt-1">
                Rated 4.9/5 by thousands of satisfied drivers
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full max-w-xl">
          <LeadForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;