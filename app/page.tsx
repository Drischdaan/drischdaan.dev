interface IGithubProject {
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  language: string;
  fork: boolean;
}

export default async function Home() {
  const githubProjects: IGithubProject[] = await (await fetch('https://api.github.com/users/Drischdaan/repos')).json();
  return (
    <div className='w-full h-full bg-gradient-to-b from-neutral-50 to-neutral-200 dark:from-neutral-800 dark:to-[#141414] flex justify-center items-center'>
      <div className='grid grid-cols-5 gap-3'>
        {githubProjects.filter((project) => !project.fork).map((project, index) => (
          <div key={index} className='p-3 rounded-md bg-neutral-700'>
            {project.full_name}
          </div>
        ))}
      </div>
    </div>
  );
}