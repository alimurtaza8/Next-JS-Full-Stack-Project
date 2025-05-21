import React from 'react';
import BlogPost from '@/components/ui/BlogPost';
// import Link from 'next/link';
import Link from 'next/link';
// import Eczema from '@/app/treatments/eczema/page';

const AllAboutHayfeverPage: React.FC = () => {
  // Mock data for related articles
  const relatedArticles = [
    
    {
      id: '1',
      title: 'Eczema Triggers and How to Avoid Them',
      category: 'Skin',
      imageUrl: '/images/blog/blog_page_2.webp',
      link: '/blog/eczema-triggers-and-how-to-avoid-them'
    },
    {
      id: '2',
      title: 'An Introduction to Weight Loss Injections for Effective Results',
      category: 'Weight Loss',
      imageUrl: '/images/blog/blog_page_1.webp',
      link: '/blog/weight-loss-injections'
    },
    {
      id: '3',
      title: 'Jet Lag Remedies for Frequent UK Travelers',
      category: 'Sleep Aid',
      imageUrl: '/images/blog/blog_page_3.webp',
      link: '/blog/jet-lag-remedies-for-frequent-uk-travellers'
    },
    {
      id: '4',
      title: 'Essiential Guide to Premature Ejaculation Treatments..',
      category: 'Sexual Health',
      imageUrl: '/images/blog/blog_page_4.webp',
      link: '/blog/essential-guide-to-premature-ejaculation-treatments-in-the-uk'
    },
    {
      id: '5',
      title: 'Complete Guide to Using Mounjaro for Weight Management',
      category: 'Weight Loss',
      imageUrl: '/images/blog/blog_page_5.webp',
      link: '/blog/complete-guide-to-using-mounjaro-for-weight-management'
    }

  ];


  const blogContent = (
  <>
    <h2 className="text-3xl font-semi-bold text-black mt-10 mb-5">What is Hayfever?</h2>
    <p className="mb-5 text-gray-800">
      Hayfever is an allergic response triggered by pollen and other microscopic particles. It causes sneezing, itching, and a runny nose. Many people in the UK experience this condition, especially when pollen levels are high.
    </p>

    <h2 className="text-3xl font-semi-bold text-black mt-12 mb-5">Common Allergens in the UK</h2>
    <p className="mb-5 text-gray-800">
      Common allergens include tree, grass, and weed pollen. Pollen is abundant in parks and rural areas. As stated by the NHS, these allergens can linger in the air, making hayfever symptoms more intense when you spend time outdoors.
    </p>

    <h2 className="text-3xl font-semi-bold text-black mt-12 mb-5">Why Hayfever is Widespread</h2>
    <p className="mb-5 text-gray-800">
      The UK&apos;s temperate climate encourages extensive plant growth. Mild winters allow plants to release pollen across longer periods. This leads to a higher chance of exposure for residents at home. The wind also spreads these particles over wide areas.
    </p>
    <p className="mb-5 text-gray-800">
      You might notice sneezing, blocked nasal passages, and itchy eyes. Some people also develop headaches or a scratchy throat. When these symptoms persist, everyday activities can become challenging, particularly during high pollen counts in spring and summer.
    </p>

    <h2 className="text-2xl font-semi-bold text-black mt-12 mb-5">Home Remedies for Relief</h2>
    <p className="mb-5 text-gray-800">
      Many individuals find relief through simple changes at home. Nasal rinses can remove irritants from your nasal passages, reducing congestion. You can purchase saline solutions or make your own by mixing salt and warm water.
    </p>
    <p className="mb-5 text-gray-800">
      Closing windows when pollen counts are high keeps particles out. Showering and changing clothes after outdoor activities helps reduce allergen buildup. Dusting surfaces and vacuuming regularly can also limit contact with pollen that sneaks into your living space.
    </p>

    <h2 className="text-2xl font-semi-bold text-black mt-12 mb-5">Air Purifiers</h2>
    <p className="mb-5 text-gray-800">
      An air purifier with a high efficiency particulate air filter can trap pollen. This device circulates indoor air, capturing airborne irritants. Placing one in your bedroom or living area could lessen nighttime congestion and help you breathe more comfortably.
    </p>

    <h2 className="text-2xl font-semi-bold text-black mt-12 mb-5">Antihistamines</h2>
    <p className="mb-5 text-gray-800">
      Antihistamines limit the body&apos;s reaction to allergens. When pollen enters your system, your immune cells release histamine, triggering inflammation. Antihistamines block this process. They are often taken once a day and can reduce sneezing, itching, and a runny nose.
    </p>

    <h2 className="text-2xl font-semi-bold text-black mt-12 mb-5">Fexofenadine for Hayfever</h2>
    <p className="mb-5 text-gray-800">
      Fexofenadine is a popular antihistamine used by many patients in the UK. It is known for minimal drowsiness compared to some older medications. You can take it with water, and it starts working quickly to ease your discomfort.
    </p>
    <p className="mb-5 text-gray-800">
      Many people choose Fexofenadine for daytime symptom control. NHS resources mention that second generation antihistamines, such as Fexofenadine, may offer targeted support without severe sedation. Ask your pharmacist if it is appropriate for your situation.
    </p>

    <h2 className="text-2xl font-semi-bold text-black mt-12 mb-5">Nasal Sprays</h2>
    <p className="mb-5 text-gray-800">
      Nasal sprays help reduce swelling in the nasal passages. They target congestion directly. Some sprays contain corticosteroids that ease inflammation, while others release saline to flush away pollen. You may feel relief within a few days of consistent use.
    </p>
    <p className="mb-5 text-gray-800">
      It is important to follow guidelines on how and when to spray. Pointing the nozzle away from the septum may prevent irritation. Pharmacists advise patients to read the instructions carefully to avoid any complications or side effects.
    </p>

    <h2 className="text-2xl font-semi-bold text-black mt-12 mb-5">Journey Health’s Online Pharmacy</h2>
    <p className="mb-5 text-gray-800">
      Journey Health is an online pharmacy serving patients across the UK. You can browse treatments from your home and select the option that suits your needs. Our website provides safe and legitimate resources for hayfever, including prescription and over the counter medications.
    </p>
    <p className="mb-5 text-gray-800">
      By ordering online, you avoid travelling to a physical location. This can be helpful when symptoms are intense, or your schedule is busy. Journey Health ensures that advice and support are always available, so you can receive timely guidance.
    </p>

    <h2 className="text-2xl font-semi-bold text-black mt-12 mb-5">Accessing Allergy Medications</h2>
    <p className="mb-5 text-gray-800">
      The process begins with a simple online consultation. A healthcare professional reviews your details to confirm that Fexofenadine or another treatment is right for you. You then receive the medication at your address without the need to wait in a queue.
    </p>
    <p className="mb-5 text-gray-800">
      Patients often appreciate the privacy and flexibility that an online service provides. You can request refills or seek extra guidance whenever you need. These features offer reassurance, especially for those with demanding schedules or limited mobility.
    </p>

    <h2 className="text-2xl font-semi-bold text-black mt-12 mb-5">Avoiding Allergy Triggers</h2>
    <p className="mb-5 text-gray-800">
      You can track daily pollen forecasts to plan outdoor activities. Wearing sunglasses may protect your eyes from airborne irritants. Some people stay inside on days with a high pollen index. Keep an eye on local weather reports for updates.
    </p>
    <p className="mb-5 text-gray-800">
      Keeping pets groomed might also help, since pollen can attach to their fur. Brushing them outside can reduce the amount that enters your home. Washing bedding more frequently is another step that can keep allergens from building up indoors.
    </p>

    <h2 className="text-2xl font-semi-bold text-black mt-12 mb-5">Benefits of Professional Advice</h2>
    <p className="mb-5 text-gray-800">
      Healthcare professionals offer personalised recommendations. A pharmacist can evaluate your symptoms and medical history. This ensures that your chosen treatment is safe. They can also suggest lifestyle changes to complement medication, such as diet tips or additional avoidance strategies.
    </p>

    <h2 className="text-2xl font-semi-bold text-black mt-12 mb-5">Practical Tips at a Glance</h2>
    <ul className="list-disc list-inside mb-5 text-gray-800">
      <li>Shower and change clothes after going outside</li>
      <li>Keep windows closed on high pollen days</li>
      <li>Use an air purifier to trap particles</li>
      <li>Rinse your nasal passages with saline</li>
      <li><Link href="/treatments/hayfever" className="text-blue-700">Start your consultation</Link></li>
    </ul>
  </>
);


  return (
    <BlogPost
      title="All About Hayfever and How to Alleviate Symptoms"
      featuredImage="/images/blog/blog_2.webp"
      content={blogContent}
      relatedArticles={relatedArticles}
    />
  );
};

export default AllAboutHayfeverPage;