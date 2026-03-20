import React from 'react';
import { notFound } from 'next/navigation';
import { DetailHero } from '@/components/projects/DetailHero';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { ProjectOverview } from '@/components/projects/ProjectOverview';
import { InvestmentHighlights } from '@/components/projects/InvestmentHighlights';
import { FloorPlans } from '@/components/projects/FloorPlans';
import { LocationMap } from '@/components/projects/LocationMap';
import { CTASection } from '@/components/shared/CTASection';

// Mock Data representing our CMS or backend
const projects = [
  {
    slug: "the-olive-grove-estates",
    title: "The Olive Grove Estates",
    collection: "Colección Signature",
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDORmsu9MwLQR5VqB770zWBnPDpL5H9ETu64wfto-R3w1aSMtdTCNAlM9JZOArswRGo8b7Ax5XydJlR-t_dk4J4It0xmkPm1Z9W0QsluUVOauIqP3pJHgUxv_VWlZFRTlg3xLFlyasr_N6cwGmK2ZLBL0zuW6WKg-DXpv9DeM8fA1Vd2lvXUp8ebN1QKCzZNIDwVG5uW6ecSkK0IdbWroy1O4E0xHQQ_yurWtgiZBWJVVSz0AIi7FYzcGtjEPN7lK3IkEMec1WShg",
      gallery: [
        {
          url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBwqg1hDh55ClFlAzBHQPk-g-neOsjqqiZ_UpolP-RZZk2lhnRJY697PDLvmAEJc1rNtGQUj8_GTYylOTtMTi_GU-BSPqMxW0P3xF_NXqUl_1uJkB4ju74zETkAbwgrSW6VsB8olKMHclIZooH8s9Fd13xpgM-ymxQnogU6siyRV-Ezd2BKh981kruFVQtlfDQosmuEx6LpAUZd6e0W431O---iLhiMM2rXT1mtfKhiqMPIhCeJ7VSg8cLsSvj7ACGCtoVS-QqPw",
          category: "Espacios Interiores",
          title: "Salón de la Residencia Principal"
        },
        {
          url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBXUyb0hF8T9P7Uyx9XyFH7J-CR9GgpRgDqjPxOrK-gYZUBmB5v7LWzem7f4UG4t2l97-eGglCcUqZ15AJmpKfdnPcDo5trAIHsr13ZGMjvOhzZBRzWtPPQESN_nH3YAqhqLzPwvn--UFjjvBPxy9TT5sLqdrf_Hfa1cM-VAnLxywzW-anXrbC2kjXfhtWgPUUf8qQ7m-bmx1msZW2oU3cqu89aynp3_Isky1UqaQGF4ob8v-cMICVJeFGW-I6juNZGDKFveDlOg",
          category: "Espacios Interiores",
          title: "Cocina y Comedor"
        },
        {
          url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEsDu6JCBv_KmRuaSbrsgSLlhXyZ-o2UimzyRkOPLJavnd8Povhn41ZMhgmWsWnCdj-yQUFDQPhTkK3ZA0EPV8uZ64NoYuJO3gTlSEJwwxSwHY_ILIHIojuPRF9p-ps00fL4hVM2KtluRwJDIP9IB7qeNCM_cv_raUOTHtb-kaF6VKmt7TfKbPFlAVGyhiON0usm5m3rqYc0kcR_b_HY7LE2qpsXuGh8mgCxMjekhX_W0ntQ0kdQP8zh0gCNm4hiJPhGiR-TzC7A",
          category: "Exteriores",
          title: "Terraza Principal"
        }
      ]
    },
    overview: {
      pullQuote: "Un diálogo arquitectónico entre el paisaje virgen del Mediterráneo y la precisión del diseño minimalista contemporáneo.",
      paragraphs: [
        "Ubicado en el corazón del valle recuperado, The Olive Grove Estates representa el proyecto residencial más ambicioso de Bigentik Group hasta la fecha. Cada estructura está orientada para maximizar la luz natural manteniendo la eficiencia térmica de la construcción tradicional basada en la tierra.",
        "La paleta es un reflejo directo del entorno circundante, incorporando piedra caliza pulida con chorro de arena, roble envejecido y nuestros exclusivos acabados de bronce en tonos oliva."
      ],
      specs: {
        area: "14,500 m²",
        completion: "Q4 2025",
        units: "12 Villas Privadas",
        location: "Western Ridge"
      }
    }
  }
];

// Note: In Next.js App Router, dynamic params are passed as a Promise. 
// We export the page component as async resolving those params.
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-20 bg-background">
      <DetailHero
        title={project.title}
        collection={project.collection}
        image={project.images.hero}
      />

      <ProjectGallery images={project.images.gallery} />

      <ProjectOverview
        pullQuote={project.overview.pullQuote}
        paragraphs={project.overview.paragraphs}
        specs={project.overview.specs}
      />

      <InvestmentHighlights />

      <FloorPlans />

      <LocationMap />

      <CTASection />
    </main>
  );
}
