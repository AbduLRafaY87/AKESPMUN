import React from 'react';
import logo from '../assets/images/logo.png'; // Import the logo
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <footer className="bg-gray-100 border border-top border-white text-gray-800 ">
            <div className="container mx-auto flex flex-wrap justify-between gap-20 text-center md:text-left">
                
                {/* Column 1 - Logo & Socials */}
                <div className="flex flex-col items-start md:items-start w-auto">
                    <img src={logo} alt="AKESPMUN Logo" className="h-24 mb-4" />
                    <p className="text-md font-semibold">Model United Nations - 2025</p>
                    <p className="text-md text-gray-600">Three Years in the Making</p>
                    {/* Social Icons */}
                    <div className="mt-4 flex space-x-4">
                        <a href="#" className="p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition">
                            <FacebookIcon fontSize="medium" />
                        </a>
                        <a href="#" className="p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition">
                            <InstagramIcon fontSize="medium" />
                        </a>
                    </div>
                </div>

                {/* Column 2 - Quick Links */}
                <div className="w-auto">
                    <h3 className="font-bold text-lg text-black mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-md">
                        <li><a href="/" className="hover:text-[#C0A880]">Home</a></li>
                        <li><a href="/registrations" className="hover:text-[#C0A880]">Registration</a></li>
                        <li><a href="/committees" className="hover:text-[#C0A880]">Committees</a></li>
                        <li><a href="/contact" className="hover:text-[#C0A880]">Contact Us</a></li>
                    </ul>
                </div>

                {/* Column 3 - Contact Info */}
                <div className="w-auto">
                    <h3 className="font-bold text-lg text-black mb-4">Get in Touch</h3>
                    <p className="text-md flex items-center space-x-2">
                        📧 <a href="mailto:munik@khi.iba.edu.pk" className="hover:text-[#C0A880]">central@akesp.org</a>
                    </p>
                    <p className="text-lg flex items-center space-x-2">
                        📧 <a href="mailto:reg.munik@khi.iba.edu.pk" className="hover:text-[#C0A880]">akesp_mun_example@akesp.org</a>
                    </p>
                </div>

                {/* Column 4 - Google Maps */}
                <div className="w-auto h-60 md:h-72 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d28950.68572859206!2d67.03462468028049!3d24.90358478564277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d24.8832012!2d67.04943279999999!4m5!1s0x3eb33f6ccec4bcaf%3A0xd26e80f8eafbe7be!2sgoogle%20maps%20aga%20khan%20higher%20secondary%20school%20karachi!3m2!1d24.922750399999998!2d67.06242809999999!5e0!3m2!1sen!2s!4v1739078721772!5m2!1sen!2s"
                        width="300"
                        height="100%"
                        style={{ border: '0px solid green' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 text-center bg-white py-6 text-sm text-gray-600">
                Copyright &copy; <span className="font-bold text-black">AKESPMUN III</span> {new Date().getFullYear()}.
                All rights reserved. Designed & Developed by&nbsp;
                <span className="text-[#f7f7f7] font-bold bg-[#4169e1] px-2 py-1 rounded-md">
                    <a href="https://www.primecreators.co" target="_blank" rel="noopener noreferrer">Prime Creators</a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
