import React from 'react';
import BlogPost from '@/components/ui/BlogPost';
// import Link from 'next/link';
import Link from 'next/link';
// import Eczema from '@/app/treatments/eczema/page';

const EczemaTriggersPage: React.FC = () => {
  // Mock data for related articles
  const relatedArticles = [
    
    {
      id: '1',
      title: 'All About Hayfever and How to Alleviate Symptoms',
      category: 'Hayfever',
      imageUrl: '/images/blog/blog_2.webp',
      link: '/blog/all-about-hayfever-and-how-to-alleviate-symptoms'
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
    <h2 className="text-3xl font-semi-bold text-black mt-10 mb-5">Eczema and Everyday Irritants</h2>
    <p className="mb-5 text-gray-800">
      Many people in the United Kingdom experience eczema flare ups that disrupt daily life and cause discomfort. Everyday irritants, such as harsh soaps and strong cleaning products, can strip natural oils from your skin and increase vulnerability to irritation (NHS).
    </p>
    <p className="mb-5 text-gray-800">
      Cold weather and indoor heating contribute further to dry, cracked skin. Low temperatures reduce moisture levels while central heating creates a dry atmosphere that exacerbates symptoms. Sensitive skin can react strongly to environmental stress, leading to frequent flare ups rapidly.
    </p>
    <p className="mb-5 text-gray-800">
      Certain fabrics, including wool and synthetic blends, may cause additional irritation when they rub against delicate skin. Testing new clothing on a small skin patch can help you determine if a fabric triggers redness or itchiness (British Association of Dermatologists). This simple test provides valuable insight before you fully commit to wearing the garment on busy days.
    </p>
    <p className="mb-5 text-gray-800">
      Harsh soaps and cleaning products are known irritants for sensitive skin. They remove the natural moisture that protects your skin barrier. Using gentle fragrance free cleansers helps maintain hydration and reduces the likelihood of developing inflamed, itchy patches (NHS) effectively.
    </p>

    <h2 className="text-3xl font-semi-bold text-black mt-12 mb-5">Gentle Skincare for Sensitive Skin</h2>
    <p className="mb-5 text-gray-800">
      A careful skincare routine can protect your delicate skin against irritants. Washing with lukewarm water and using gentle cleansers ensures that your skin retains moisture. Simple routines can prevent dryness and discomfort for those prone to eczema flare ups daily.
    </p>
    <p className="mb-5 text-gray-800">
      Moisturisers play a key role in sustaining skin hydration after cleansing. Applying a cream or lotion while your skin is still damp locks in moisture. This practice creates a protective layer that shields your skin from irritants during the day.
    </p>
    <p className="mb-5 text-gray-800">
      Choose products that are fragrance free and formulated for sensitive skin. Avoid harsh chemicals that strip moisture from your skin. Many patients find that switching to mild dermatologist recommended products helps ease the discomfort of eczema flare ups (British Association of Dermatologists).
    </p>
    <p className="mb-5 text-gray-800">
      Gentle cleansing and moisturising routines form the basis of daily skin care. You can begin each morning by rinsing with lukewarm water. This simple act prepares your skin for protective treatments throughout the busy day ahead to ensure lasting comfort.
    </p>
    <p className="mb-5 text-gray-800">
      Record your observations to determine which products work best for your skin. Keeping a simple journal can guide you in selecting routines that minimise irritation and maintain hydration. Reliable sources like the NHS provide useful advice on skin care daily.
    </p>

    <h2 className="text-2xl font-semi-bold text-black mt-12 mb-5">Preventing Flare Ups Through Lifestyle Changes</h2>
    <p className="mb-5 text-gray-800">
      Stress is a known contributor to eczema flare ups. You may notice that tense moments lead to increased itching and redness. Simple relaxation practices can ease your mind and help maintain a stable skin condition during difficult days each day.
    </p>
    <p className="mb-5 text-gray-800">
      Balanced eating and regular exercise support overall health and may indirectly benefit your skin. Consuming a diet rich in fruits, vegetables, and water can improve skin hydration and resilience. Healthy living often correlates with fewer eczema flare ups every day.
    </p>
    <p className="mb-5 text-gray-800">
      Sleep well and maintain a calm environment at home. A quiet, organised space can reduce stress and lower the chances of triggering flare ups. Simple activities such as reading or enjoying nature help clear your mind effectively each night.
    </p>
    <p className="mb-5 text-gray-800">
      Regular self care can also include stress reduction techniques like meditation and breathing exercises. Taking a few minutes through a personal journal to focus on deep breathing exercises may lower your anxiety levels and significantly reduce the risk of triggering skin inflammation when you experience high tension at home for improved long term skin comfort daily.
    </p>
    <p className="mb-5 text-gray-800">
      Tracking your triggers through a personal journal can help you manage flare ups. Recording meals, moods, and environmental changes gives you insight into possible patterns. Trusted guidance from the NHS encourages monitoring of your lifestyle factors to protect your skin.
    </p>

    <h2 className="text-2xl font-semi-bold text-black mt-12 mb-5">Journey Health Support and Betnovate Eczema Cream</h2>
    <p className="mb-5 text-gray-800">
      Journey Health provides support for UK residents managing eczema at home. You can consult with our team online to receive guidance on suitable treatments and skincare routines. Our approach is based on reliable advice from medical sources like the NHS.
    </p>
    <p className="mb-5 text-gray-800">
      Betnovate Eczema cream is a medicated option that helps reduce inflammation and soothe irritation. Containing a corticosteroid, this cream eases discomfort when applied as directed. You should follow instructions provided by your healthcare provider to achieve the best results safely.
    </p>
    <p className="mb-5 text-gray-800">
      Using medicated cream correctly is essential for effective eczema management. Apply a thin layer on affected areas and allow it to absorb without rubbing. This method reduces irritation and supports skin healing as confirmed by NHS recommendations on topical treatments.
    </p>
    <p className="mb-5 text-gray-800">
      Journey Health offers ongoing support for your eczema care journey. Our online consultations allow you to receive advice tailored to your skin needs. Regular check ups with healthcare professionals can help you adjust treatments for optimal skin comfort at home.
    </p>
    <p className='mb-5 text-gray-800'>
      Take control of your eczema today by exploring safe, effective treatment options from Journey Health. Our expert guidance and Betnovate Eczema cream can help you manage symptoms and protect your skin. <Link href="/treatments/eczema" className='text-blue-700'>Start your consultation</Link> to begin your care at home.
    </p>
  </>
);

  return (
    <BlogPost
      title="Eczema Triggers and How to Avoid Them"
      featuredImage="/images/blog/blog_page_2.webp"
      content={blogContent}
      relatedArticles={relatedArticles}
    />
  );
};

export default EczemaTriggersPage;