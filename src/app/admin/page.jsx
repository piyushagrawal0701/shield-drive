import { prisma } from "@/lib/prisma";
import {
  Users,
  Calendar,
  Car,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "Admin Dashboard",
};

export default async function AdminPage() {
  const leads = await prisma.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const today = new Date();

  const todayLeads = leads.filter((lead) => {
    const d = new Date(lead.createdAt);

    return (
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
    );
  });

  const thisMonth = leads.filter((lead) => {
    const d = new Date(lead.createdAt);

    return (
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
    );
  });

  const latestLead = leads[0];

  return (
    <>
     <main className="min-h-screen bg-slate-100 p-8">
        

      {/* Header */}

      <div className="mb-10 flex items-center justify-between max-md:flex-col max-md:gap-5">

        <div>

          <h1 className="text-4xl font-bold text-slate-900">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Manage all insurance quote requests.
          </p>

        </div>

        <div className="rounded-xl bg-blue-600 px-5 py-3 text-white shadow-lg">
          {leads.length} Total Leads
        </div>

      </div>

      {/* Stats */}

      <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500">
                Total Leads
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                {leads.length}
              </h2>

            </div>

            <div className="rounded-xl bg-blue-100 p-4">
              <Users className="text-blue-600" />
            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500">
                Today&apos;s Leads
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                {todayLeads.length}
              </h2>

            </div>

            <div className="rounded-xl bg-green-100 p-4">
              <Calendar className="text-green-600" />
            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500">
                This Month
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                {thisMonth.length}
              </h2>

            </div>

            <div className="rounded-xl bg-purple-100 p-4">
              <Car className="text-purple-600" />
            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500">
                Latest Lead
              </p>

              <h2 className="mt-2 text-xl font-semibold truncate max-w-[150px]">
                {latestLead
                  ? latestLead.firstName
                  : "--"}
              </h2>

            </div>

            <div className="rounded-xl bg-orange-100 p-4">
              <Users className="text-orange-600" />
            </div>

          </div>

        </div>

      </div>

            {/* Leads Table */}

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

        <div className="border-b border-slate-200 px-6 py-5">

          <h2 className="text-2xl font-bold text-slate-800">
            Recent Quote Requests
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            All customer submissions are displayed below.
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-slate-50">

              <tr className="text-left">

                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                  Customer
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                  Contact
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                  Location
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                  Vehicle
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                  Submitted
                </th>

              </tr>

            </thead>

            <tbody>

              {leads.map((lead) => (

                <tr
                  key={lead.id}
                  className="border-t transition hover:bg-slate-50"
                >

                  {/* Customer */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">

                        {lead.firstName.charAt(0)}
                        {lead.lastName.charAt(0)}

                      </div>

                      <div>

                        <h3 className="font-semibold text-slate-800">

                          {lead.firstName} {lead.lastName}

                        </h3>

                        <span className="text-sm text-slate-500">
                          Lead ID: {lead.id.slice(0, 8)}
                        </span>

                      </div>

                    </div>

                  </td>

                  {/* Contact */}

                  <td className="px-6 py-5">

                    <div className="space-y-2">

                      <div className="flex items-center gap-2 text-sm">

                        <Mail
                          size={15}
                          className="text-blue-600"
                        />

                        {lead.email}

                      </div>

                      <div className="flex items-center gap-2 text-sm">

                        <Phone
                          size={15}
                          className="text-green-600"
                        />

                        {lead.phone}

                      </div>

                    </div>

                  </td>

                  {/* Location */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <MapPin
                        size={16}
                        className="text-red-500"
                      />

                      <span className="font-medium">
                        {lead.zipCode}
                      </span>

                    </div>

                  </td>

                  {/* Vehicle */}

                  <td className="px-6 py-5">

                    <div className="space-y-1">

                      <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">

                        {lead.year}

                      </span>

                      <p className="font-medium">

                        {lead.make}

                      </p>

                      <p className="text-sm text-slate-500">

                        {lead.model}

                      </p>

                    </div>

                  </td>

                  {/* Date */}

                  <td className="px-6 py-5">

                    <span className="rounded-full bg-green-100 px-3 py-2 text-sm font-medium text-green-700">

                      {new Date(
                        lead.createdAt
                      ).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

                  {leads.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24">
              <Users className="mb-5 h-16 w-16 text-slate-300" />

              <h3 className="text-2xl font-semibold text-slate-700">
                No Leads Yet
              </h3>

              <p className="mt-2 max-w-md text-center text-slate-500">
                Customer quote requests will appear here once users start
                submitting the lead form.
              </p>
            </div>
          )}
        </div>
      

      {/* Footer */}

      <div className="mt-10 flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-5 md:flex-row">
        <div>
          <h3 className="font-semibold text-slate-800">
            ShieldDrive Admin
          </h3>

          <p className="text-sm text-slate-500">
            Secure dashboard for managing insurance quote requests.
          </p>
        </div>

        <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
          Total Records : {leads.length}
        </div>
      </div>

      {/* Bottom */}

      <div className="mt-12 text-center">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} ShieldDrive • Admin Dashboard
        </p>
      </div>
    </main>
    </>
   
  );
}