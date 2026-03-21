'use client';

import { usePathname, useRouter } from 'next/navigation';

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  
  // Ex: pathname = /es/contact
  const currentLocale = pathname.split('/')[1] || 'es';

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    let newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    
    // In case there was no locale prefix for some reason
    if (newPath === pathname && !pathname.startsWith(`/${currentLocale}`)) {
        newPath = `/${newLocale}${pathname === '/' ? '' : pathname}`;
    }
    
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 border border-outline-variant/30 rounded-full p-1 bg-surface/50 backdrop-blur-md">
      {['es', 'en', 'fr'].map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          className={`text-[9px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full transition-colors ${
            currentLocale === loc 
              ? 'bg-primary text-on-primary shadow-sm' 
              : 'text-on-surface/60 hover:text-primary hover:bg-white/50'
          }`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
};
