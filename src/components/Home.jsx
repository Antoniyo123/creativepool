import React from 'react';
import { Camera, Strategy, Monitor, Heart } from 'lucide-react';

const MinimalistAgencyWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">STUDIO</h1>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-600">Home</a>
          <a href="#" className="hover:text-gray-600">About</a>
          <a href="#" className="hover:text-gray-600">Services</a>
          <a href="#" className="hover:text-gray-600">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold mb-4">CREATIVE VISION</h2>
          <div className="text-8xl text-gray-100 absolute right-20">2024</div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm mb-8">• ABOUT</h3>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-16 w-16 relative">
                <div className="absolute inset-0 border-2 border-black rounded-full"></div>
                <div className="absolute inset-2 bg-black rounded-full"></div>
              </div>
              <p className="text-gray-600">
                A creative studio focused on building exceptional digital experiences and brand identities.
                Now serving clients worldwide with innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm mb-8">• SERVICES</h3>
          <div className="grid grid-cols-4 gap-8">
            <div className="space-y-4">
              {/* <Strategy className="h-6 w-6" /> */}
              <h4 className="font-medium">Strategy</h4>
              <p className="text-sm text-gray-600">Brand strategy and digital planning</p>
            </div>
            <div className="space-y-4">
              <Monitor className="h-6 w-6" />
              <h4 className="font-medium">Design</h4>
              <p className="text-sm text-gray-600">UI/UX and visual design solutions</p>
            </div>
            <div className="space-y-4">
              <Camera className="h-6 w-6" />
              <h4 className="font-medium">Content</h4>
              <p className="text-sm text-gray-600">Photography and video production</p>
            </div>
            <div className="space-y-4">
              <Heart className="h-6 w-6" />
              <h4 className="font-medium">Growth</h4>
              <p className="text-sm text-gray-600">Marketing and brand development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm mb-8">• FEATURED NEWS</h3>
          <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="space-y-4">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100"></div>
                <h4 className="font-medium">Project Title</h4>
                <p className="text-sm text-gray-600">Creative Direction • Photography</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinimalistAgencyWebsite;