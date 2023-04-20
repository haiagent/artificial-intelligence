import React from "react";

const Technologies: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-500 to-purple-500">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Core AI Technologies
        </h2>
        <p className="text-xl text-white leading-relaxed mb-12">
          Artificial intelligence is powered by many advanced technologies. Here
          are a few:
        </p>
        <div className="flex justify-center space-x-16">
          <div className="max-w-xs">
            <h3 className="text-3xl font-bold mb-4">Machine Learning</h3>
            <p className="text-lg leading-relaxed mb-4">
              Machine learning is a process that allows the software to train
              and learn from data to make more accurate predictions or decisions
              without explicit programming.
            </p>
          </div>
          <div className="max-w-xs">
            <h3 className="text-3xl font-bold mb-4">Deep Learning</h3>
            <p className="text-lg leading-relaxed mb-4">
              Deep learning, a specialized form of machine learning, uses
              artificial neural networks to draw on vast amounts of data to
              identify patterns and insights.
            </p>
          </div>
          <div className="max-w-xs">
            <h3 className="text-3xl font-bold mb-4">Natural Language Processing</h3>
            <p className="text-lg leading-relaxed mb-4">
              Natural Language Processing, uses algorithms to understand and
              interpret human language for text and speech processing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;