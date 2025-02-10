interface IProps {
  onChange: ({ id, value }: { id: string; value: string }) => void;
}

const TextOption = ({ onChange }: IProps) => {
  const handleChange = (value: string) => {
    onChange({ id: 'custom', value });
  };

  return (
    <div className='mt-2 flex w-full flex-col gap-2'>
      <p className='text-xs text-secondary_600'>
        Cuéntanos cuál es el problema
      </p>
      <textarea
        onChange={(e) => handleChange(e.target.value)}
        className='option w-full text-xs text-secondary_600 placeholder:text-xs'
        placeholder='Inserta tu respuesta aquí'
      />
    </div>
  );
};

export default TextOption;
