import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-green-500 to-green-600">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="xl:flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-medium text-white leading-tight sm:text-5xl md:text-6xl">
                Artificial Intelligence
              </h1>
              <p className="mt-4 text-gray-200 text-xl sm:text-2xl md:text-3xl">
                Exploring the world of AI
              </p>
            </div>
            <div className="mt-10 xl:mt-0">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src=""
                alt=""
              />
            </div>
          </div>
          <div className="md:mt-10">
            <p className="mt-3 text-gray-200 text-lg sm:text-xl md:text-2xl">
              Welcome to our one-page website dedicated to the world of Artificial Intelligence (AI).
            </p>
            <p className="mt-3 text-gray-200 text-lg sm:text-xl md:text-2xl">
              Here, you will find everything you need to know about AI, including its history and key
              milestones, core technologies such as machine learning and natural language processing,
              and real-world use cases in various industries such as healthcare and finance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;