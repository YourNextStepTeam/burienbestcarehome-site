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
    <footer className="bg-forest text-cream border-t border-[color:var(--color-ink)]/20" role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-sage-light">About Us</h2>
            <p className="text-cream/95 leading-relaxed text-sm">
              Burien Best Care Home provides compassionate, personalized care for adults in our warm and welcoming family environment.
            </p>
            <p className="text-sage-light font-medium mt-3">Where Family Feels Like Home</p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-sage-light">Quick Links</h2>
            <nav aria-label="Footer quick links">
              <ul className="space-y-1">
                {quickLinks.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center min-h-12 px-2 py-2 -mx-2 rounded text-cream/95 hover:text-sage-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
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
            <h2 className="text-lg font-semibold mb-4 text-sage-light">Contact</h2>
            <address className="not-italic">
              <div className="text-cream/95 text-sm space-y-4">
                <div>
                  <p className="font-medium text-sage-light-light mb-1">Address</p>
                  <p>Burien, WA 98148</p>
                </div>
                <div>
                  <p className="font-medium text-sage-light-light mb-1">Phone</p>
                  <a
                    href="tel:+12065550142"
                    className="inline-flex items-center min-h-12 px-2 py-2 -mx-2 rounded hover:text-sage-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
                  >
                    (206) 555-0142
                  </a>
                </div>
                <div>
                  <p className="font-medium text-sage-light-light mb-1">Email</p>
                  <a
                    href="mailto:info@burienbestcarehome.com"
                    className="inline-flex items-center min-h-12 px-2 py-2 -mx-2 rounded break-all hover:text-sage-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
                  >
                    info@burienbestcarehome.com
                  </a>
                </div>
              </div>
            </address>
          </div>

          {/* Hours Column */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-sage-light">Hours</h2>
            <div className="text-cream/90 text-sm space-y-3">
              <div>
                <p className="font-medium text-sage-light-light">Office Hours</p>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday - Sunday: 10am - 4pm</p>
              </div>
              <div>
                <p className="font-medium text-sage-light-light">Care Services</p>
                <p>24/7 Care Available</p>
              </div>
              <div>
                <p className="font-medium text-sage-light-light">Visits Welcome</p>
                <p>Anytime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources for Families */}
        <div className="border-t border-cream/20 pt-8 mb-8">
          <h2 className="text-lg font-semibold mb-4 text-sage-light">Resources for Families</h2>
          <nav aria-label="Helpful resources">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="https://yourbestseason.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center min-h-12 px-3 py-2 rounded text-cream/95 hover:text-sage-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
                >
                  Your Best Season
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://yournextstephome.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center min-h-12 px-3 py-2 rounded text-cream/95 hover:text-sage-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
                >
                  Your Next Step Home
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
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
