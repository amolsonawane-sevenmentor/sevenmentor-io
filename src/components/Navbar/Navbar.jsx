"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        { name: "Home", link: "/" },
        { name: "About", link: "/about-us" },
        { name: "Contact", link: "/contact-us" },
        {
            name: "Courses",
            link: "#",
            submenu: [
                { name: "Cyber Security Course", link: "/cyber-security-course-in-mumbai" },
                { name: "Ethical Hacking", link: "/ethical-hacking-training-in-mumbai" },
                { name: "Security Operations Center Course", link: "/security-operations-center-course-in-mumbai" },
                { name: "CHFI Course", link: "/chfi-course-in-mumbai" },
                { name: "WAPT Course", link: "/wapt-course-in-mumbai" },
                { name: "Cyber Security Analyst Course", link: "/cyber-security-analyst-course-in-mumbai" },
            ]
        },
    ];



    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50 font-sans">
            {/* Top Bar - Hidden on Mobile */}




            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-0">
                        {/* Logo Image */}
                        <Image
                            src="/assets/sevenMLogo.webp"
                            alt="SevenMentor Logo"
                            width={50}
                            height={50}
                            className="w-10 h-10 md:w-12 md:h-12 object-contain"
                        />
                        {/* Logo Text */}
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
                                        flex items-center gap-1 px-4 h-10 rounded-md transition-all duration-300
                                        font-medium text-gray-700 hover:text-white hover:bg-[#009bf5]
                                        ${item.submenu ? 'group-hover:bg-[#009bf5] group-hover:text-white' : ''}
                                    `}
                                >
                                    {item.name}
                                    {item.submenu && <ChevronDown size={14} />}
                                </Link>



                                {/* Dropdown Menu */}
                                {item.submenu && (
                                    <div className="absolute top-full left-0 w-80 bg-white shadow-xl border-t-2 border-[#009bf5] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                                        <div className="py-2">
                                            {item.submenu.map((subItem, subIdx) => (
                                                <Link
                                                    key={subIdx}
                                                    href={subItem.link}
                                                    className="flex items-center gap-2 px-6 py-3 text-sm text-gray-600 hover:text-[#009bf5] hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                                                >
                                                    <ChevronsRight size={14} className="text-orange-500 flex-shrink-0" />
                                                    <span className="break-words">{subItem.name}</span>
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
                                {item.submenu ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(idx)}
                                            className="w-full py-3 px-2 font-semibold text-gray-800 flex justify-between items-center bg-gray-50 rounded mt-2 hover:bg-gray-100 transition-colors"
                                        >
                                            {item.name}
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform duration-200 ${openDropdowns[idx] ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        {openDropdowns[idx] && (
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
                                    </>
                                ) : (
                                    <Link
                                        href={item.link}
                                        className="block py-3 px-2 font-semibold text-gray-800 bg-gray-50 rounded mt-2 hover:bg-gray-100 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
