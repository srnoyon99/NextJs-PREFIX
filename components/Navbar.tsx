"use client"
import { useState } from 'react';
import { ChevronDown, Menu, X, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (menu: any) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const menuItems = [
        { label: 'HOME', href: '/' },
        { label: 'ABOUT US', href: 'about', hasDropdown: false },
        {
            label: 'SERVICES', href: '#', hasDropdown: true,
            subMenu: [
                { label: 'SERVICES', href: "/services" },
                { label: 'SERVICES DETAILS', href: "/services/1" },

            ]
        },
        {
            label: 'PROJECTS', href: '#', hasDropdown: true,
            subMenu: [
                { label: 'PROJECTS', href: "/project" },
                { label: 'PROJECTS DETAILS', href: "/project/1" },
            ]
        },
        {
            label: 'BLOG', href: '#', hasDropdown: true,
            subMenu: [
                { label: 'BLOG', href: "/blog" },
                { label: 'BLOG DETAILS', href: "/blog/1" },
            ]
        },
        {
            label: 'PAGE', href: '#', hasDropdown: true,
            subMenu: [
                { label: 'PRICING', href: "/pricing" },
                { label: 'ERROR', href: "/error" },
            ]
        },
        { label: 'CONTACT', href: 'contact', hasDropdown: false },
    ];

    return (
        <header className=''>
            {/* Top Bar */}
            <div className=" bg-orange-500 text-white text-sm">
                <div className="container px-6 py-3 flex items-center justify-between flex-wrap gap-4">
                    {/* Left Section */}
                    <div className="flex items-center gap-6 flex-wrap">
                        <div className="flex items-center gap-2">
                            <Mail size={16} />
                            <a href="mailto:info@example.com" className="hover:text-orange-100">info@example.com</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>6391 Elgin St. Celina, 10299</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>Sunday - Friday: 9 am - 8 pm</span>
                        </div>
                    </div>

                    {/* Right Section - Social Icons */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-orange-100">
                            <Facebook size={16} />
                        </a>
                        <a href="#" className="hover:text-orange-100">
                            <Instagram size={16} />
                        </a>
                        <a href="#" className="hover:text-orange-100">
                            <Twitter size={16} />
                        </a>
                        <a href="#" className="hover:text-orange-100">
                            <Linkedin size={16} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <Link href={"/"} className="flex items-center gap-2 shrink-0">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <img src="/logo.svg" alt="logo" />
                        </div>
                        <span className="text-2xl font-bold text-gray-900">PixFix</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-1">
                        {menuItems.map((item) => (
                            <div key={item.label} className="relative group">
                                <Link href={item.href}
                                    className="px-4 py-2 text-gray-700 font-semibold text-sm hover:text-orange-500 transition-colors flex items-center gap-1 group-hover:text-orange-500"
                                >
                                    {item.label}
                                    {item.hasDropdown && <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />}
                                </Link>

                                {/* Dropdown */}
                                {item.hasDropdown && (
                                    <div
                                        className="
                                            absolute left-0 top-full
                                            w-48 bg-white rounded-md shadow-lg
                                            opacity-0 invisible
                                            group-hover:opacity-100 group-hover:visible
                                            transition-all duration-200
                                            py-2 z-50
                                            "
                                    >
                                        {item.subMenu?.map((subItem, index) => (
                                            <Link
                                                key={index}
                                                href={subItem.href}
                                                className="
                                                    block px-4 py-2 text-gray-700 text-sm
                                                    hover:bg-orange-50 hover:text-orange-500
                                                    transition-colors
                                                    "
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <MessageCircle size={20} className="text-orange-500" />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-600">Need help?</span>
                                <span className="font-bold text-gray-900">(307) 555-0133</span>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-gray-900"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-200">
                        <div className="px-6 py-4 space-y-2">
                            {menuItems.map((item) => (
                            <div key={item.label} className="relative group">
                                <Link href={item.href}
                                    className="px-4 py-2 text-gray-700 font-semibold text-sm hover:text-orange-500 transition-colors flex items-center gap-1 group-hover:text-orange-500"
                                >
                                    {item.label}
                                    {item.hasDropdown && <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />}
                                </Link>

                                {/* Dropdown */}
                                {item.hasDropdown && (
                                    <div
                                        className="
                                            absolute left-0 top-full
                                            w-48 bg-white rounded-md shadow-lg
                                            opacity-0 invisible
                                            group-hover:opacity-100 group-hover:visible
                                            transition-all duration-200
                                            py-2 z-50
                                            "
                                    >
                                        {item.subMenu?.map((subItem, index) => (
                                            <Link
                                                key={index}
                                                href={subItem.href}
                                                className="
                                                    block px-4 py-2 text-gray-700 text-sm
                                                    hover:bg-orange-50 hover:text-orange-500
                                                    transition-colors
                                                    "
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                            {/* Mobile Help Section */}
                            <div className="px-4 py-3 mt-4 border-t border-gray-200">
                                <div className="flex items-center gap-2">
                                    <MessageCircle size={20} className="text-orange-500" />
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-600">Need help?</span>
                                        <span className="font-bold text-gray-900">(307) 555-0133</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}