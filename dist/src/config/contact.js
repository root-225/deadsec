"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialLinks = exports.contactInfo = void 0;
var fa_1 = require("react-icons/fa");
exports.contactInfo = {
    phone: {
        text: '+225 07 89 36 31 25',
        href: 'tel:+2250789363125',
        icon: fa_1.FaPhone,
        color: 'hover:text-green-500'
    },
    email: {
        text: 'root225r01@gmail.com',
        href: 'mailto:root225r01@gmail.com',
        icon: fa_1.FaEnvelope,
        color: 'hover:text-blue-500'
    },
    location: {
        text: 'Abidjan, Cocody',
        href: 'https://maps.google.com/?q=Abidjan,Cocody',
        icon: fa_1.FaMapMarkerAlt,
        color: 'hover:text-red-500'
    }
};
exports.socialLinks = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/karl-joseph-tiemele/',
        icon: fa_1.FaLinkedin,
        color: 'hover:text-blue-500'
    },
    {
        name: 'GitHub',
        url: 'https://github.com/root-225',
        icon: fa_1.FaGithub,
        color: 'hover:text-gray-400'
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/root7132_',
        icon: fa_1.FaTwitter,
        color: 'hover:text-blue-400'
    },
    {
        name: 'YouTube',
        url: 'https://youtube.com/@root7132',
        icon: fa_1.FaYoutube,
        color: 'hover:text-red-500'
    }
];
