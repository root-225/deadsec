'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-[#020617] pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] animated-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent"></div>
        <div className="absolute inset-0 matrix-bg opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <div className="relative">
          <h1 className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl mb-6 relative">
            <span className="block gradient-text relative z-10">
              Innovate. Transform.
              <span className="absolute -inset-1 bg-cyan-500/20 blur-2xl -z-10"></span>
            </span>
            <span className="block text-slate-200 relative group">
              Shape the Future
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-slate-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl relative group">
            Empowering businesses with cutting-edge solutions that drive growth and innovation. 
            Our expert team delivers tailored technology services to help you stay ahead in the digital age.
            <span className="absolute -inset-4 bg-cyan-500/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </p>
        </div>

        <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12 gap-4">
          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 rounded-md cyber-button text-cyan-400 border border-cyan-500/30 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Get Started
            <svg 
              className="ml-2 -mr-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl group-hover:opacity-75 transition-opacity duration-300"></span>
          </a>
          <a
            href="#services"
            className="group mt-3 sm:mt-0 w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 tech-border text-slate-300 hover:text-cyan-400 transform hover:scale-105 transition-all duration-300"
          >
            Learn More
            <svg 
              className="ml-2 -mr-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16 flex justify-center space-x-8 opacity-60">
          {[
            { name: 'React', viewBox: '0 0 24 24', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-10.83L14.17 12 11 15.17l1.41 1.42L17 12l-4.59-4.59L11 8.83z' },
            { name: 'Node.js', viewBox: '0 0 24 24', path: 'M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.023.185.015l1.87 1.12c.074.036.166.036.228 0l7.285-4.216c.074-.036.119-.11.119-.201v-8.428c0-.091-.045-.165-.119-.201l-7.285-4.217c-.074-.035-.166-.035-.228 0l-7.285 4.217c-.074.036-.119.11-.119.201v8.428c0 .091.045.165.119.201l1.994 1.153c1.079.54 1.76-.096 1.76-.735v-8.32c0-.119.091-.21.21-.21h.927c.119 0 .21.091.21.21v8.32c0 1.435-.788 2.258-2.149 2.258-.419 0-.749 0-1.673-.454l-1.906-1.102c-.475-.274-.772-.784-.772-1.329v-8.428c0-.545.297-1.055.772-1.329l7.285-4.217c.464-.267 1.08-.267 1.544 0l7.285 4.217c.475.274.772.784.772 1.329v8.428c0 .545-.297 1.055-.772 1.329l-7.285 4.216c-.24.128-.497.202-.772.202zm2.316-5.847c-3.185 0-3.857-.735-3.857-1.35 0-.119.091-.21.21-.21h.945c.104 0 .192.068.208.171.144.973.566 1.449 2.494 1.449 1.533 0 2.183-.348 2.183-1.164 0-.469-.187-.818-2.57-1.053-1.993-.201-3.225-.637-3.225-2.232 0-1.47 1.238-2.346 3.313-2.346 2.328 0 3.484.809 3.629 2.54.006.056-.015.109-.049.15-.034.042-.084.066-.138.066h-.946c-.098 0-.182-.07-.201-.165-.223-1.079-.801-1.426-2.295-1.426-1.692 0-1.887.59-1.887 1.031 0 .536.233.691 2.491.991 2.236.299 3.304.722 3.304 2.286 0 1.586-1.321 2.486-3.609 2.486z' },
            { name: 'TypeScript', viewBox: '0 0 24 24', path: 'M3 3h18v18H3V3zm10.819 12.015v-1.036c1.406.084 2.657-.021 3.063-.742.246-.436.176-.986-.193-1.503-.368-.517-1.109-.883-1.881-1.125-.772-.242-1.572-.404-2.259-.548-.687-.144-1.264-.27-1.627-.434-.363-.164-.513-.366-.488-.711.025-.345.249-.611.67-.798.421-.187 1.017-.294 1.696-.294.679 0 1.275.107 1.696.294.421.187.645.453.67.798h1.572c-.025-.655-.249-1.172-.67-1.552-.421-.38-1.017-.611-1.696-.694V6h-1.572v1.036c-1.406-.084-2.657.021-3.063.742-.246.436-.176.986.193 1.503.368.517 1.109.883 1.881 1.125.772.242 1.572.404 2.259.548.687.144 1.264.27 1.627.434.363.164.513.366.488.711-.025.345-.249.611-.67.798-.421.187-1.017.294-1.696.294-.679 0-1.275-.107-1.696-.294-.421-.187-.645-.453-.67-.798H8.819c.025.655.249 1.172.67 1.552.421.38 1.017.611 1.696.694V15h1.572z' },
            { name: 'Next.js', viewBox: '0 0 24 24', path: 'M11.214.006c-.052.005-.216.022-.364.033-3.408.308-6.6 2.147-8.624 4.974a11.88 11.88 0 0 0-2.118 5.243c-.096.66-.108.854-.108 1.748s.012 1.089.108 1.748c.652 4.507 3.86 8.293 8.209 9.696.779.251 1.6.422 2.533.526.364.04 1.936.04 2.299 0 1.611-.179 2.977-.578 4.323-1.265.207-.106.246-.134.218-.157-.018-.014-.896-1.193-1.95-2.62l-1.919-2.593-2.404-3.559a342.499 342.499 0 0 0-2.422-3.556c-.009-.003-.018 1.578-.023 3.51-.007 3.38-.01 3.516-.052 3.596-.06.115-.109.163-.198.193-.069.023-.198.027-.271.009-.109-.027-.172-.089-.223-.223l-.035-.093.004-4.713.004-4.713.062-.085c.082-.112.244-.205.398-.229.154-.023.464.039.601.119.07.041 1.959 2.906 4.199 6.367 2.24 3.461 4.477 6.915 4.973 7.676l.9 1.382.901-.603a11.999 11.999 0 0 0 2.372-2.023c1.143-1.295 1.97-2.762 2.476-4.387.261-.838.432-1.713.506-2.58.031-.372.038-.63.038-1.25 0-.624-.007-.872-.038-1.25-.163-1.927-.703-3.645-1.644-5.22-1.261-2.117-3.141-3.773-5.386-4.746-1.511-.65-3.144-.99-4.796-.99-.449 0-.897.017-1.116.043zm3.786 6.048c.157.032.285.123.357.25.033.057.037.215.037 1.399v1.334l1.963-.006 1.963-.007.073.037c.117.06.223.195.257.327.027.099.027.321 0 .42-.034.132-.14.267-.257.327l-.073.037-1.963-.007-1.963-.006v1.334c0 1.184-.004 1.342-.037 1.399-.072.127-.2.218-.357.25-.156.031-.454.031-.61 0-.157-.032-.285-.123-.357-.25-.033-.057-.037-.215-.037-1.399v-1.334h-3.926c-3.682 0-3.927-.002-4.002-.038a.486.486 0 0 1-.257-.326c-.027-.099-.027-.321 0-.42.034-.132.14-.267.257-.327.075-.036.32-.038 4.002-.038h3.926v-1.334c0-1.184.004-1.342.037-1.399.072-.127.2-.218.357-.25.156-.031.454-.031.61 0z' },
          ].map((tech) => (
            <div
              key={tech.name}
              className="group relative transform hover:scale-110 transition-transform duration-300"
            >
              <svg
                className="w-8 h-8 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300"
                viewBox={tech.viewBox}
                fill="currentColor"
              >
                <path d={tech.path} />
              </svg>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20"></div>
      </div>
      
      <div className="relative w-full h-64 sm:h-72 md:h-96 mt-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-gradient z-0"></div>
        <div className="absolute inset-0 matrix-bg opacity-20"></div>
        <Image
          src="/tech-hero.jpg"
          alt="Modern technology visualization"
          fill
          className="object-cover mix-blend-luminosity"
          priority
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
} 