import React, { useState } from 'react';

const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
  };

  return (
    <div className="bg-white text-gray-900">
      <div className="container mx-auto px-6 py-12">
        <section className="mb-10">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-6"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#0077b6] mb-6">Welcome to the VoltEdge Help Center</h2>
          <p className="text-lg mb-8">
            Here you can find answers to common questions, guides on using the platform, and resources to help you make the most of VoltEdge.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-[#0077b6] mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4 text-left">
            <details className="p-4 border border-gray-200 rounded-lg">
              <summary className="text-lg text-[#0077b6] cursor-pointer">How do I add my energy consumption data?</summary>
              <p className="mt-2">
                Navigate to the <a href="/energy-usage" className="text-[#00b4d8] hover:underline">Energy Usage</a> page and fill in the energy form with your latest consumption data.
              </p>
            </details>
            <details className="p-4 border border-gray-200 rounded-lg">
              <summary className="text-lg text-[#0077b6] cursor-pointer">How are energy recommendations generated?</summary>
              <p className="mt-2">
                Our recommendations are based on your past energy consumption and other energy-efficient strategies. Visit the <a href="/recommendations" className="text-[#00b4d8] hover:underline">Recommendations</a> page for details.
              </p>
            </details>
            <details className="p-4 border border-gray-200 rounded-lg">
              <summary className="text-lg text-[#0077b6] cursor-pointer">How can I update my profile information?</summary>
              <p className="mt-2">
                Go to the <a href="/profile" className="text-[#00b4d8] hover:underline">Profile</a> page, where you can update your personal information, energy goals, and preferences.
              </p>
            </details>
            <details className="p-4 border border-gray-200 rounded-lg">
              <summary className="text-lg text-[#0077b6] cursor-pointer">What are the benefits of using energy-efficient recommendations?</summary>
              <p className="mt-2">
                Energy-efficient recommendations can help you save money on your utility bills, reduce your carbon footprint, and create a more sustainable lifestyle.
              </p>
            </details>
            <details className="p-4 border border-gray-200 rounded-lg">
              <summary className="text-lg text-[#0077b6] cursor-pointer">How do I contact customer support?</summary>
              <p className="mt-2">
                You can contact our support team directly via the live chat option or send us an email at <a href="mailto:support@sandileenergies.com" className="text-[#00b4d8] hover:underline">support@sandileenergies.com</a>.
              </p>
            </details>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-[#0077b6] mb-4">Interactive Tutorial</h3>
          <p className="text-lg mb-4">
            New to VoltEdge? Start an interactive tour to learn how to manage your energy consumption and understand the platform.
          </p>
          <button className="bg-[#0077b6] text-white px-6 py-3 rounded-md hover:bg-[#00b4d8] transition">
            Start Tutorial
          </button>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-[#0077b6] mb-4">Need Help?</h3>
          <p className="text-lg mb-4">Our support team is here to help you! Chat with us live for quick assistance.</p>
          <button className="bg-[#0077b6] text-white px-6 py-3 rounded-md hover:bg-[#00b4d8] transition">
            Chat with Support
          </button>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-[#0077b6] mb-4">Give Us Your Feedback</h3>
          <p className="text-lg mb-4">We value your feedback. Let us know how we can improve your experience with VoltEdge.</p>
          <form className="space-y-4" onSubmit={handleFeedbackSubmit}>
            <textarea className="w-full p-4 border border-gray-300 rounded-md" placeholder="Your feedback here..." rows={4}></textarea>
            <button className="bg-[#0077b6] text-white px-6 py-3 rounded-md hover:bg-[#00b4d8] transition" type="submit">
              Submit Feedback
            </button>
          </form>
          {feedbackSubmitted && (
            <p className="mt-4 text-green-600">Thank you! Your feedback has been submitted.</p>
          )}
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-[#0077b6] mb-4">Join Our Community</h3>
          <p className="text-lg mb-4">
            Connect with other VoltEdge users, share your experiences, and learn new energy-saving techniques.
          </p>
          <a href="/community-forum" className="text-[#00b4d8] hover:underline">Go to Community Forum</a>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-[#0077b6] mb-4">Troubleshooting Wizard</h3>
          <p className="text-lg mb-4">
            Having issues? Use our troubleshooting wizard to quickly resolve common problems.
          </p>
          <button className="bg-[#0077b6] text-white px-6 py-3 rounded-md hover:bg-[#00b4d8] transition">
            Start Troubleshooting
          </button>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-[#0077b6] mb-4">Success Stories</h3>
          <p className="text-lg mb-4">
            See how other users have optimized their energy usage and saved costs with VoltEdge.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                "VoltEdge helped me reduce my energy consumption by 15% in just two months. The recommendations were easy to follow and effective!"
              </p>
              <p className="font-semibold text-[#0077b6]">- Jane D.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                "The platform’s insights into my energy usage made me aware of peak hours, which helped me cut costs significantly."
              </p>
              <p className="font-semibold text-[#0077b6]">- Alex R.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                "I love how VoltEdge's personalized recommendations helped me create an energy-efficient home. I've noticed a real difference in my energy bills."
              </p>
              <p className="font-semibold text-[#0077b6]">- Maria K.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpPage;
