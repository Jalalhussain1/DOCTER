import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import img5 from '../../assets/img5.png';


const ChallengesSection = () => {
  const features = [
    'Expert handling of complex coding and documentation.',
    'Faster claims processing & higher reimbursement rates.',
    'Ongoing compliance with ever-changing payer regulations.'
  ];

  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Content with Animation */}
        <motion.div className="" variants={textVariant}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
            Facing These Common
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
            Challenges in Internal
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
            Medicine Billing?
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed my-8">
            Internal medicine billing presents several challenges due to the
            broad scope of conditions, treatments, and procedures involved. One
            major challenge is the complexity of medical coding. Internists deal
            with an extensive range of codes for chronic conditions, preventive
            care, and specific treatments, which increases the chances of
            coding errors and claim denials. Additionally, the documentation
            required for accurate billing can be overwhelming, and any missing
            or incomplete information delays payment processing.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            A practical solution to these challenges is outsourcing your billing to
            a specialized service provider like BilNow. We are well-versed in
            internal medicine billing and ensure accurate coding, up-to-date
            regulatory knowledge, and improved cash flow.
          </p>

          {/* Features List */}
          <ul className="my-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-5 my-5">
                <div className="flex-shrink-0">
                  <Check className="w-3 h-3 text-white hover:bg-orange-300 rounded-full bg-black" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Illustration with Animation */}
        <motion.div className="relative" variants={imageVariant}>
          <img
            src={img5}
            alt="Medical Billing Challenges Illustration"
            className="w-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ChallengesSection;
