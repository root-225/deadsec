import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const contactInfo = {
  phone: {
    text: '+225 07 89 36 31 25',
    href: 'tel:+2250789363125',
    icon: FaPhone,
    color: 'hover:text-green-500'
  },
  email: {
    text: 'root225r01@gmail.com',
    href: 'mailto:root225r01@gmail.com',
    icon: FaEnvelope,
    color: 'hover:text-blue-500'
  },
  location: {
    text: 'Abidjan, Cocody',
    href: 'https://maps.google.com/?q=Abidjan,Cocody',
    icon: FaMapMarkerAlt,
    color: 'hover:text-red-500'
  }
};

export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/karl-joseph-tiemele/',
    icon: FaLinkedin,
    color: 'hover:text-blue-500'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/root-225',
    icon: FaGithub,
    color: 'hover:text-gray-400'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/root7132_',
    icon: FaTwitter,
    color: 'hover:text-blue-400'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@root7132',
    icon: FaYoutube,
    color: 'hover:text-red-500'
  }
];
