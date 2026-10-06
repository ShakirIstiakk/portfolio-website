import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import { CaseStudyView } from "@/components/CaseStudyView";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: `${project.tagline} Delivered by Shakir Istiak: ${project.role}. Technologies: ${project.technologies.join(", ")}.`,
    openGraph: {
      title: `${project.title} — Case Study | Shakir Istiak`,
      description: project.tagline,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyView project={project} />;
}
