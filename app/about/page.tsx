import React from 'react';

export default function AboutPage() {
  return (
    <main className="pt-20 flex-1">
      {/* Hero Section: Editorial Asymmetry */}
      <section className="relative min-h-[80vh] flex items-center px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-7 z-10">
            <span className="text-sm font-label uppercase tracking-[0.3em] text-primary mb-6 block">Nuestro Patrimonio</span>
            <h1 className="font-headline text-6xl lg:text-8xl leading-[1.1] mb-8 text-balance -tracking-wider">Definiendo el Futuro del <span className="italic text-primary">Prestigio.</span></h1>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">Bigentik Group representa un linaje de excelencia arquitectónica e inversión estratégica, seleccionada para las personas más exigentes del mundo.</p>
          </div>
          <div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover grayscale-[20%]" data-alt="Modern minimalist architectural detail showing concrete and glass" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1VttA5yrGDZHgADeWPbt1BezmdlaQxU4PTICHXzrIIcugGgkDmRgQ92Xo850c93eAk3mUTcCkbfDBDKKIQz1UDjho_EreuSY0lILFbDkBH1NH2J-hRY3dUDzzVEqGRqbDrrvW9Jw_TlGcTxUgQR17cKQV3i-cVT6eeQDB58ycxSGHm78RiC4SvebW0S9ddzfMCXjmeyhv7TVDuY9C1fEzPKlkDTRzZNlcn1VNgVr-m2RM4U0J9lLVw-hemVxzH5F5LsCsVZbA7A" alt="Modern minimalist architectural detail showing concrete and glass"/>
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 -z-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
      {/* Brand Philosophy: Tonal Layers */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-4">
              <h2 className="font-headline text-4xl leading-tight text-balance">Los Pilares de nuestra <span className="italic">Filosofía</span></h2>
            </div>
            <div className="col-span-12 lg:col-span-8 grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <span className="text-primary font-headline text-3xl italic">01.</span>
                <h3 className="text-lg font-semibold uppercase tracking-widest">Integridad Arquitectónica</h3>
                <p className="text-on-surface-variant leading-relaxed">Creemos que el espacio debe ser una extensión del carácter. Cada elemento estructural se selecciona para armonizar con su entorno natural, brindando un confort sin compromisos.</p>
              </div>
              <div className="space-y-4">
                <span className="text-primary font-headline text-3xl italic">02.</span>
                <h3 className="text-lg font-semibold uppercase tracking-widest">Legado Sostenible</h3>
                <p className="text-on-surface-variant leading-relaxed">Nuestros proyectos están construidos para generaciones. Al integrar tecnologías sostenibles avanzadas con materiales atemporales, aseguramos un valor duradero y respeto ambiental.</p>
              </div>
              <div className="space-y-4">
                <span className="text-primary font-headline text-3xl italic">03.</span>
                <h3 className="text-lg font-semibold uppercase tracking-widest">Excelencia Discreta</h3>
                <p className="text-on-surface-variant leading-relaxed">El lujo se siente más cuando es sutil. Nuestros servicios y desarrollos priorizan la privacidad, la seguridad y una experiencia operativa fluida.</p>
              </div>
              <div className="space-y-4">
                <span className="text-primary font-headline text-3xl italic">04.</span>
                <h3 className="text-lg font-semibold uppercase tracking-widest">Gestión Global</h3>
                <p className="text-on-surface-variant leading-relaxed">Con una cartera que abarca tres continentes, navegamos los mercados globales con precisión local, asegurando que los activos de nuestros clientes estén posicionados para el máximo crecimiento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Founder Story: Pull Quote Style */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
            <div className="border-l-4 border-primary pl-12 py-4">
              <blockquote className="font-headline text-3xl lg:text-4xl italic leading-relaxed text-on-surface mb-8">&quot;No nos propusimos construir la mayor cantidad de edificios; nos propusimos construir los más significativos. Bigentik trata sobre el espacio entre las paredes—la vida que sucede dentro.&quot;</blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-outline"></div>
                <div>
                  <p className="font-semibold uppercase tracking-widest text-sm">Marcus V. Bigentik</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">Fundador y Presidente</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
            <div className="aspect-square bg-surface-container overflow-hidden p-6">
              <img className="w-full h-full object-cover filter sepia-[0.2]" data-alt="Professional portrait of a founder in a modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzDw1Myxqv_y0grPDmMHFXCSUrmnwhRZj8EkU7aMfj8uwEnHIF9q7pd0HLTUPLHTPRyeNFbEPqltR2Ldu_SbB4s3j0ieXtTIOYB9QPxOnzGAVWowF1Qxf2SiOMwLtUeSoGGN_q6EcNIv8rcXJu8sD9DJ5VuKpFTOVMNv6ZRWogrqf5ZJ1s4MluXQiKNrJgH2nvC6f0TYcIed0RJj7VVLvSUj7K0-4ZV6MLV9LtyO60KBmlktmziI6IGKnlaGM3Zp-w9XOIig8piw" alt="Professional portrait of a founder in a modern office"/>
            </div>
          </div>
        </div>
      </section>
      {/* Corporate Bento Grid */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-sm font-label uppercase tracking-[0.3em] text-primary mb-4 block text-center">Nuestra Presencia</span>
            <h2 className="font-headline text-5xl text-center">Una Huella Global de <span className="italic">Confianza</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 bg-surface-container-highest p-12 flex flex-col justify-end relative overflow-hidden group">
              <img className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" data-alt="Skyline of high-end corporate buildings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0Hrd1Q1-LXyEsHGM6e0rYd4o0HSAp7EW3pdupGrsEAoOz7ThPJouPQKyxdU-fuxmkGkWJH9t7AJ_v3xbUMBI5j8OQ7PSDV0CMaaUwD2ZIYnIog58Lf4qCIiQC0qpdllNAlY_Miq8yZ1IS2lks34EktMnySqYrUnMIf0QRcHRgapidHtWx65WZJtTT53gqkI6V07OArTWq12Fv9E_Gu1xIldFMd208DTztWPAbFRVHMSrpnXbq61zlG5CHwgIQHIwchL3kqGIU8A" alt="Skyline of high-end corporate buildings"/>
              <div className="relative z-10">
                <h3 className="text-4xl font-headline mb-4">Portal de Inversión</h3>
                <p className="max-w-xs text-on-surface-variant mb-6">Acceso seguro a datos exclusivos de proyectos y métricas de rendimiento en tiempo real para nuestros socios globales.</p>
                <button className="flex items-center gap-2 font-label uppercase text-sm tracking-widest group">Entrar al Portal <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
              </div>
            </div>
            <div className="md:col-span-2 bg-primary text-on-primary p-12 flex items-center">
              <div>
                <span className="text-5xl font-headline italic mb-2 block">$4.2B+</span>
                <p className="text-sm font-label uppercase tracking-widest opacity-80">Activos Bajo Gestión</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 flex flex-col justify-center text-center">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">public</span>
              <h4 className="font-semibold uppercase text-xs tracking-widest">12 Cities</h4>
            </div>
            <div className="bg-surface-container-lowest p-8 flex flex-col justify-center text-center">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">verified</span>
              <h4 className="font-semibold uppercase text-xs tracking-widest">12 Ciudades</h4>
            </div>
          </div>
        </div>
      </section>
      {/* CTASection */}
      <section className="py-32 bg-surface">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-headline text-5xl mb-6">Experimente el Pináculo del Lujo</h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">Conéctese con nuestros especialistas para obtener detalles exclusivos del proyecto y estrategias de inversión personalizadas.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="editorial-gradient px-12 py-4 text-sm font-label uppercase tracking-[0.2em] text-on-primary shadow-lg hover:opacity-95 transition-opacity">Contáctenos</button>
            <button className="border border-outline-variant px-12 py-4 text-sm font-label uppercase tracking-[0.2em] text-on-surface hover:bg-surface-container transition-colors">WhatsApp</button>
          </div>
        </div>
      </section>
    </main>
  );
}
