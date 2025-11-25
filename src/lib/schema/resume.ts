import z from 'zod';

export type Resume = z.infer<typeof Resume>;
export type ResumeItem = z.infer<typeof ResumeItem>;

const ResumeItem = z.object({
  title: z.string(),
  siteUrl: z.url().nullable(),
  logoUrl: z.string(),
  description: z.string().nullable(),
  startDate: z.iso.date(),
  endDate: z.iso.date().nullable(),
  subtitle: z.string(),
  tags: z.array(z.string()).nullable(),
  details: z.array(z.string()).nullable(),
});

const Resume = z.object({
  workExperience: z.array(ResumeItem),
  education: z.array(ResumeItem),
  certificate: z.array(ResumeItem),
  skills: z.array(z.string()),
});

export default Resume;
