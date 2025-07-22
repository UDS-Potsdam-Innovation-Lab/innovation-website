import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '../contexts/LocaleContext';
import { Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLocale();

  return (
    <footer className="bg-[#cbd6e1] text-[#0a2342] pt-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="mb-6 w-52 sm:w-60">
              <Image
                src="/images/innovation_logo.png"
                alt="German UDS Innovation Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <p className="text-sm text-[#0a2342]/90 max-w-xs">
              {String(t('footer.description'))}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">{String(t('footer.quickLinks'))}</h3>
            <ul className="space-y-3 text-sm text-[#0a2342]/90">
              <li><a href="#ecosystem" className="hover:text-orange-600 transition-colors">{String(t('navigation.ecosystem'))}</a></li>
              <li><a href="#portfolio" className="hover:text-orange-600 transition-colors">{String(t('navigation.portfolio'))}</a></li>
              <li><a href="#structure" className="hover:text-orange-600 transition-colors">{String(t('navigation.structure'))}</a></li>
              <li><a href="#business" className="hover:text-orange-600 transition-colors">{String(t('navigation.business'))}</a></li>
              <li><a href="#invest" className="hover:text-orange-600 transition-colors">{String(t('navigation.invest'))}</a></li>
            </ul>
          </div>

          {/* Investment Updates & Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">{String(t('footer.investmentUpdates'))}</h3>
            <p className="text-sm text-[#0a2342]/90 mb-6">
              {String(t('footer.stayUpdated'))}
            </p>
            <a
              href="mailto:invest@innovation.german-uds.de"
              className="inline-block bg-orange-500 text-white py-2 px-5 rounded-full hover:bg-orange-600 transition-colors text-sm font-medium mb-6"
            >
              {String(t('footer.contactUs'))}
            </a>
            <p className="text-sm text-[#0a2342]/90 mb-2">{String(t('footer.followUs'))}:</p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/german-uds/"
                className="text-[#0a2342]/90 hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/german_uds/"
                className="text-[#0a2342]/90 hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#0a2342]/15 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#0a2342]/70 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} German University of Digital Science Innovation GmbH. {String(t('footer.rights'))}
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-[#0a2342]/70 hover:text-orange-500 transition-colors text-sm">
              {String(t('footer.privacy'))}
            </Link>
            <Link href="/imprint" className="text-[#0a2342]/70 hover:text-orange-500 transition-colors text-sm">
              {String(t('footer.imprint'))}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
