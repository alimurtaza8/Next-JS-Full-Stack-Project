import Link from 'next/link';
// import Image from 'next/image';

const TreatmentSection = () => {
  const treatments = [
    {
      id: 'weight-loss',
      title: 'Weight loss',
      tagLabel: 'Weight Loss',
      description: 'Clinically proven weight loss of up to 22%*',
      image: '/images/heroimage.webp',
      link: '/treatments/weight-loss',
    },
    {
      id: 'womens-health',
      title: 'UTI Women only',
      tagLabel: 'Womens Health',
      description: 'Rapid relief from painful UTI symptoms',
      image: '/images/uti_women.webp',
      link: '/treatments/uti-women-only',
    },
    {
      id: 'stomach',
      title: 'Stomach and Digestion',
      tagLabel: 'Stomach',
      description: 'Minimises heartburn and acid reflux',
      image: '/images/stomach.webp',
      link: '/treatments/stomach-and-digestion',
    },

    {
        id: 'strep-throat',
        title: 'Sore Throat',
        tagLabel: 'Strep Throat',
        description: 'Rapid relief from pain and inflammation',
        image: '/images/sora.webp',
        link: '/treatments/sore-throat',
      },
    

    {
        id: 'sleep-aid',
        title: 'Sleep Aid',
        tagLabel: 'Sleep',
        description: 'Help you fall asleep faster',
        image: '/images/sleep.webp',
        link: '/treatments/sleep-aid',
      },

    

      {
        id: 'premature-ejaculation',
        title: 'Premature Ejaculation',
        tagLabel: 'Men\'s Health',
        description: 'Extend time to ejaculation',
        image: '/images/premature.webp',
        link: '/treatments/premature-ejaculation',
      },
      {
        id: 'period-delay',
        title: 'Period Delay',
        tagLabel: 'Women\'s Health',
        description: 'Flexible timing for important events',
        image: '/images/period_image.webp',
        link: '/treatments/period-delay',
      },
      {
        id: 'migraine-relief',
        title: 'Migraine Relief',
        tagLabel: 'Migraine Relief',
        description: 'Quick headache relief for migraine sufferers',
        image: '/images/migrane.webp',
        link: '/treatments/migraine-relief',
      },

      {
        id: 'jet-lag',
        title: 'Jet Lag',
        tagLabel: 'Sleep',
        description: 'Reset your body to local time faster',
        image: '/images/jetlag.webp',
        link: '/treatments/jet-lag',
      },
    //   {
    //     id: 'jet-lag',
    //     title: 'Jet Lag',
    //     tagLabel: 'Sleep',
    //     description: 'Reset your body to local time faster',
    //     image: '/images/jetlag.webp',
    //     link: '/treatments/jet-lag',
    //   },
      {
        id: 'hayfever',
        title: 'Hayfever',
        tagLabel: 'Allergy',
        description: 'Relief from minor seasonal allergic symptoms',
        image: '/images/hayfever.webp',
        link: '/treatments/hayfever',
      },
      {
        id: 'hair-loss',
        title: 'Hair Loss',
        tagLabel: 'Men\'s Health',
        description: 'Reduce hair thinning over time',
        image: '/images/hairLoss.webp',
        link: '/treatments/hair-loss',
      },
      {
        id: 'erectile-dysfunction',
        title: 'Erectile Dysfunction',
        tagLabel: 'Men\'s Health',
        description: 'Achieve satisfactory erections',
        image: '/images/eretile.webp',
        link: '/treatments/erectile-dysfunction',
      },
      {
        id: 'eczema',
        title: 'Eczema',
        tagLabel: 'Skin',
        description: 'Soothe dry, itchy redness and itching',
        image: '/images/ecema.webp',
        link: '/treatments/eczema',
      },
      {
        id: 'contraception',
        title: 'Contraception',
        tagLabel: 'Women\'s Health',
        description: 'Explore options to prevent pregnancy',
        image: '/images/contraception.webp',
        link: '/treatments/contraception',
      },
      {
        id: 'asthma',
        title: 'Asthma',
        tagLabel: 'Respiratory',
        description: 'Quick relief from breathing difficulties',
        image: '/images/asthma.webp',
        link: '/treatments/asthma',
      }
      


  ];

  return (
    // <section className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <section className='bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8'>
      <h2 className="text-5xl font-bold text-teal-900 mb-12">All treatments</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {treatments.map((treatment) => (
          <Link href={treatment.link} key={treatment.id}>
            <div className="border border-gray-200 rounded-lg overflow-hidden h-full bg-white hover:shadow-md transition-shadow">
              <div className="aspect-square relative">
                <img 
                  src={treatment.image} 
                  alt={treatment.title}
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="p-4">
                <span className="inline-block px-3 py-1 bg-teal-700 text-white text-xs font-medium rounded mb-3">
                  {treatment.tagLabel}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {treatment.title}
                </h3>
                
                <p className="text-sm text-gray-600">
                  {treatment.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TreatmentSection;