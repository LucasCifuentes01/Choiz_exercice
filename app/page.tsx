import BottomSheet from '@/pages/Welcome/components/BottomSheet';
import HeaderLogo from '@/pages/Welcome/components/HeaderLogo';

export default function Home() {
  return (
    <div style={{ height: '70%' }} className='bg-welcome bg-cover bg-center'>
      <HeaderLogo />
      <BottomSheet />
    </div>
  );
}
