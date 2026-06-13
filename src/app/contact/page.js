import ContactCardsSection from "@/components/contact/ContactCardsSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactPastorSection from "@/components/contact/ContactPastorSection";
import ContactPrayerSection from "@/components/contact/ContactPrayerSection";
import ContactServiceLocationSection from "@/components/contact/ContactServiceLocationSection";
import ContactSocialSection from "@/components/contact/ContactSocialSection";
import FooterSection from "@/components/home/FooterSection";
import NavigationSection from "@/components/home/NavigationSection";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <NavigationSection />
      <main>
        <ContactHeroSection />
        <ContactCardsSection />
        <ContactFormSection />
        <ContactPastorSection />
        <ContactPrayerSection />
        <ContactServiceLocationSection />
        <ContactSocialSection />
      </main>
      <FooterSection />
    </div>
  );
}
