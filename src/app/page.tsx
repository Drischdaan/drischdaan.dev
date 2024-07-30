import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/Hero';

export default function Home() {
  return (
    <main className='relative flex flex-col'>
      <Header />
      <HeroSection />
      <div className='relative h-dvh bg-neutral-950'>
        <div className='flex h-full items-center justify-center'>
          This is still work in progress 🚧
        </div>
      </div>
    </main>
  );
}
