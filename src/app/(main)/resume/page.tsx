import data from 'public/data/resume.json';
import { Brandmark, Container, CTAButton } from '@/components';
import { SectionList, SectionTitle } from './_components';
import { Resume, validateSchema } from '@/lib';

export default async function ResumePage() {
  const resume = validateSchema(Resume, data);

  return (
    <Container layout size="small">
      <div className="flex flex-col gap-y-20">
        <section>
          <Brandmark />
          <h2 className="my-1 text-4xl font-bold">최정원</h2>
          <p className="text-foreground-secondary font-semibold">poco a poco cresc.</p>
        </section>

        <section>
          <SectionTitle>👩‍💻 경력</SectionTitle>
          <SectionList items={resume.workExperience} />
          <CTAButton href="/projects" className="mt-4">
            프로젝트 보러 가기 →
          </CTAButton>
        </section>

        <section>
          <SectionTitle>📚 교육</SectionTitle>
          <SectionList items={resume.education} />
        </section>

        <section>
          <SectionTitle>📝 자격증</SectionTitle>
          <SectionList items={resume.certificate} />
        </section>

        <section>
          <SectionTitle>💪 스킬</SectionTitle>

          <ul className="flex flex-wrap items-center gap-2">
            {resume.skills.map(skill => (
              <li key={skill} className="border-primary text-primary rounded-2xl border px-4 py-1">
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Container>
  );
}
