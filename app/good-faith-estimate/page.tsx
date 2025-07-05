export default function GoodFaithEstimate() {
  return (
    <section className="bg-[#f5f1ee] py-16 px-4"> {/* beige background */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Good Faith Estimate</h1>
        <p className="text-gray-700 leading-relaxed">
          Effective January 1, 2022, a ruling went into effect called the “No Surprises Act,” which requires mental health practitioners to provide a “Good Faith Estimate” (GFE) about out-of-network care to any patient who is uninsured or who is insured but does not plan to use their insurance benefits to pay for health care items and/or services.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          The Good Faith Estimate works to show the cost of items and services that are reasonably expected for your mental health care needs for an item or service. The estimate is based on information known at the time the estimate was created. The Good Faith Estimate does not include any unknown or unexpected costs that may arise during treatment.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          You are entitled to receive this “Good Faith Estimate” of what the charges could be for psychotherapy services provided to you. While it is not possible for a psychotherapist to know, in advance, how many psychotherapy sessions may be necessary or appropriate for a given person upon the initiation of psychotherapy, an estimate of the cost of services will be provided. Your total cost of services will depend upon the number of psychotherapy sessions you attend, your individual circumstances, and the type and amount of services that are provided to you. This estimate is not a contract and does not obligate you to obtain any services.
        </p>

        {/* Footer details */}
        <div className="mt-12 border-t pt-6 text-sm text-gray-600 space-y-2 text-center">
          <p className="font-semibold">Dr. Serena Blake, PsyD (Clinical Psychologist)</p>
          <p>
            <span className="font-semibold">Location:</span> 1287 Maplewood Drive, Los Angeles, CA 90026
          </p>
          <p>
            <span className="font-semibold">Contact:</span> Phone: (323) 555-0192 | Email: <a href="mailto:serena@blakepsychology.com" className="underline text-[#BFA28A]">serena@blakepsychology.com</a>
          </p>
          <div className="space-x-4 mt-2">
            <a href="/" className="hover:underline">Home</a>
            <a href="/good-faith-estimate" className="hover:underline">Good Faith Estimate</a>
            <a href="#" className="hover:underline">Client Portal</a>
          </div>
          <p>© 2025 Dr. Serena Blake, PsyD (Clinical Psychologist). All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
