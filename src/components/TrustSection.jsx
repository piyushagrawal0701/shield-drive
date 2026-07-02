export default function TrustedSection() {
  return (
    <>
      <section className="py-20 px-4 scroll-mt-28 overflow-x-hidden" id="benefits">
        <h2 className="text-4xl font-semibold text-center text-slate-900">
          Why Drivers Trust ShieldDrive
        </h2>

        <p className="text-slate-500 text-center mt-4 max-w-2xl mx-auto">
          We&apos;re committed to making auto insurance shopping simple, transparent,
          and stress-free. Compare quotes from trusted providers and find the
          coverage that&apos;s right for you.
        </p>

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-0 pt-20">
          <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-blue-50"></div>

          {/* Card 1 */}
          <div className="py-10 border-b border-gray-200 md:py-0 md:border-r md:border-b-0 md:px-10">
            <div className="size-12 flex items-center justify-center bg-blue-50 border border-blue-200 rounded-xl">
              <span className="text-2xl">🛡️</span>
            </div>

            <div className="mt-5 space-y-2">
              <h3 className="text-lg font-semibold text-slate-800">
                Licensed & Trusted
              </h3>

              <p className="text-sm text-slate-500 leading-6">
                We work with trusted insurance providers licensed across all 50
                states, giving you confidence in every quote you receive.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="py-10 border-b border-gray-200 md:py-0 lg:border-r md:border-b-0 md:px-10">
            <div className="size-12 flex items-center justify-center bg-blue-50 border border-blue-200 rounded-xl">
              <span className="text-2xl">💰</span>
            </div>

            <div className="mt-5 space-y-2">
              <h3 className="text-lg font-semibold text-slate-800">
                Save More Every Year
              </h3>

              <p className="text-sm text-slate-500 leading-6">
                Compare multiple insurance providers in one place and discover
                competitive rates that could save you hundreds each year.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="py-10 md:py-0 md:px-10">
            <div className="size-12 flex items-center justify-center bg-blue-50 border border-blue-200 rounded-xl">
              <span className="text-2xl">⚡</span>
            </div>

            <div className="mt-5 space-y-2">
              <h3 className="text-lg font-semibold text-slate-800">
                Fast & Secure Quotes
              </h3>

              <p className="text-sm text-slate-500 leading-6">
                Complete a simple form in under two minutes and receive
                personalized quotes while keeping your information safe and
                encrypted.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}