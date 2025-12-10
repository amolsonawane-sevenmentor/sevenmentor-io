"use client";

const courses = [
  { title: "Networking" },
  { title: "Software Development" },
  { title: "HR" },
  { title: "Hadoop/Python" }
];


const PlacementGlory = () => {
  return (
    <section className="bg-black py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-100">Our Placement Success</h2>
      <div className="flex justify-center items-center mt-2">
        <div className="w-16 h-1 bg-orange-500 rounded"></div>
        <div className="w-3 h-3 bg-orange-500 rounded-full mx-2"></div>
        <div className="w-16 h-1 bg-orange-500 rounded"></div>
      </div>

      <p className="text-gray-100 mt-2 max-w-7xl mx-auto md:text-lg">
        We provide 100% job guarantee courses with hands-on training and real-world projects. Join us and kickstart your career!
      </p>
      <p className="text-gray-100 mt-2 max-w-7xl mx-auto md:text-lg">
      SevenMentor Placement Glory as Best Job Placement in Pune

SevenMentor is an emerging organization that aims to provide end to end integrated placement solutions. Believes in understanding the requirements of industries and to fulfill them with highly qualified talent within a cultural context of the hiring organization because SevenMentor believes that every hire should work with the company for a long tenure and contribute handsomely to its business growth with our continuous efforts. SevenMentors, solemnly enclave more than 1500+ students per year. Our placement assistance team covered up by top recruiters, high qualified MBA professionals and experienced HR which manages the entire recruiting process from initial job profiling to on-boarding of new hires, including staff, technology, method, and reporting. Our groomed students have proven their skills in all interviews and delivered 100% on company requirements which help them to start their career feasibly here we have enlisted the students who studied at SevenMentor and got placed in different companies and Organisations.
      </p>

    </section>
  );
};

export default PlacementGlory;
