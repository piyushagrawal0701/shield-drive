"use client";

import Image from "next/image";

const testimonials = [
  {
    text: "I saved over $420 a year by comparing quotes through ShieldDrive. The entire process took less than five minutes.",
    name: "Michael Johnson",
    role: "Toyota Camry Owner",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    text: "Getting multiple insurance quotes in one place was incredibly convenient. I found better coverage at a lower price.",
    name: "Sarah Williams",
    role: "Honda Civic Owner",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
  {
    text: "I switched my policy in minutes and ended up saving hundreds each year.",
    name: "David Miller",
    role: "Ford F-150 Owner",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
  },
  {
    text: "The quote process was simple, transparent, and hassle-free. Highly recommended for anyone shopping for car insurance.",
    name: "Emily Brown",
    role: "Tesla Model 3 Owner",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
  },
  {
    text: "I compared providers without filling out multiple forms. It saved me time and helped me choose the best policy.",
    name: "Jessica Martinez",
    role: "Hyundai Tucson Owner",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    text: "Excellent experience from start to finish. I received affordable quotes in minutes and switched my policy the same day.",
    name: "Robert Anderson",
    role: "Nissan Altima Owner",
    image:
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
  },
];

const rows = [
  { start: 0, end: 3, className: "animate-scroll" },
  { start: 3, end: 6, className: "animate-scroll-reverse" },
];

const Card = ({ testimonial }) => {
  return (
    <div className="w-[360px] shrink-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="#FBBF24"
          >
            <path d="M12 .587l3.668 7.431L24 9.75l-6 5.848L19.335 24 12 20.202 4.665 24 6 15.598 0 9.75l8.332-1.732L12 .587z" />
          </svg>
        ))}
      </div>

      <p className="mb-8 text-[15px] leading-7 text-slate-600">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="flex items-center gap-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={52}
          height={52}
          className="h-13 w-13 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-slate-900">
            {testimonial.name}
          </h4>
          <p className="text-sm text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollReverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scrollReverse 20s linear infinite;
        }

        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section
        id="testimonials"
        className="overflow-hidden bg-slate-50 py-20 scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1">
              <span className="text-sm font-semibold text-blue-700">
                Trusted by Thousands of Drivers
              </span>
            </div>

            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              What Our Customers Say
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Real stories from drivers who found better coverage, lower
              premiums, and a hassle-free insurance experience with
              ShieldDrive.
            </p>
          </div>

          <div className="space-y-8">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="relative overflow-hidden"
              >
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent" />

                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent" />

                <div className={`flex gap-6 ${row.className}`}>
                  {[
                    ...testimonials.slice(row.start, row.end),
                    ...testimonials.slice(row.start, row.end),
                  ].map((testimonial, index) => (
                    <Card
                      key={`${rowIndex}-${index}`}
                      testimonial={testimonial}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}