import React from "react";

const AIHistory: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-500 to-purple-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Artificial Intelligence - A Brief History</h2>
        <p className="text-lg leading-7 mb-8">
          Since the inception of the idea of artificial intelligence, many great minds have contributed to its
          development. Here are some important milestones and progressions throughout AI history:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 hover:bg-purple-500 hover:text-white transition-all duration-300">
            <h4 className="text-lg font-bold mb-4">1943 – McCulloch and Pitts introduce the first model of AI neurons</h4>
            <p className="text-base leading-6">
              Warren McCulloch and Walter Pitts wrote a paper on how neurons might work in the brain, paving the way for
              the concept of artificial neural networks.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 hover:bg-purple-500 hover:text-white transition-all duration-300">
            <h4 className="text-lg font-bold mb-4">1950 – Alan Turing’s famous test</h4>
            <p className="text-base leading-6">
              Alan Turing creates the Turing Test, which evaluates a machine’s ability to exhibit intelligent behavior
              equivalent to, or indistinguishable from, that of a human.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 hover:bg-purple-500 hover:text-white transition-all duration-300">
            <h4 className="text-lg font-bold mb-4">1951-52 – First AI program (Christopher Strachey)</h4>
            <p className="text-base leading-6">
              A checkers-playing program written by Christopher Strachey at the University of Manchester, England,
              provides one of the first examples of artificial intelligence.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 hover:bg-purple-500 hover:text-white transition-all duration-300">
            <h4 className="text-lg font-bold mb-4">1956 – The Dartmouth Conference</h4>
            <p className="text-base leading-6">
              The Dartmouth conference, organized by computer scientists John McCarthy, Marvin Minsky, Nathaniel
              Rochester and Claude Shannon, brought together researchers interested in computer learning and
              artificial intelligence.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 hover:bg-purple-500 hover:text-white transition-all duration-300">
            <h4 className="text-lg font-bold mb-4">1997 – IBM's Deep Blue defeats chess champion Garry Kasparov</h4>
            <p className="text-base leading-6">
              IBM's Deep Blue computer beats world chess champion Garry Kasparov in a six-game match, marking the first
              time a computer defeats a world chess champion in a tournament.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 hover:bg-purple-500 hover:text-white transition-all duration-300">
            <h4 className="text-lg font-bold mb-4">2011 – IBM's Watson wins on Jeopardy!</h4>
            <p className="text-base leading-6">
              IBM's Watson, a natural language processing and data analysis computer, competes on Jeopardy! and defeats
              former champions James Holzhauer and Ken Jennings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHistory;