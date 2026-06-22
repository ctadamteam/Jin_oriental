import { MainHeroSection } from '@/components/home/MainHeroSection';
import { DoctorProfileSection } from '@/components/home/DoctorProfileSection';
import { ReviewSection } from '@/components/home/ReviewSection';
import { MedicineIntroSection } from '@/components/home/MedicineIntroSection';
import { BeforeAfterSection } from '@/components/home/BeforeAfterSection';
import { JinStorySection } from '@/components/home/JinStorySection';
import { EventMenuSection } from '@/components/home/EventMenuSection';
import { PrescriptionCheckSection } from '@/components/home/PrescriptionCheckSection';
import { InformationSection } from '@/components/home/InformationSection';
import MainPopup from '@/components/common/MainPopup';

export default function Home() {
  return (
    <>
      <MainPopup />
      <MainHeroSection />
      {/* <DoctorProfileSection /> */}
      <MedicineIntroSection />
      <ReviewSection />
      {/* <BeforeAfterSection /> */}
      <JinStorySection />
      <InformationSection />
      {/* <EventMenuSection /> */}
      {/* <PrescriptionCheckSection /> */}
    </>
  );
}
