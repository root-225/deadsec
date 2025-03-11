export default function AboutPage() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 matrix-bg opacity-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold gradient-text mb-4">About Us</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We are a team of passionate technologists dedicated to helping businesses thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Our Story</h2>
            <p className="text-slate-400 mb-4">
              Founded in 2020, TechPro has been at the forefront of technological innovation. We started with a simple mission: to make cutting-edge technology accessible to businesses of all sizes.
            </p>
            <p className="text-slate-400">
              Today, we're proud to serve clients across various industries, helping them navigate the complex landscape of modern technology and digital transformation.
            </p>
          </div>
          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg opacity-20"></div>
            {/* Add your about image here */}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-800 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
              <p className="text-slate-400">
                We constantly push the boundaries of what's possible with technology.
              </p>
            </div>
            <div className="p-6 bg-slate-800 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
              <p className="text-slate-400">
                We strive for excellence in everything we do, from code quality to client service.
              </p>
            </div>
            <div className="p-6 bg-slate-800 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Integrity</h3>
              <p className="text-slate-400">
                We maintain the highest standards of integrity and transparency in our work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 