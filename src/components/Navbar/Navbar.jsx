"use client";
import { useState } from 'react';
import Link from 'next/link';
import {
    ChevronDown,
    Menu,
    X,
    Facebook,
    Youtube,
    Linkedin,
    Instagram,
    Briefcase,
    Calendar,
    UserPlus,
    Building2,
    Link as LinkIcon,
    CheckCircle,
    Users,
    ChevronsRight
} from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({});
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleDropdown = (index) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const navItems = [
      {
        name:"Home",
        link:''
      },
      {
        name:"Contact us",
        link:'contact-us'
      },
      {
        name:"About Us",
        link:"about-us"
      },
        {
            name: "Data Science",
            link: "#",
            submenu: [
                { name: "Data Science Courses", link: "/data-science-course-in-mumbai" },
                { name: "Data Analytics Course", link: "/data-analytics-course-in-mumbai" },
                { name: "Advanced Excel Course", link: "/Advanced-Excel-course-in-mumbai" },
                { name: "Python Course", link: "/Python-course-in-mumbai" },
                { name: "Python + SQL + Adv. Excel + Power BI", link: "/python-sql-adv-excel-power-bi-course-in-mumbai" },
                { name: "Python + Sql + Probability & statistics + DS(Machine Learning) + AI(Deep Learning) Power bi", link: "/python+sql+probability-and-statistics+ds-machine-learning-ai-deep-learning-Power-bi-course-in-mumbai" },
                { name: "Python + SQL + Advanced Excel + Power BI", link: "/python-sql-adv-excel-power-bi-course-in-mumbai" },
             ]
        },
        {
            name: "Cyber Security",
            link: "#",
            submenu: [
                { name: "CCNA + Linux + AWS", link: "/ccna-linux-aws-course-in-mumbai" },
                { name: "CCNA", link: "/ccna-course-in-mumbai" },
                { name: "CCNA + Linux + CEH", link: "/ccna-linux-ceh-course-in-mumbai" },
                { name: "Cyber Security Analyst Program", link: "/cybe-security-analyst-program-course-in-mumbai" },
                { name: "CCNA + Linux + AWS + Devops", link: "/ccna-linux-aws-devops-course-in-mumbai" },
                { name: "Salesforce ADM + DEV (PD-1+LWC)", link: "/salesforce-adm+dev-pd-1+lwc-course-in-mumbai" },
                { name: "DEVOPS", link: "/devops-course-in-mumbai" },
                { name: "Cloud Computing", link: "/cloud-computing-course-in-mumbai" },
            ]
        },
        {
            name: "Software Development",
            link: "#",
            submenu: [
                { name: "Full Stack Java", link: "/full-stack-java-course-in-mumbai" },
                { name: "Full Stack Python", link: "/full-stack-python-course-in-mumbai" },
                { name: "Software Testing", link: "/software-testing-course-in-mumbai" },
                { name: "UI UX", link: "/ui-ux-course-in-mumbai" },
                { name: "Web Full Stack", link: "/web-full-stack-course-in-mumbai" },
                { name: "Web Development", link: "/web-development-course-in-mumbai" },   
            ]
        },
        {
          name: "SAP",
          link: "#",
          submenu: [
              { name: "SAP MM S4 HANA", link: "/full-stack-java-course-in-mumbai" },
              { name: "SAP Fico S4 HANA", link: "/full-stack-python-course-in-mumbai" },
              { name: "SAP FICO", link: "/software-testing-course-in-mumbai" },
              { name: "SAP MM", link: "/ui-ux-course-in-mumbai" },
              ]
      },
      {
        name: "Language",
        link: "#",
        submenu: [
            { name: "Softskill", link: "/full-stack-java-course-in-mumbai" },
            { name: "Softskill & Personality Development", link: "/full-stack-python-course-in-mumbai" },
            { name: "German A1 and A2", link: "/software-testing-course-in-mumbai" },
            { name: "German A1", link: "/ui-ux-course-in-mumbai" },
            ]
    },
    {
      name: "HR",
      link: "#",
      submenu: [
          { name: "HR Generalist", link: "/hr-generalist-course-in-mumbai" },
             ]
  },

    ];

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50 font-sans">
            {/* Top Bar - Hidden on Mobile */}
           

            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto ">
                <div className="flex items-center justify-around h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                        <div className="relative">
                            <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
                                SevenMentor
                            </span>
                            <span className="absolute -bottom-2 right-0 text-[10px] text-gray-500 font-bold tracking-widest">PVT. LTD.</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex h-full items-center">
    {navItems.map((item, idx) => (
        <div key={idx} className="relative group h-full flex items-center">
            <Link
                href={item.link}
                className={`
                    flex items-center gap-3 px-2 h-10 rounded-md transition-all duration-300
                    font-medium text-gray-700 hover:text-white hover:bg-[#009bf5]
                    ${item.submenu ? 'group-hover:bg-[#009bf5] group-hover:text-white' : ''}
                `}
            >
                {item.name}
                {item.submenu && <ChevronDown size={14} />}
            </Link>

            {/* Dropdown Menu */}
            {item.submenu && (
                <div
                    className="overflow-hidden absolute top-full left-1/2 -translate-x-1/2 
                    w-72 bg-white shadow-xl border-t-2 border-[#009bf5] 
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                    transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 
                    z-50"
                >
                    <div className="py-2">
                        {item.submenu.map((subItem, subIdx) => (
                            <Link
                                key={subIdx}
                                href={subItem.link}
                                className="flex items-center gap-2 px-6 py-3 text-sm text-gray-600 
                                hover:text-[#009bf5] hover:bg-gray-50 transition-colors 
                                border-b border-gray-50 last:border-0"
                            >
                                <ChevronsRight size={14} className="text-orange-500" />
                                {subItem.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    ))}
</div>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden p-2 text-gray-600" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 max-h-[80vh] overflow-y-auto">
                    <div className="flex flex-col p-4">
                        {navItems.map((item, idx) => (
                            <div key={idx} className="border-b border-gray-100 last:border-0">
                                <button
                                    onClick={() => item.submenu && toggleDropdown(idx)}
                                    className="w-full py-3 px-2 font-semibold text-gray-800 flex justify-between items-center bg-gray-50 rounded mt-2 hover:bg-gray-100 transition-colors"
                                >
                                    {item.name}
                                    {item.submenu && (
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-200 ${openDropdowns[idx] ? 'rotate-180' : ''}`}
                                        />
                                    )}
                                </button>
                                {item.submenu && openDropdowns[idx] && (
                                    <div className="pl-4 pb-2 bg-white">
                                        {item.submenu.map((subItem, subIdx) => (
                                            <Link
                                                key={subIdx}
                                                href={subItem.link}
                                                className="block py-2 text-sm text-gray-600 hover:text-blue-600 flex items-center gap-2"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <ChevronsRight size={12} className="text-orange-500" />
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

