import React from "react";

const Why = () => {
  return (
    <div>
      <title>Why to Choose?</title>

      <section className="p-4">
        <h1 className="text-2xl font-medium">Why Choose <em>HomeHero</em>?</h1>
        <div className="ul p-4 text-gray-600">
          <li>
            Vetted Professionals: Every service provider on our platform
            undergoes a rigorous background check and skills assessment,
            ensuring that only the most reliable and qualified experts enter
            your home or handle your projects.
          </li> <br />
          <li>
            Transparent Pricing: Say goodbye to hidden fees and surprise costs.
            We provide clear, upfront estimates and secure payment options, so
            you know exactly what you’re paying for before the work even begins.
          </li> <br />
          <li>
            Satisfaction Guaranteed: Your peace of mind is our top priority. We
            stand behind every job with a dedicated support team and a quality
            guarantee, ensuring every task is completed to your total
            satisfaction.
          </li> <br />

          <p className="text-xl pb-2">
            To give your HomeHero page even more authority, here are four
            additional, highly informative bullet points that focus on the
            technical and logistical side of your business. These are designed
            to build deep trust with your users:
          </p>

          <div className="ul text-gray-600">
            <li>
              Real-Time Tracking & Communication: Stay connected from start to
              finish with our integrated messaging system and real-time status
              updates, allowing you to track your service professional's arrival
              and progress directly through your dashboard.
            </li> <br />
            <li>
              Customized Service Matching: Our smart algorithm doesn't just find
              a pro; it matches your specific project requirements with the
              specialist whose tools, experience, and availability perfectly
              align with your unique needs.
            </li> <br />
            <li>
              Safety & Insurance Coverage: We prioritize your security by
              maintaining comprehensive insurance policies for all on-site
              projects, giving you an extra layer of protection and total peace
              of mind while we work on your property.
            </li> <br />
            <li>
              Expertly Curated Quality: We don't just host any service; we
              curate our marketplace to feature only high-demand, high-quality
              solutions, ensuring that every booking meets the "HomeHero
              Standard" of excellence and durability.
            </li>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why;
