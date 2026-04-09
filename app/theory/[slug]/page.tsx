import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTheoryImplementation, theoryImplementations } from "@/lib/theory";
import { LinearRegressionTheoryArticle } from "@/components/theory/LinearRegressionTheoryArticle";

interface TheoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return theoryImplementations.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: TheoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getTheoryImplementation(slug);

  if (!item) {
    return { title: "Not found" };
  }

  return {
    title: `${item.title} | Mahir Malik`,
    description: item.excerpt,
  };
}

export default async function TheoryPage({ params }: TheoryPageProps) {
  const { slug } = await params;
  const item = getTheoryImplementation(slug);

  if (!item) {
    notFound();
  }

  return <LinearRegressionTheoryArticle item={item} />;
}
