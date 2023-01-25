import './home.page.scss';

export default async function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col-reverse md:flex-row">
      <div className="flex-1 flex justify-center items-start md:items-center px-32 py-10">
        <div className="basis-full lg:basis-3/4 xl:basis-1/2 flex justify-center items-start flex-col gap-3">
          <h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            drischdaan
          </h1>
          <p className="text-neutral-500">
            A 19 year old software developer from germany.
            My real name is Tristan, but everyone calls me drischdaan.
          </p>
          <div className='mt-5 flex justify-start items-center gap-3'>
            <a href='https://github.com/Drischdaan' target='_blank' rel='noreferrer' className="social-button">Github</a>
            <a href='https://instagram.com/drischdaan' target='_blank' rel='noreferrer' className="social-button">Instagram</a>
            <a href='https://open.spotify.com/user/wqqh06uhneiz0mm94aqsgzhte?si=612ccbedd32541bb' target='_blank' rel='noreferrer' className="social-button">Spotify</a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center p-10">

      </div>
    </div>
  );
}