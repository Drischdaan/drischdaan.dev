interface IProjectCardProps {
  name: string;
  description: string;
}

export default function ProjectCard(props: IProjectCardProps) {
  return (
    <div className={`p-5 rounded-lg bg-neutral-800`}>
      <p>{props.name}</p>
      <p>{props.description}</p>
    </div>
  );
}