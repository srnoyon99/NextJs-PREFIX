"use client"
import CommonBanner from "@/components/CommonBanner"
import { Wrench, Truck, Settings, Zap, Download, Play } from 'lucide-react';
import { useState } from 'react';


const page = ({params}:any) => {
    const {id} = params
    const [selectedService, setSelectedService] = useState(0);

  const services = [
    "Restoring functionality, one repair",
    "Repairing your problems restoring",
    "Quality repair services you can",
    "Repairing with care exceeding expectations",
    "Reliable Repair",
    "Perfect Restore"
  ];

  const serviceDetails = [
    {
      icon: Wrench,
      title: "Repairing with care",
      description: "Repair is a specialized field that focuses on fixing and restoring object"
    },
    {
      icon: Truck,
      title: "Repairing with care",
      description: "Repair is a specialized field that focuses on fixing and restoring object"
    },
    {
      icon: Settings,
      title: "Repairing with care",
      description: "Repair is a specialized field that focuses on fixing and restoring object"
    },
    {
      icon: Zap,
      title: "Repairing with care",
      description: "Repair is a specialized field that focuses on fixing and restoring object"
    }
  ];
    
  return (
    <div className="bg-white">
        <CommonBanner heading="Service Details" pageName="service_details"/>
        <section className="py-16 px-6">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              {/* Service List */}
              <div className="space-y-3 mb-8">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedService(index)}
                    className={`w-full px-4 py-3 text-sm font-medium border rounded-lg transition-all text-center ${
                      selectedService === index
                        ? 'bg-orange-500 text-white border-orange-500'
                        : 'bg-white text-gray-900 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>

              {/* Contact Card */}
              <div className="relative h-80 rounded-lg overflow-hidden bg-gray-800 text-white flex flex-col justify-between p-6">
                <img
                  src=""
                  alt="Contact person"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 flex-1 flex flex-col justify-end">
                  <h3 className="text-lg font-bold mb-2">Have any Question?</h3>
                  <p className="text-sm mb-4">Contact Us</p>
                </div>

                <div className="relative z-10">
                  <p className="text-2xl font-bold mb-1">Call: 01254832</p>
                  <p className="text-sm">nafiz123@gmail.com</p>
                </div>
              </div>

              {/* Download PDF Button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 mt-8">
                <Download size={20} />
                DOWNLOAD PDF
              </button>

              {/* Orange Dot Indicator */}
              <div className="flex justify-center mt-6">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-3">
              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="/project-details.png"
                  alt="Repair service"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Title */}
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Repairing your problem restoring your peace
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed">
                Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition It involves diagnosing issues replacing faulty parts and ensuring optimal functionality. Repair services are maintaining the longevity of various products equipment and infrastructure
              </p>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {serviceDetails.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="flex gap-4 pb-6 border-b border-gray-200">
                      <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="text-white" size={32} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Section Title */}
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Bringing back the functionality you need
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-12 leading-relaxed">
                Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition It involves diagnosing issues replacing faulty parts and ensuring optimal functionality. Repair services are maintaining the longevity of various products equipment and infrastructure
              </p>

              {/* Video Section */}
              <div className="relative mb-12 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&h=500&fit=crop"
                  alt="Video thumbnail"
                  className="w-full h-96 object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <Play className="text-orange-500 group-hover:text-white ml-1" size={32} fill="currentColor" />
                  </div>
                </button>
              </div>

              {/* Final Section Title */}
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Bringing back the functionality you need
              </h2>

              {/* Final Description */}
              <p className="text-gray-600 leading-relaxed">
                Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition It involves diagnosing issues replacing faulty parts and ensuring optimal functionality. Repair services are maintaining the longevity of various products equipment and infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default page