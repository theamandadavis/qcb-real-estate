import HeroSection from '@/components/HeroSection';
import PerformanceSection from '@/components/PerformanceSection';
import ServicesSection from '@/components/ServicesSection';
import MissionSection from '@/components/MissionSection';
import PropertyShowcase from '@/components/PropertyShowcase';
import OwnerLeadForm from '@/components/OwnerLeadForm';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PerformanceSection />
      <ServicesSection />
      <MissionSection />
      <PropertyShowcase />
      <OwnerLeadForm />
      <FinalCTA />
    </>
  );
}
