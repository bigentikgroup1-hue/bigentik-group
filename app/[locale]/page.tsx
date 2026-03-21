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
      <LifestyleSection locale={locale} />
      
      <div className="py-32 px-6">
        {/* We use the shared CTA Section here but because it was explicitly requested by the user previously to remove its props, 
            we simply use it as is, and inject the buttons inside it via children in the next step. */}
        <CTASection locale={locale} />
      </div>
    </main>
  );
}
