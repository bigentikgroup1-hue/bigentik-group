import React from 'react';
import { ProjectCard } from '@/components/shared/ProjectCard';

const featuredProjects = [
  {
    title: "The Azure Reserve",
    description: "Santuario de 6 Dormitorios con vistas al océano de 270°.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAI8kxirptCUc7Vx_M4sKz6Uyt_dtHZWi9fXHDAy8lH3zBSwLLyQM8VuVnZZh2kj1JyW3aKEUBXnLM0fvni1WrHYbHvMzkoasvNhr-6-bPvAp58iyHqnXfiI_7_BeXWq64pyBChza_hkuVnvx884IYruPlk8FVnKbNURbHeCYp0KtS0s1VWS-LGz9WBrjs76CAvFJ5nQLkkHd3DHXxBOnWsqIcnEJmNcbGSUDsw8FDaPc_3Ltsn9QBiUcmmYK-RWIBoLrGnjuS6Wg",
    location: "Las Terrenas, Samaná",
    status: "Disponible"
  },
  {
    title: "Terrenas Heights",
    description: "Residencias en Condominio con diseño contemporáneo y vistas panorámicas.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkYyL6-cIGSk9T9o2oGpoIlrZaC08tP1ayfDVti6PxuRuGCSyi0uA7TObcWbk_ydRiZTaeOOk9p7e8-xC89H2Da3HHCDSe2yGQZ6fsBPizJ8YrI5OEmhVdn5g0gwop6HjevUg_cuCWVEstfL0qbgMMQakR50u5OSRmgf3HsyxXtPA57f45VP4xpXvvzvuaHeY5DxqzdLLZTOlS1bcV0HE4s6IkSO1kVTjQKpNUsJj_hCu5jTo3Dvkz3Tp5dkQGzWsmmol-b6u1yQ",
    location: "Las Terrenas, Samaná",
    status: "En Construcción"
  },
  {
    title: "Playa Estela",
    description: "Fincas Frente al Mar integradas perfectamente en el ecosistema tropical.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Du46wLKJpq9gtUGic9srSD9rxFHQyEiUjk4Fgfd2I-h4Pm4YMONWqA9XjosJnsB774kaP9tT4rDfMPstoSWHufAglKVGqQh8pNB24yKiVS1CNBEEUiXd-GYjH8kGhQOB2w7up0z5A0FTngNQCFSewjIQT_Jal8WL29wCJ0pnH4v6fiKUcj7cQOKEvn0u7eOmZNWg9g4S9m4OL3DzxirRxe5Vqfu8s1WRN94dOZQMp72s1Uiy5pVLYWMg_8lZR7uAu81v6P4dJA",
    location: "Las Terrenas, Samaná",
    status: "Vendido"
  }
];

export const FeaturedProjects = () => {
  return (
    <section className="bg-surface-container-low pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold">Portafolio Distintivo</span>
            <h2 className="font-headline text-5xl mt-4">Obras Maestras Actuales</h2>
          </div>
          <button className="text-xs uppercase tracking-widest font-bold border-b-2 border-primary pb-2">
            Ver Todos los Desarrollos
          </button>
        </div>
      </div>

      <div className="w-full relative">
        {featuredProjects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            image={project.image}
            location={project.location}
            status={project.status as any}
            link={`/projects/${project.title.toLowerCase().replace(/ /g, '-')}`}
          />
        ))}
      </div>
    </section>
  );
};
