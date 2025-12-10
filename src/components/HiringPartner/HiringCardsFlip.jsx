const categories = [
  {
    title: "Development",
    icon: "💻",
    items: [
      { title: "Web Full Stack" },
      { title: "Full Stack with Python" },
      { title: "Full Stack With Java" },
      { title: "Full Stack With .Net" },
      { title: "Software Testing" },
    ],
  },
  {
    title: "Data Science",
    icon: "📊",
    items: [
      { title: "Data Science With AI" },
      { title: "Data Science With Generative AI" },
      { title: "Data Analytics" },
      { title: "Business Analytics" },
      { title: "Data Engineering" },
    ],
  },
  {
    title: "Networking",
    icon: "🌐",
    items: [
      { title: "Cloud Computing With Devops" },
      { title: "Salesforce Program With AI" },
      { title: "CyberSecurity with SOC" },
      { title: "CyberSecurity Analyst with SOC" },
      { title: "Advance Cloud Computing and Devops" },
    ],
  },
  {
    title: "SAP",
    icon: "🧾",
    items: [
      { title: "SAP" },
      { title: "SAP HANA" },
      { title: "SAP ABAP" },
      { title: "SAP FICO" },
      { title: "SAP MM" },
    ],
  },
 
];

const FlippingCards = () => {
  return (
    <section className="bg-black mt-10">
      <h2 className="text-2xl md:text-4xl text-center font-bold text-white mb-6">
        World-class professionals with in-demand skills in top domains
      </h2>
      <div className="flex justify-center items-center my-5">
        <div className="w-16 h-1 bg-orange-500 rounded"></div>
        <div className="w-3 h-3 bg-orange-500 rounded-full mx-2"></div>
        <div className="w-16 h-1 bg-orange-500 rounded"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:gap-6 items-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white rounded-xl p-5 w-80 shadow-lg my-4 md:my-0"
          >
            <div className="text-4xl text-center">{category.icon}</div>
            <h2 className="text-2xl font-bold mt-2 text-center text-orange-500">{category.title}</h2>
            <ul className="mt-4">
              {category.items.map((item, i) => (
                <li
                  key={i}
                  className="py-2 px-4 bg-gray-800 rounded-lg my-2 text-center text-sm transition"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlippingCards;
