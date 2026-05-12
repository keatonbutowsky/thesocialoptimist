import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type CaseStudyMeta = {
  slug: string;
  client: string;
  industry: string;
  platforms: string[];
  service_tier: "Social Starter" | "Social Savvy" | "Social Optimist";
  result_type: string;
  hero_metric: string;
  summary: string;
  date: string;
};

export type CaseStudy = CaseStudyMeta & {
  body: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "portfolio");

export function getAllCaseStudies(): CaseStudy[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  const studies = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      client: data.client,
      industry: data.industry,
      platforms: data.platforms ?? [],
      service_tier: data.service_tier,
      result_type: data.result_type,
      hero_metric: data.hero_metric,
      summary: data.summary,
      date: data.date,
      body: content,
    } as CaseStudy;
  });
  return studies.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const all = getAllCaseStudies();
  return all.find((s) => s.slug === slug) ?? null;
}

export function getCaseStudyMetas(): CaseStudyMeta[] {
  return getAllCaseStudies().map(({ body, ...meta }) => meta);
}
