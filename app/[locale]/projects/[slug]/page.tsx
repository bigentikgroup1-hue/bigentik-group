import React from 'react';
import { notFound } from 'next/navigation';
import { DetailHero } from '@/components/projects/DetailHero';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { ProjectOverview } from '@/components/projects/ProjectOverview';
import { InvestmentHighlights } from '@/components/projects/InvestmentHighlights';
import { FloorPlans } from '@/components/projects/FloorPlans';
import { LocationMap } from '@/components/projects/LocationMap';
import { CTASection } from '@/components/shared/CTASection';
import { getDictionary, Locale } from '@/lib/i18n';

const COMPONENT_IMAGES = {
  "the-olive-grove-estates": {
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDORmsu9MwLQR5VqB770zWBnPDpL5H9ETu64wfto-R3w1aSMtdTCNAlM9JZOArswRGo8b7Ax5XydJlR-t_dk4J4It0xmkPm1Z9W0QsluUVOauIqP3pJHgUxv_VWlZFRTlg3xLFlyasr_N6cwGmK2ZLBL0zuW6WKg-DXpv9DeM8fA1Vd2lvXUp8ebN1QKCzZNIDwVG5uW6ecSkK0IdbWroy1O4E0xHQQ_yurWtgiZBWJVVSz0AIi7FYzcGtjEPN7lK3IkEMec1WShg",
    gallery: [
      { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBwqg1hDh55ClFlAzBHQPk-g-neOsjqqiZ_UpolP-RZZk2lhnRJY697PDLvmAEJc1rNtGQUj8_GTYylOTtMTi_GU-BSPqMxW0P3xF_NXqUl_1uJkB4ju74zETkAbwgrSW6VsB8olKMHclIZooH8s9Fd13xpgM-ymxQnogU6siyRV-Ezd2BKh981kruFVQtlfDQosmuEx6LpAUZd6e0W431O---iLhiMM2rXT1mtfKhiqMPIhCeJ7VSg8cLsSvj7ACGCtoVS-QqPw" },
      { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBXUyb0hF8T9P7Uyx9XyFH7J-CR9GgpRgDqjPxOrK-gYZUBmB5v7LWzem7f4UG4t2l97-eGglCcUqZ15AJmpKfdnPcDo5trAIHsr13ZGMjvOhzZBRzWtPPQESN_nH3YAqhqLzPwvn--UFjjvBPxy9TT5sLqdrf_Hfa1cM-VAnLxywzW-anXrbC2kjXfhtWgPUUf8qQ7m-bmx1msZW2oU3cqu89aynp3_Isky1UqaQGF4ob8v-cMICVJeFGW-I6juNZGDKFveDlOg" },
      { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEsDu6JCBv_KmRuaSbrsgSLlhXyZ-o2UimzyRkOPLJavnd8Povhn41ZMhgmWsWnCdj-yQUFDQPhTkK3ZA0EPV8uZ64NoYuJO3gTlSEJwwxSwHY_ILIHIojuPRF9p-ps00fL4hVM2KtluRwJDIP9IB7qeNCM_cv_raUOTHtb-kaF6VKmt7TfKbPFlAVGyhiON0usm5m3rqYc0kcR_b_HY7LE2qpsXuGh8mgCxMjekhX_W0ntQ0kdQP8zh0gCNm4hiJPhGiR-TzC7A" }
    ]
  }
};

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.locale as Locale);
  
  const projectText = (dict.projects as any).project_data?.[resolvedParams.slug];
  const projectImg = (COMPONENT_IMAGES as any)[resolvedParams.slug];

  if (!projectText || !projectImg) {
    notFound();
  }

  const galleryMapped = projectImg.gallery.map((img: any, i: number) => ({
    url: img.url,
    category: projectText.gallery[i].category,
    title: projectText.gallery[i].title
  }));

  return (
    <main className="pt-20 bg-background">
      <DetailHero
        title={projectText.title}
        collection={projectText.collection}
        image={projectImg.hero}
      />

      <ProjectGallery images={galleryMapped} />

      <ProjectOverview
        pullQuote={projectText.overview.pullQuote}
        paragraphs={projectText.overview.paragraphs}
        specs={projectText.overview.specs}
        locale={resolvedParams.locale}
      />

      <InvestmentHighlights locale={resolvedParams.locale} />

      <FloorPlans locale={resolvedParams.locale} />

      <LocationMap locale={resolvedParams.locale} />

      <CTASection locale={resolvedParams.locale} />
    </main>
  );
}
