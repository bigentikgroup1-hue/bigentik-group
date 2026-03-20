import React from 'react';
import { HomeHero } from '@/components/home/HomeHero';
import { ValueProposition } from '@/components/home/ValueProposition';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { InvestmentBenefits } from '@/components/home/InvestmentBenefits';
import { LifestyleSection } from '@/components/home/LifestyleSection';
import { CTASection } from '@/components/shared/CTASection';

export default function HomePage() {
  return (
    <main className="bg-background">
      <HomeHero />
      <ValueProposition />
      <FeaturedProjects />
      <InvestmentBenefits />
      <LifestyleSection />
      <CTASection />
    </main>
  );
}
