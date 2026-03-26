'use client';

import { useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Ex: pathname = /es/contact
  const currentLocale = pathname.split('/')[1] || 'es';

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    let newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);

    // In case there was no locale prefix for some reason
    if (newPath === pathname && !pathname.startsWith(`/${currentLocale}`)) {
      newPath = `/${newLocale}${pathname === '/' ? '' : pathname}`;
    }

    startTransition(() => {
      router.push(newPath);
    });
  };

  const locales = ['es', 'en', 'fr'];

  return (
    <>
      {/* PC View (Sliding Hover) */}
      <div className={`hidden lg:flex group items-center border border-outline-variant/30 rounded-full p-1 bg-surface/50 backdrop-blur-md transition-all duration-300 ${isPending ? 'opacity-70 pointer-events-none' : ''}`}>
        <div className="flex items-center pl-2 pr-1">
          {isPending ? (
            <span className="material-symbols-outlined text-[14px] text-primary animate-spin">sync</span>
          ) : (
            <span className="material-symbols-outlined text-[14px] text-on-surface/80 group-hover:text-primary transition-colors">public</span>
          )}
        </div>
        <div className="flex items-center">
          {/* Selected Locale */}
          <div className="text-[9px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full bg-primary text-on-primary shadow-sm pointer-events-none">
            {currentLocale}
          </div>

          {/* Other Locales - Slide Reveal */}
          <div className="flex overflow-hidden max-w-0 opacity-0 group-hover:max-w-[150px] group-hover:opacity-100 group-hover:pl-1 transition-all duration-500 ease-in-out">
            <div className="flex items-center gap-1">
              {locales.filter(l => l !== currentLocale).map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocaleChange(loc)}
                  className="text-[9px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full text-on-surface/60 hover:text-primary hover:bg-white/50 transition-colors shrink-0 cursor-pointer"
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View (Static All-Visible) */}
      <div className={`flex lg:hidden items-center gap-1 border border-outline-variant/30 rounded-full p-1 bg-surface/50 backdrop-blur-md transition-all duration-300 ${isPending ? 'opacity-50 pointer-events-none' : ''}`}>
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={`text-[9px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full transition-colors flex items-center justify-center ${currentLocale === loc
              ? 'bg-primary text-on-primary shadow-sm'
              : 'text-on-surface/60 hover:text-primary hover:bg-white/50'
              }`}
          >
            {isPending && currentLocale === loc ? (
              <span className="material-symbols-outlined text-[10px] animate-spin mr-1">sync</span>
            ) : null}
            {loc}
          </button>
        ))}
      </div>
    </>
  );
};
