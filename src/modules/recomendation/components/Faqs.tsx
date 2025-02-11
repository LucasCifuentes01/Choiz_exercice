import { useGetFaqs } from '../queries';
import FaqComponent from './FaqComponent';

const Faqs = () => {
  const { data: faqs, isLoading } = useGetFaqs();

  if (!faqs) return null;

  return (
    <div className='rounded-3 shadow-soft w-full'>
      {faqs &&
        !isLoading &&
        faqs.faqs.map((faq, index) => (
          <FaqComponent
            key={index}
            title={faq.question}
            description={faq.answer}
          />
        ))}
    </div>
  );
};

export default Faqs;
