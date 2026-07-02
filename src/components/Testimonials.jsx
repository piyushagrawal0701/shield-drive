// Testimonials.jsx
"use client";
import Image from "next/image";

const testimonials = [
  {
    text: "I saved over $420 a year by comparing quotes through ShieldDrive. The entire process took less than five minutes.",
    name: "Michael Johnson",
    role: "Toyota Camry Owner",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    text: "Getting multiple insurance quotes in one place was incredibly convenient. I found better coverage at a lower price.",
    name: "Sarah Williams",
    role: "Honda Civic Owner",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
  {
    text: "I switched my policy in minutes and ended up saving hundreds each year.",
    name: "David Miller",
    role: "Ford F‑150 Owner",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
  },
  {
    text: "The quote process was simple, transparent and hassle-free.",
    name: "Emily Brown",
    role: "Tesla Model 3 Owner",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
  },
  {
    text: "I compared providers without filling multiple forms. Huge time saver.",
    name: "Jessica Martinez",
    role: "Hyundai Tucson Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
  },
  {
    text: "Excellent experience from start to finish. Affordable coverage in minutes.",
    name: "Robert Anderson",
    role: "Nissan Altima Owner",
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
  },
];

const rows = [
  { start: 0, end: 3, className: "animate-scroll" },
  { start: 3, end: 6, className: "animate-scroll-reverse" },
];

const Card = ({ t, i }) => (
  <div key={i} className="bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 rounded-2xl p-6 shrink-0 w-[360px]">
    <div className="flex mb-4">
      {Array.from({length:5}).map((_,idx)=>(
        <svg key={idx} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24">
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.4 8.168L12 18.896l-7.334 3.856 1.4-8.168L.132 9.21l8.2-1.192z"/>
        </svg>
      ))}
    </div>
    <p className="text-slate-600 leading-7 text-[15px] mb-6">"{t.text}"</p>
    <div className="flex items-center gap-3">
      <Image src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover"/>
      <div>
        <p className="font-semibold text-slate-900">{t.name}</p>
        <p className="text-blue-600 text-sm">{t.role}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <>
      <style>{`
      @keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
      @keyframes scrollReverse{0%{transform:translateX(-50%)}100%{transform:translateX(0)}}
      .animate-scroll{animation:scroll 18s linear infinite}
      .animate-scroll-reverse{animation:scrollReverse 18s linear infinite}
      `}</style>

      <section className="bg-slate-50 py-20 px-4 scroll-mt-28 overflow-x-hidden" id="testimonials">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-blue-50 border border-blue-200 rounded-full px-4 py-1 mb-4">
              <span className="text-sm font-medium text-blue-700">Trusted by Drivers Nationwide</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">What Our Customers Are Saying</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-4">
              Thousands of drivers trust ShieldDrive to compare quotes, save money and find the right coverage.
            </p>
          </div>

          <div className="space-y-6">
            {rows.map((row,r)=>(
              <div key={r} className="relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10"/>
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10"/>
                <div className={`flex gap-6 ${row.className}`}>
                  {[...testimonials.slice(row.start,row.end),...testimonials.slice(row.start,row.end)].map((t,i)=><Card key={i} t={t} i={i}/>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
