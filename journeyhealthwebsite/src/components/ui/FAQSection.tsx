"use client";


import React, { useState } from 'react';

const FAQSection = () => {
 // State to track which FAQ item is open
 const [openFAQ, setOpenFAQ] = useState<number | null>(null);

 
 const faqItems = [
   {
     id: 1,
     question: 'Which Weight Loss Treatment is Most Effective?',
     answer: 'The most effective weight loss treatment varies from person to person. It depends on your individual needs, medical history, and lifestyle. Our medications, when combined with lifestyle changes, have shown significant results in clinical trials with up to 20% weight loss over a 72-week period.'
   },
   {
     id: 2,
     question: 'Storing Your Medication',
     answer: 'Your weight loss medication should be stored at room temperature, away from direct sunlight and moisture. Always keep it in its original container and out of reach of children. Check the medication packaging for specific storage instructions.'
   },
   {
    id: 3,
    question: 'About Weight Loss Injections and Tablets',
    answer: 'What weight loss treatments are available? There are a variety of weight loss treatments, such as weight loss injections and weight loss tablets, that are licensed and approved for use in the UK. These treatments work best when taken alongside a healthy diet and exercise plan, helping you lose weight effectively and safely. At Journey Health, we supply weight loss medications under a Patient Group Direction (PGD) written by medical experts. These treatments are available if you have a body mass index (BMI) over 30, or a BMI of 27 to 30 with one or more weight-related health conditions. Examples of weight-related conditions include prediabetes, type 2 diabetes, high blood pressure, and cardiovascular disease. Weight loss medications are split into two categories: weight loss injections and weight loss tablets.'
  },
  {
    id: 4,
    question: 'How Else Can I Lose Weight?',
    answer: 'Alongside medication, you can support your weight loss journey with: Diet: Reduce calorie intake by 600 kcal per day and focus on healthy, long-term eating habits. Exercise: Aim for at least 150 minutes of moderate-intensity exercise per week. Surgery: Considered in severe cases where other methods haven’t worked.'
  },
  {
    id: 5,
    question: 'Who Shouldn’t Use Weight Loss Medications?',
    answer: 'Weight loss injections may not be suitable for: Pregnant or breastfeeding women. People with a history of thyroid cancer, pancreatitis, or gallbladder disease. Those taking certain medications, such as insulin or immunosuppressants. Our pharmacists will ensure your chosen treatment is safe and appropriate for you. If you have any questions or need further assistance, our team at Journey Health is here to help!'
  },
  {
    id: 6,
    question: 'Delivery and Storage of Your Weight Loss Injection',
    answer: 'At Journey Health, we prioritize the safe delivery of temperature-sensitive weight loss injections like Mounjaro, Wegovy, and Saxenda. These medications must be kept chilled throughout the delivery process to maintain their efficacy. 1 We partner with Puffin Packaging, a leading provider of temperature-controlled packaging solutions, to ensure the integrity of your medication.'
  },
  {
    id: 7,
    question: 'Delivery Process',
    answer: 'To guarantee your medication arrives in optimal condition, we use Puffin Packaging s specially designed, insulated packaging, complete with ice packs. These boxes have undergone rigorous testing, including temperature mapping exercises, to validate their effectiveness in maintaining the required temperature range during transit. This testing ensures that even during potential delays, the medication remains within safe temperature limits. Your order will be shipped via Next Day Delivery (Royal Mail). Even in the event of a delivery delay, our testing, combined with Puffin Packaging s proven insulation, confirms that the medication remains safe for use, even if the ice packs have melted. We utilize high-quality ice packs and insulation within the Puffin Packaging system to further protect your medication.'
  },
  {
    id: 8,
    question: 'Side Effects of Weight Loss Treatments',
    answer: 'Like all medications, weight loss treatments can have side effects. These are usually mild and temporary. Common side effects include: Wegovy: Headaches, nausea, diarrhoea, constipation, stomach pain. Mounjaro: Nausea, vomiting, diarrhoea, constipation. Orlistat/Xenical: Oily stools, frequent bowel movements, flatulence. If side effects persist or bother you, speak to a healthcare professional.'
  },
  {
    id: 9,
    question: 'Weight Loss Tablets',
    answer: 'Weight loss tablets help you lose weight in one of two ways: by reducing how much fat your body absorbs from food (e.g., orlistat and Xenical) or by suppressing your appetite (e.g., Mysimba). While weight loss tablets are generally less effective than injections, they may be a good option if you’re uncomfortable with injections. Orlistat and Xenical These contain the active ingredient orlistat. When taken with a meal containing fat, orlistat attaches to enzymes in your digestive system called lipase, blocking them from breaking down and absorbing fat. This means some of the fat from your meal is excreted as waste. alli is an over-the-counter weight loss tablet that also contains orlistat but at a lower dose of 60mg.'
  },
  {
    id: 10,
    question: 'Can You Get Weight Loss Medication on the NHS?',
    answer: 'Some weight loss medications are available on the NHS, but access can be limited. For example: Wegovy is available if you have a BMI over 30 and a weight-related health condition. Mounjaro is expected to be rolled out on the NHS starting in 2025 for those with a BMI over 35 and weight-related comorbidities. At Journey Health, we can supply these medications under a PGD if you meet the eligibility criteria.'
  },
  {
    id: 11,
    question: 'How to Get Weight Loss Medication',
    answer: 'At Journey Health, we supply weight loss medications under a Patient Group Direction (PGD). To access treatment: Complete a short online consultation. Our pharmacists will review your medical history and BMI to ensure the treatment is safe and suitable for you. This will include a compulsory video call for the first appoint to verify all your details and consultation notes. If approved, your medication will be delivered to your door. Some weight loss medications, like alli, are available over the counter after a consultation with a pharmacist.'
  },
  {
    id: 12,
    question: 'Weight Loss Injections vs Weight Loss Tablets',
    answer: 'Here are some pros and cons of each treatment to help you decide: Weight Loss Injections ✔ Proven to result in greater weight loss in clinical trials (e.g., Mounjaro users lost up to 22.5% of their weight after 72 weeks). ✔ Taken once a week (except liraglutide, which is taken daily). ✔ Reduce appetite, making it easier to eat fewer calories. Weight Loss Tablets ✔ A good option if you’re uncomfortable with injections. ✔ Usually more affordable than injections. ✔ Some, like alli, are available over the counter (after a pharmacist consultation).'
  },
  {
    id: 13,
    question: 'Side Effects of Weight Loss Treatments',
    answer: 'Weight Loss Injections Weight loss injections belong to a class of medications called GLP-1 agonists. They mimic the hormone GLP-1, which: Reduces appetite, helping you eat less. Delays stomach emptying, keeping you fuller for longer. Regulates blood sugar levels, reducing cravings. Mounjaro also mimics a second hormone, GIP, which enhances the effects of GLP-1 and improves how your body processes sugar and fat. Weight Loss Tablets Like all medications, weight loss treatments can have side effects. These are usually mild and temporary. Common side effects include: Wegovy: Headaches, nausea, diarrhoea, constipation, stomach pain. Mounjaro: Nausea, vomiting, diarrhoea, constipation. Orlistat/Xenical: Oily stools, frequent bowel movements, flatulence. If side effects persist or bother you, speak to a healthcare professional.'
  },
  {
    id: 14,
    question: 'How Do Weight Loss Treatments Work?',
    answer: 'Weight Loss Injections Weight loss injections belong to a class of medications called GLP-1 agonists. They mimic the hormone GLP-1, which: Reduces appetite, helping you eat less. Delays stomach emptying, keeping you fuller for longer. Regulates blood sugar levels, reducing cravings. Mounjaro also mimics a second hormone, GIP, which enhances the effects of GLP-1 and improves how your body processes sugar and fat. Weight Loss Tablets Orlistat (found in Xenical and alli) is a lipase inhibitor. It blocks the absorption of about one-third of the fat you consume, which is then excreted as waste. It’s recommended to take orlistat three times a day with meals containing healthy fats. Which Weight Loss Treatment is Most Effective? All prescription weight loss medications approved in the UK are proven to help with weight loss in clinical trials. However, some are more effective than others: Mounjaro: Up to 22.5% weight loss after 72 weeks. Wegovy: Up to 15% weight loss after 68 weeks. Orlistat/Xenical: 37% of users lost 5% or more of their weight after 12 weeks.'
  },
  {
    id: 15,
    question: 'Weight Loss Injections',
    answer: 'Weight loss injections help you lose weight by reducing your appetite and helping you feel fuller after meals. This means you’ll feel satisfied with fewer calories. Weight loss injections are the most effective weight loss treatment for most people and can help you lose up to 22.5% of your starting body weight (based on clinical studies of Mounjaro 15mg taken once a week for 72 weeks). Weight loss injections come as pens that you can self-administer at home, so you do not need a medical professional to inject them for you. You can inject into the stomach, thigh, or upper arm (with assistance if needed) – wherever is most comfortable for you. Mounjaro (tirzepatide) Mounjaro is an injectable weight loss treatment containing the active ingredient tirzepatide, which mimics two naturally occurring hormones in your body: glucagon-like peptide-1 (GLP-1) and glucose-dependent insulinotropic polypeptide (GIP). These hormones help control your appetite and how full you feel. Mounjaro works by reducing hunger and prolonging feelings of satisfaction after meals. Wegovy (semaglutide) Wegovy is a weight loss injection containing the active ingredient semaglutide, which acts like GLP-1. After eating, your intestines release GLP-1 to signal to your brain that you’re full. Wegovy works similarly, sending signals to your brain to reduce hunger and help you eat less. Like Mounjaro, it also increases feelings of fullness after meals.'
  },
  {
    id: 16,
    question: 'How to Get Started',
    answer: 'Complete a brief online consultation to determine your eligibility under the PGD. Our pharmacists will review your information and approve your treatment if appropriate. Your temperature-controlled medication, packaged securely by Puffin Packaging, will be dispatched via Next Day Delivery, arriving safely at your doorstep.'
  },
   
 ];

 // Toggle function to open/close FAQ items
 const toggleFAQ = (id: number) => {
   if (openFAQ === id) {
     setOpenFAQ(null);
   } else {
     setOpenFAQ(id);
   }
 };

 return (
   <div className="w-full py-12 px-4 md:px-6 lg:px-8">
     <div className="max-w-7xl mx-auto">
       {/* Heading Section */}
       <h2 className="text-4xl md:text-5xl font-bold mb-12">
         <span className="text-[#1d3c4b]">Frequently asked</span> <span className="text-[#b9d765]">questions</span>
       </h2>
       
       {/* FAQ Items */}
       <div className="space-y-6">
         {faqItems.map((item) => (
           <div 
             key={item.id} 
             className="bg-gray-50 rounded-lg overflow-hidden"
           >
             <button 
               className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
               onClick={() => toggleFAQ(item.id)}
             >
               <h3 className="text-xl font-medium text-[#1d3c4b]">{item.question}</h3>
               <svg 
                 className={`w-6 h-6 text-[#1d3c4b] transform transition-transform duration-200 ${openFAQ === item.id ? 'rotate-180' : ''}`} 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 stroke="currentColor"
               >
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
               </svg>
             </button>
             
             {/* Collapsible content */}
             <div 
               className={`overflow-hidden transition-all duration-300 ${
                 openFAQ === item.id ? 'max-h-96 p-6 pt-0' : 'max-h-0'
               }`}
             >
               <p className="text-[#1d3c4b]">{item.answer}</p>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
};

export default FAQSection;