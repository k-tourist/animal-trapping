import React from 'react';

const TermsOfService = () => {
  const terms = [
    'All work is scheduled and paid for ahead of time.',
    'Traps need to be checked daily, either by us or by the homeowner.',
    'Any lost/stolen traps from your property will be billed.',
    'Any and all exclusion add-ons are priced from the job site.',
    '$25 fee for releasing non-target animals and resetting trap. (Neighbors Cat, etc)'
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Terms of Service Agreement</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <ul className="space-y-4">
          {terms.map((term, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              {term}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TermsOfService; 