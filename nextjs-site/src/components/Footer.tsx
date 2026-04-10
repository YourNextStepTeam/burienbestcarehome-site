import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/contact', label: 'Schedule a Visit' },
  ];

  return (
    <footer className="bg-forest text-cream border-t-4 border-sage">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sage">About Us</h3>
            <p className="text-cream/90 leading-relaxed text-sm">
              Burien Best Care Home provides compassionate, personalized care for adults in our warm and welcoming family environment.
            </p>
            <p className="text-sage font-medium mt-3">Where Family Feels Like Home</p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sage">Quick Links</h3>
            <nav aria-label="Quick links">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cream/90 hover:text-sage transition-colors focus:outline-none focus:ring-2 focus:ring-sage rounded px-1 py-0.5 inline-block min-w-12 min-h-12 flex items-center"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sage">Contact</h3>
            <address className="not-italic">
              <div className="text-cream/90 text-sm space-y-3">
                <div>
                  <p className="font-medium text-sage">Address</p>
                  <p>Burien, WA 98148</p>
                </div>
                <div>
                  <p className="font-medium text-sage">Phone</p>
                  <Link
                    href="tel:+12065550142"
                    className="hover:text-sage transition-colors focus:outline-none focus:ring-2 focus:ring-sage rounded px-1 py-0.5 inline-block min-w-12 min-h-12 flex items-center"
                  >
                    (206) 555-0142
                  </Link>
                </div>
                <div>
                  <p className="font-medium text-sage">Email</p>
                  <Link
                    href="mailto:info@burienbestcarehome.com"
                    className="hover:text-sage transition-colors break-all focus:outline-none focus:ring-2 focus:ring-sage rounded px-1 py-0.5 inline-block min-w-12 min-h-12 flex items-center"
                  >
                    info@burienbestcarehome.com
                  </Link>
                </div>
              </div>
            </address>
          </div>

          {/* Hours Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sage">Hours</h3>
            <div className="text-cream/90 text-sm space-y-3">
              <div>
                <p className="font-medium text-sage">Office Hours</p>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday - Sunday: 10am - 4pm</p>
              </div>
              <div>
                <p className="font-medium text-sage">Care Services</p>
                <p>24/7 Care Available</p>
              </div>
              <div>
                <p className="font-medium text-sage">Visits Welcome</p>
                <p>Anytime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources for Families */}
        <div className="border-t border-cream/20 pt-8 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-sage">Resources for Families</h3>
          <nav aria-label="Helpful resources">
            <ul className="flex flex-wrap gap-4">
              <li>
                <Link
                  href="https://yourbestseason.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/90 hover:text-sage transition-colors focus:outline-none focus:ring-2 focus:ring-sage rounded px-2 py-1 inline-block min-w-12 min-h-12 flex items-center"
                >
                  Your Best Season
                </Link>
              </li>
              <li>
                <Link
                  href="https://yournextstephome.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/90 hover:text-sage transition-colors focus:outline-none focus:ring-2 focus:ring-sage rounded px-2 py-1 inline-block min-w-12 min-h-12 flex items-center"
                >
                  Your Next Step Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Licensing */}
        <div className="border-t border-cream/20 pt-8 mb-8">
          <p className="text-cream/80 text-sm leading-relaxed">
            Licensed by Washington State Department of Social and Health Services (DSHS). Bonded and Insured.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-forest/80 border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-cream/70 text-sm">
            Copyright &copy; {currentYear} Burien Best Care Home. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
