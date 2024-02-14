import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen py-12 lg:px-20 font-customFont">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl lg:text-5xl font-bold mb-8 text-center">
          ABOUT <span className="font-light">FOUNDERX</span>
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Darsheel Savla, a co-founder at PatilKaki, is a charismatic and
          creative powerhouse who infuses his passion for food, people, and
          brand building into everything he does.
        </p>
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="lg:w-1/2 lg:mr-6 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              className="w-full h-auto lg:h-full mb-8 rounded-lg"
            />
          </div>
          {/* Right Column */}
          <div className="lg:w-1/2 lg:p-12  lg:ml-6 rounded-lg bg-gray-200 p-4 text-black">
            <ul className="list-disc pl-4 text-[1.1rem]">
              <li className="mb-2">
                Master the <strong>structured approach</strong> to building a
                tech venture
              </li>
              <li className="mb-2">
                <strong>Get coached by</strong>India's top 1% founders,
                operators and investors.
              </li>
              <li className="mb-2">
                <strong>Learn by doint</strong>- Work on the actual startup
                ideas in a real-world
              </li>
              <li className="mb-2">
                <strong>Expand your network</strong> in the community of like
                minded peers
              </li>
              <li className="mb-2">
                <strong>Find your co-founder</strong> & your core team among the
                fellows and alumini.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
