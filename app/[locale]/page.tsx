import React from 'react';
import { HomeHero } from '@/components/home/HomeHero';
import { ValueProposition } from '@/components/home/ValueProposition';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { InvestmentBenefits } from '@/components/home/InvestmentBenefits';
import { LifestyleSection } from '@/components/home/LifestyleSection';
import { CTASection } from '@/components/shared/CTASection';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  return (
    <main className="bg-background">
      <HomeHero locale={locale} />
      <ValueProposition locale={locale} />
      <FeaturedProjects locale={locale} />
      <InvestmentBenefits locale={locale} />
      {/* <LifestyleSection locale={locale} /> */}

      {/* <div className="py-32 px-6"> */}
      <CTASection locale={locale} />
      {/* </div> */}
    </main>
  );
}
