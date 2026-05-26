import { MainHeroSection } from '@/components/home/MainHeroSection';
import { DoctorProfileSection } from '@/components/home/DoctorProfileSection';
import { ReviewSection } from '@/components/home/ReviewSection';
import { MedicineIntroSection } from '@/components/home/MedicineIntroSection';
import { BeforeAfterSection } from '@/components/home/BeforeAfterSection';
import { JinStorySection } from '@/components/home/JinStorySection';
import { EventMenuSection } from '@/components/home/EventMenuSection';
import { PrescriptionCheckSection } from '@/components/home/PrescriptionCheckSection';

export default function Home() {
  return (
    <>
      <MainHeroSection />
      <DoctorProfileSection />
      <ReviewSection />
      <MedicineIntroSection />
      <BeforeAfterSection />
      <JinStorySection />
      <EventMenuSection />
      <PrescriptionCheckSection />
    </>
  );
}
