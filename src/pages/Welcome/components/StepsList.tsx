const StepsList = () => {
  const steps = [
    { text: 'Completa tu expediente médico', time: '2 min' },
    { text: 'Explora las opciones de tratamiento' },
    { text: 'Paga y recibe tu tratamiento' },
  ];

  return (
    <ul className='my-3 flex flex-col gap-2'>
      {steps.map((step, index) => (
        <li key={index} className='relative flex items-center gap-2'>
          {index !== steps.length - 1 && (
            <span className='absolute left-[7px] top-4 h-[30px] w-0.5 bg-gray-300'></span>
          )}
          <span className='z-10 h-4 w-4 rounded-full border-2 border-gray-300 bg-white'></span>
          <span className='text-sm text-gray-600'>{step.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default StepsList;
