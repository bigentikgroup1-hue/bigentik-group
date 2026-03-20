import React from 'react';

export const LifestyleSection = () => {
  return (
    <section className="relative py-40 overflow-hidden bg-on-surface text-background">
      <div className="absolute inset-0 opacity-40">
        <img 
          className="w-full h-full object-cover" 
          alt="Sophisticated evening lifestyle at a private club" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa-KA6_e16REMvNTBjXIcTCE9H_kFryISiClJvQwWD1wOXA9W3Sm5fhYagMrhyd-njzasGUM92byCq5bHtbNNjMVS90CCCnX0HO41w2BWpe7ZradO2Aa61_fxSeQFKQXb72ajMQ9dMwLATvoHshYuBCLZaPvDV5OX-QHx34AeWwsIz6c-wTmwgAoFNqQ9_dPkuGCdKU84dIGgfF8DerSej5a1aQHBr5Up3XYN2vQ3YfsHVBYaDTYtdZAifIUZrzldvDbWQDFM6ZQ"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-headline text-6xl leading-tight mb-8">
            Más Allá del <br/><span className="italic text-primary-fixed">Umbral.</span>
          </h2>
          <div className="pl-8 border-l border-primary-fixed/30 space-y-8">
            <p className="text-xl text-background/80 italic font-headline">
              &quot;Bigentik no solo está construyendo casas; están construyendo el futuro del estilo de vida de Samaná, donde el lujo se encuentra en el silencio y la naturaleza.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container overflow-hidden">
                <img 
                  alt="Portrait of an investor" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLavd-1E6RHh041tbo3eyzetoZhU3HADIBk8BA2xRa1-ip5rK0YyiozvtDYvuha6u-6Z8Crz016vaBFu2GDdmOgpaNbMlDpELdXBgHtUKyi9odza1p5H1PRLIC2pHsQq41kimz9gfqkKU-NBChahLwHF3JZTqbYrWic8gjqgvmpqeJ8jDMJPWXUG-3wt1d12TEXExQmD7uZdMibdxTHFIC4iID6PY8TDRQCH80bG99Fm6BYme1mdPqHbIDbt5tv43yuo9lcZwEAQ"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold">Julian V. Rosseau</p>
                <p className="text-[10px] uppercase tracking-widest text-primary-fixed/60">
                  Inversionista de Cartera
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-surface/5 backdrop-blur-md p-8 border border-white/10">
            <h4 className="font-headline text-3xl mb-2">300+</h4>
            <p className="text-[10px] uppercase tracking-widest text-background/60">
              Propiedades Entregadas
            </p>
          </div>
          <div className="bg-surface/5 backdrop-blur-md p-8 border border-white/10 mt-12">
            <h4 className="font-headline text-3xl mb-2">$500M+</h4>
            <p className="text-[10px] uppercase tracking-widest text-background/60">
              Activos Gestionados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
