import { Avatar, Tag } from '@/components';
import { type ResumeItem, dayjs } from '@/lib';

type SectionListProps = { items: ResumeItem[] };

export default function SectionList({ items }: SectionListProps) {
  const formatPeriodWithDuration = (startDate: dayjs.ConfigType, endDate: dayjs.ConfigType): string => {
    const format = 'YYYY.MM';

    const durationStart = dayjs(startDate);
    const durationEnd = dayjs(endDate || dayjs()); // 종료월이 없을 경우 현재 날짜를 기준으로 한다.

    // 시작월과 종료월이 같을 경우 종료월만 포맷팅하여 반환한다.
    if (dayjs(durationEnd).isSame(durationStart)) {
      return durationEnd.format(format);
    }

    // '시작월'을 포함한 총 개월수 차이를 계산하기 위해 diff 후 마지막에 +1을 해준다.
    const totalMonths = durationEnd.diff(durationStart, 'month') + 1;
    const duration = dayjs.duration(totalMonths, 'month');
    const years = duration.years();
    const months = duration.months();

    const periodStr = `${durationStart.format('YYYY.MM')} - ${durationEnd.isToday() ? '현재' : durationEnd.format('YYYY.MM')}`;
    const durationStr = [years && `${years}년`, months && `${months}개월`].filter(Boolean).join(' ');

    return `${periodStr} (${durationStr})`;
  };

  return (
    <ul className="divide-border-secondary border-y-border-secondary divide-y border-y">
      {items.map(({ title, siteUrl, logoUrl, description, startDate, endDate, subtitle, details, tags }, index) => (
        <li key={index} className="grid gap-4 py-8 md:grid-cols-[calc(var(--spacing)*25)_1fr] md:gap-8">
          <Avatar src={logoUrl} alt={title} loading="eager" shape="square" size={100} className="object-contain p-2" />

          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-0.5">
              {siteUrl ? (
                <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="w-fit text-lg font-bold underline transition-opacity hover:opacity-50">
                  <h4>{title}</h4>
                </a>
              ) : (
                <h4 className="text-lg font-bold">{title}</h4>
              )}

              {description && <p className="text-foreground-tertiary text-sm">{description}</p>}
              <div className="text-foreground-quinary text-sm">{formatPeriodWithDuration(startDate, endDate)}</div>
            </div>

            <div className="flex flex-col gap-y-2">
              <h5 className="font-semibold">{subtitle}</h5>

              {tags && (
                <ul className="flex flex-wrap items-center gap-1 text-sm">
                  {tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ul>
              )}
            </div>

            {details && (
              <ul className="text-foreground-secondary list-inside list-disc px-1">
                {details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
