import React from "react";

const UseCases = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8">
          Use Cases of Artificial Intelligence
        </h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="mb-4">
                <h3 className="text-lg font-bold">Healthcare</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI is being utilized in healthcare to help doctors diagnose and
                  treat diseases more accurately and efficiently than ever
                  before. From identifying potential pandemic outbreaks to
                  analyzing medical images to detect tumors, AI is revolutionizing
                  the way we think about healthcare.
                </p>
              </div>
              <a
                href="#"
                className="text-blue-600 font-bold hover:text-blue-800
                transition duration-300 ease-in-out"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="mb-4">
                <h3 className="text-lg font-bold">Finance</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI is being used to improve financial decision making and to
                  identify new investment opportunities. AI-powered chatbots are
                  also being used to improve customer service and automate tasks
                  such as underwriting and claims processing.
                </p>
              </div>
              <a
                href="#"
                className="text-blue-600 font-bold hover:text-blue-800
                transition duration-300 ease-in-out"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="mb-4">
                <h3 className="text-lg font-bold">Transportation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Self-driving cars are just the beginning of AI's impact on the
                  transportation industry. AI is also being utilized to optimize
                  logistics and supply chain management, as well as to improve
                  traffic safety and reduce congestion.
                </p>
              </div>
              <a
                href="#"
                className="text-blue-600 font-bold hover:text-blue-800
                transition duration-300 ease-in-out"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;