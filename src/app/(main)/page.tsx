import { Block, Brandmark, Container, Mark, Quote } from '@/components';
import { FaEnvelope, FaGithub, FaLinkedin, FaSquareInstagram } from 'react-icons/fa6';
import { NICKNAME } from '@/constants';

const contacts = [
  {
    href: 'https://github.com/pocresc',
    icon: <FaGithub />,
  },
  {
    href: 'https://www.linkedin.com/in/pocresc',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://www.instagram.com/pocresc',
    icon: <FaSquareInstagram />,
  },
  {
    href: 'mailto:pocresc@gmail.com',
    icon: <FaEnvelope />,
  },
] as const;

export default function HomePage() {
  return (
    <Container layout>
      <section>
        <Brandmark />
        <h2 className="mt-1 mb-9 text-3xl font-bold md:text-4xl">최정원 개발 블로그</h2>
      </section>

      <section className="grid grid-cols-[1fr] gap-12 md:grid-cols-[calc(var(--spacing)*60)_1fr]">
        <div className="flex flex-wrap items-center gap-4 md:flex-col md:items-start">
          <div className="bg-accent size-32 shrink-0 rounded-full md:size-60"></div>

          <div className="flex flex-col gap-y-1">
            <h3 className="text-2xl font-semibold">최정원 ({NICKNAME})</h3>

            <ul className="flex flex-wrap items-center gap-0.5 [&_svg]:size-5">
              {contacts.map(({ href, icon }) => (
                <li key={href} className="transition-opacity hover:opacity-50">
                  <a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2">
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-y-6">
          <Quote className="text-foreground-secondary">
            <p className="leading-relaxed font-semibold">
              React와 ASP.NET Core를 기반으로 <Mark variant="secondary">웹 애플리케이션을 개발</Mark>하고 있습니다.
              <br />
              시야를 넓혀주는 <Mark variant="secondary">다양한 경험</Mark>과 깊이를 더해가는 <Mark variant="secondary">지속적인 성장</Mark>을 중요하게
              생각합니다.
            </p>
          </Quote>

          <Block>
            <ul className="list-inside list-disc text-sm leading-loose">
              <li>💻 서비스의 설계부터 개발, 유지보수, 운영까지 담당하며 다양한 실무 경험을 쌓았습니다.</li>
              <li>🚀 반복되는 업무를 자동화하고 비효율적인 프로세스를 개선하는 일에 관심이 많습니다.</li>
              <li>🔭 생산성을 극대화하기 위해, 확장 가능한 구조와 실용적인 DX에 대해 고민합니다.</li>
              <li>📝 개발 중에 겪은 이슈와 기억하고 싶은 내용을 기록하고 정리하며 인사이트를 쌓아갑니다.</li>
              <li>🌱 나만의 데일리 루틴을 실천하며, 하루하루 긍정적인 생활 습관을 만들어가고자 합니다.</li>
              <li>☕ 음악과 커피, 그리고 아름다운 경치를 감상하며 힐링하는 것을 좋아합니다.</li>
            </ul>
          </Block>
        </div>
      </section>
    </Container>
  );
}
