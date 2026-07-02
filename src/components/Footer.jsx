const Footer = () => {
  return (
    <>
      
     <footer className="bg-[#0F172A] text-white pt-20 overflow-hidden sm:mx-10 mx-0 rounded-t-4xl">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-5 gap-12 border-b border-slate-800 pb-14">

      {/* Left */}
      <div className="lg:col-span-2">

        <h2 className="text-3xl font-bold">
          <span className="text-blue-500">Shield</span>Drive
        </h2>

        <p className="mt-6 text-slate-400 leading-7 max-w-md">
          ShieldDrive helps drivers compare personalized auto insurance
          quotes from trusted providers. Our goal is to make finding the
          right coverage simple, fast, and completely transparent.
        </p>

       

      </div>

      {/* Right */}
      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-10">

        <div>
          <h3 className="font-semibold mb-5 text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-slate-400">
            <li><a href="#">Home</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Benefits</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-5">
            Resources
          </h3>

          <ul className="space-y-3 text-slate-400">
            <li><a href="#">Coverage Guide</a></li>
            <li><a href="#">Insurance Tips</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-5">
            Contact
          </h3>

          <ul className="space-y-3 text-slate-400">
            <li>support@shielddrive.com</li>
            <li>+1 (800) 123-4567</li>
            <li>Available 24/7</li>
            <li>Help Center</li>
          </ul>
        </div>

      </div>

    </div>

    {/* Bottom */}
    <div className="flex flex-col md:flex-row justify-between items-center py-8 text-sm text-slate-500">
      <p>© 2026 ShieldDrive. All rights reserved.</p>
      <p>Compare smarter. Drive safer.</p>
    </div>

    {/* Background Glow */}
    <div className="relative sm:h-44 h-24 flex items-end justify-center">

    <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-xl sm:h-48 h-36 rounded-full bg-blue-600/20 blur-[170px]" />

      <h1 className="relative sm:text-[clamp(4rem,15vw,10rem)] text-[clamp(3rem,15vw,10rem)] font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.08)] select-none ">
        ShieldDrive
      </h1>

    </div>

  </div>
</footer>
     
    </>
  );
};

export default Footer;
