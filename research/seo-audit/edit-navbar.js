const edit = require('./edit');

const desktopLink = (href, label, extra = '') => `            <Link
              href="${href}"
              className={\`font-sans font-semibold transition-all duration-300 rounded-full whitespace-nowrap shrink-0 ${extra}\${
                scrolled
                  ? 'px-2.5 py-1 text-[13px]'
                  : 'px-3.5 py-1.5 text-[14px]'
              } \${
                isActive('${href}') ? 'bg-royal-blue text-white shadow-sm shadow-royal-blue/15' : 'text-slate-700 hover:bg-slate-100/80 hover:text-royal-blue'
              }\`}
            >
              ${label}
            </Link>`;

const mobileLink = (href, label) => `            <Link
              href="${href}"
              onClick={() => setIsOpen(false)}
              className={\`font-bold text-[16px] py-3 border-b border-slate-100 transition-colors duration-300 \${
                isActive('${href}') ? 'text-royal-blue font-bold' : 'text-slate-900 hover:text-royal-blue'
              }\`}
            >
              ${label}
            </Link>`;

edit('components/layout/Navbar.tsx', [
  // Desktop
  [`              Real Estate
            </Link>

            <Link
              href="/about"`, `              Developers
            </Link>

${desktopLink('/channel-partners', 'Channel Partners', 'hidden xl:inline-block ')}

            <Link
              href="/about"`],
  [`              href="/case-studies"
              className={\`font-sans`, `              href="/playbooks"
              className={\`font-sans`],
  [`                isActive('/case-studies') ? 'bg-royal-blue text-white shadow-sm shadow-royal-blue/15' : 'text-slate-700 hover:bg-slate-100/80 hover:text-royal-blue'
              }\`}
            >
              Case Studies`, `                isActive('/playbooks') ? 'bg-royal-blue text-white shadow-sm shadow-royal-blue/15' : 'text-slate-700 hover:bg-slate-100/80 hover:text-royal-blue'
              }\`}
            >
              Playbooks`],
  // Mobile
  [`              Real Estate
            </Link>

            {/* 3. Locations Accordion */}`, `              For Developers
            </Link>

${mobileLink('/channel-partners', 'For Channel Partners')}

            {/* 3. Locations Accordion */}`],
  [`            {/* 3. Locations Accordion */}
            <div className="flex flex-col border-b border-slate-100 pb-2">
              <button
                onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                aria-expanded={mobileLocationsOpen}
                aria-controls="mobile-locations-list"
                className="flex items-center justify-between w-full font-bold text-slate-900 text-[16px] py-3 focus:outline-none"
              >
                <span>Locations</span>
                <ChevronDown
                  className={\`w-5 h-5 transition-transform duration-200 text-slate-500 \${mobileLocationsOpen ? 'rotate-180' : ''}\`}
                  aria-hidden="true"
                />
              </button>

              <div
                id="mobile-locations-list"
                className={\`overflow-hidden flex flex-col pl-4 gap-1 mt-1 border-l-2 border-slate-100 transition-all duration-200 \${
                  mobileLocationsOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }\`}
              >
                {locationLinks.map((loc, index) => (
                  <Link
                    key={index}
                    href={loc.href}
                    onClick={() => setIsOpen(false)}
                    className={\`flex items-center gap-2 py-2.5 text-[14px] \${
                      isActive(loc.href) ? 'text-royal-blue font-bold' : 'text-slate-600 hover:text-royal-blue'
                    }\`}
                  >
                    <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{loc.name}</span>
                  </Link>
                ))}
              </div>
            </div>

`, ``],
  [`              href="/case-studies"
              onClick={() => setIsOpen(false)}
              className={\`font-bold text-[16px] py-3 border-b border-slate-100 transition-colors duration-300 \${
                isActive('/case-studies') ? 'text-royal-blue font-bold' : 'text-slate-900 hover:text-royal-blue'
              }\`}
            >
              Case Studies`, `              href="/playbooks"
              onClick={() => setIsOpen(false)}
              className={\`font-bold text-[16px] py-3 border-b border-slate-100 transition-colors duration-300 \${
                isActive('/playbooks') ? 'text-royal-blue font-bold' : 'text-slate-900 hover:text-royal-blue'
              }\`}
            >
              Playbooks`],
  [`  const locationLinks = [
    { name: 'Delhi', href: '/contact' },
    { name: 'Noida', href: '/contact' },
    { name: 'Greater Noida', href: '/contact' },
  ];

`, ``],
]);
