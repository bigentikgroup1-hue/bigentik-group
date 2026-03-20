import React from 'react';

export const GlobalOffices = () => {
  return (
    <section className="bg-surface-container-low py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-4xl mb-4">Nuestra Presencia</h2>
          <p className="font-body text-on-surface-variant max-w-xl">
            Ubicados estratégicamente en los mercados más dinámicos del mundo para servir
            a nuestra clientela global con experiencia local.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 aspect-[21/9] bg-surface-variant relative overflow-hidden">
            <img
              alt="Mapa que muestra las ubicaciones en Londres, Dubái y Singapur"
              className="w-full h-full object-cover grayscale opacity-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl33jWkoWt9cHAsDqFnnYYmBSgcMJ9MwrcPeBvq-GYXs65RaUsJ8ECH5THoN9ZPbC4NBW9Nbzu_Jwcrbe3QgsEuHIRBUuxkQMdJ7XQx5yrqaFaFAlCVTb0LjeixxXBmXHHBN_ji4xkeVuSrD13vz3HTyU0uW_XjPv7J4xxYEQ-BJJhqmEZMraFZdoxzk_KutrhupAUo2nOW-EozfMvvCjioHMpLqXSijQaZMgMRRKCcedmRGXAKcHN0PiXUFJkW-0qxu226jQTwA"
            />
            <div className="absolute inset-0 bg-primary/5"></div>
          </div>
          <div className="space-y-12">
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-primary mb-4">
                Londres
              </h4>
              <p className="font-body text-sm leading-relaxed">
                Ubicados estratégicamente en los mercados más dinámicos del mundo para servir
                a nuestra clientela global con experiencia local.
              </p>
            </div>
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-primary mb-4">
                Dubái
              </h4>
              <p className="font-body text-sm leading-relaxed">
                Ubicados estratégicamente en los mercados más dinámicos del mundo para servir
                a nuestra clientela global con experiencia local.
              </p>
            </div>
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-primary mb-4">
                Singapur
              </h4>
              <p className="font-body text-sm leading-relaxed">
                Ubicados estratégicamente en los mercados más dinámicos del mundo para servir
                a nuestra clientela global con experiencia local.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
