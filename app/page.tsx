import BottomSheet from '@/modules/Welcome/components/BottomSheet';
import HeaderLogo from '@/modules/Welcome/components/HeaderLogo';

export default function Home() {
  return (
    <div style={{ height: '70%' }} className='bg-welcome bg-cover bg-center'>
      <HeaderLogo />
      <BottomSheet />
    </div>
  );
}
