const PageSection = ({ title }: PageSectionProps) => {
  return <div>{title}</div>;
};

export default PageSection;

type PageSectionProps = { title: string };
