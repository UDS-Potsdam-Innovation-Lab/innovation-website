import React from 'react';
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const ContactSection: React.FC = () => {
  const { t } = useLocale();
  
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-block px-4 py-1 bg-orange-100 text-orange-500 rounded-br-xl text-sm font-medium mb-4">
              {String(t('contact.subtitle'))}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {String(t('contact.title'))}
            </h2>
            <p className="text-gray-600 mb-8">
              {String(t('contact.description'))}
            </p>
            
            <div className="bg-white p-8 rounded-br-xl shadow-lg">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">{String(t('contact.innovation.title'))}</h3>
                <p className="text-gray-700 mb-4">
                  {String(t('contact.innovation.description'))}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">{String(t('contact.mission.title'))}</h3>
                <p className="text-gray-700 mb-4">
                  {String(t('contact.mission.description'))}
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-br-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">{String(t('contact.connect.title'))}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-br-lg">
                    <Mail className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{String(t('contact.connect.email.title'))}</h4>
                    <p className="text-gray-600">{String(t('contact.connect.email.value'))}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-br-lg">
                    <Phone className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{String(t('contact.connect.phone.title'))}</h4>
                    <p className="text-gray-600">{String(t('contact.connect.phone.value'))}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-br-lg">
                    <MapPin className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{String(t('contact.connect.address.title'))}</h4>
                    <p className="text-gray-600">{String(t('contact.connect.address.value'))}</p>
                  </div>
                </div>
                
                <a 
                  href="mailto:contact@germanudsinnovation.com" 
                  className="mt-6 w-full bg-orange-500 text-white py-3 rounded-br-md shadow-md hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>{String(t('contact.connect.emailButton'))}</span>
                  <ChevronRight size={18} />
                </a>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;