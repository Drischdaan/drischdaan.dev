import { CodeCard } from '../CodeCard';

export function HeroSection() {
  return (
    <section id='hero' className='relative flex h-dvh flex-col px-10'>
      <div className='relative flex flex-1 flex-col items-center justify-center'>
        <div className='mb-2 flex flex-row items-center justify-center gap-2 rounded-lg border border-zinc-600 bg-neutral-950 px-3 py-1 text-orange-200 xl:mb-3 xl:px-4'>
          <h2 className='text-sm lg:text-lg xl:text-2xl'>{`Greetings! I'm a`}</h2>
        </div>
        <div className='flex flex-row items-center justify-center gap-2'>
          <h1 className='text-base text-zinc-500 lg:text-xl xl:text-3xl'>
            {'/* Hobby */'}
          </h1>
          <h1 className='relative text-5xl font-semibold uppercase md:text-6xl lg:text-8xl xl:text-9xl'>
            <span className='text-lime-400'>Game</span>
            <span className='text-white'> &</span>
          </h1>
        </div>
        <div className='flex flex-row items-center justify-center gap-2'>
          <h1 className='relative text-5xl font-semibold uppercase md:text-6xl lg:text-8xl xl:text-9xl'>
            <span className='text-indigo-400'>Fullstack</span>
          </h1>
          <h1 className='text-base text-zinc-500 lg:text-xl xl:text-3xl'>
            {'/* Job */'}
          </h1>
        </div>
        <h1 className='relative text-5xl font-semibold uppercase text-white md:text-6xl lg:text-8xl xl:text-9xl'>
          Developer.
        </h1>
        <div className='mt-5 xl:mt-8'>
          <h2 className='text-center text-sm text-zinc-400 lg:text-base xl:text-xl'>
            <span>
              Pationed about learning new{' '}
              <span className='text-indigo-400'>technologies</span> and building{' '}
              <span className='text-lime-400'>cool stuff</span>.
            </span>
          </h2>
        </div>
      </div>
      <div className='absolute right-[8%] top-[15%] hidden items-center justify-center xl:right-[15%] xl:top-[15%] xl:flex'>
        <CodeCard
          language='C++'
          code='const FEngine* Engine = new FEngine();'
          rotate='left'
        />
      </div>
      <div className='absolute bottom-[15%] left-[10%] hidden items-center justify-center xl:bottom-[15%] xl:left-[20%] xl:flex'>
        <CodeCard
          language='Typescript'
          code='console.log("Hello, World!");'
          rotate='right'
        />
      </div>
    </section>
  );
}
