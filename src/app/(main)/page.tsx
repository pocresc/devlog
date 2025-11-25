import Link from 'next/link';
import { Block, Brandmark, Card, Contacts, Container, Quote, Tag } from '@/components';
import { NICKNAME } from '@/constants';

const posts = [
  {
    id: 1,
    category: ['프로그래밍', '백엔드', '.NET'],
    date: '2025-11-24 21:49:00',
    title: '[.NET] CSV 파일 읽어서 C# 클래스에 바인딩하기 (feat.CsvHelper)',
    description: '교육의 자주성·전문성·정치적 중립성 및 대학의 자율성은 법률이 정하는 바에 의하여 보장된다.',
  },
  {
    id: 2,
    category: ['프로그래밍', '백엔드', '.NET'],
    date: '2025-11-24 21:49:00',
    title: '[.NET] FCM(Firebase Cloud Messaging)으로 푸시 알림 발송하기',
    description: '교육의 자주성·전문성·정치적 중립성 및 대학의 자율성은 법률이 정하는 바에 의하여 보장된다.',
  },
  {
    id: 3,
    category: ['프로그래밍', '백엔드', 'ASP.NET Core'],
    date: '2025-11-24 21:49:00',
    title: '[ASP.NET Core] Identity API로 회원가입 로직 구현하기 (feat.트랜잭션)',
    description: '교육의 자주성·전문성·정치적 중립성 및 대학의 자율성은 법률이 정하는 바에 의하여 보장된다.',
  },
  {
    id: 4,
    category: ['프로그래밍', '프론트엔드', 'Next.js'],
    date: '2025-11-24 21:49:00',
    title: '[Next.js] Parallel Routes와 Intercepting Routes로 모달 구현하기',
    description: '교육의 자주성·전문성·정치적 중립성 및 대학의 자율성은 법률이 정하는 바에 의하여 보장된다.',
  },
  {
    id: 5,
    category: ['프로그래밍', '프론트엔드', 'Next.js'],
    date: '2025-11-24 21:49:00',
    title: '[Next.js] View Transition API 사용해보기',
    description: '교육의 자주성·전문성·정치적 중립성 및 대학의 자율성은 법률이 정하는 바에 의하여 보장된다.',
  },
  {
    id: 6,
    category: ['데이터베이스', '이론'],
    date: '2025-11-24 21:49:00',
    title: '[DB] 데이터 정규화 ',
    description: '교육의 자주성·전문성·정치적 중립성 및 대학의 자율성은 법률이 정하는 바에 의하여 보장된다.',
  },
] as const;

export default function HomePage() {
  return (
    <Container layout>
      <div className="flex flex-col gap-y-8">
        <section>
          <Brandmark />
          <h2 className="mt-1 text-3xl font-bold md:text-4xl">최정원 개발 블로그</h2>
        </section>

        <section>
          <div className="grid grid-cols-[1fr] gap-6 md:grid-cols-[calc(var(--spacing)*60)_1fr] md:gap-12">
            <div className="flex flex-wrap items-center gap-4 md:flex-col md:items-start">
              <div className="bg-accent size-32 shrink-0 rounded-full md:size-60"></div>

              <div className="flex flex-col gap-y-1">
                <h3 className="text-2xl font-semibold">최정원 ({NICKNAME})</h3>
                <Contacts />
              </div>
            </div>

            <div className="flex flex-col gap-y-6">
              <Quote className="text-foreground-secondary">
                <p className="leading-relaxed font-semibold">
                  React와 ASP.NET Core를 기반으로 <span className="text-primary underline">웹 애플리케이션을 개발</span>하고 있습니다.
                  <br />
                  시야를 넓혀주는 <span className="text-primary underline">다양한 경험</span>과 깊이를 더해가는{' '}
                  <span className="text-primary underline">지속적인 성장</span>을 중요하게 생각합니다.
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
          </div>
        </section>
      </div>

      <div className="my-16 flex flex-col gap-y-12 md:my-20">
        <section>
          <h4 className="text-2xl font-semibold">📝 최근 게시글을 읽어보세요.</h4>

          <ul className="my-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {posts.map(({ id, category, date, title, description }) => (
              <li key={id}>
                <Link href="#">
                  <Card variant="shadow" cover={<div className="h-full w-full"></div>} title={title} description={description}>
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap items-center gap-1 text-xs">
                        {category.map((item, index) => (
                          <Tag key={index}>{item}</Tag>
                        ))}
                      </div>

                      <time dateTime={date} className="text-foreground-quinary text-xs">
                        {date}
                      </time>
                    </div>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end">
            <Link href="/blog" className="text-foreground-tertiary transition-opacity hover:opacity-50">
              모든 게시글 →
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}
