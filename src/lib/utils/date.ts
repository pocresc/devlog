import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import updateLocale from 'dayjs/plugin/updateLocale';
import objectSupport from 'dayjs/plugin/objectSupport';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import isToday from 'dayjs/plugin/isToday';

dayjs.extend(updateLocale);
dayjs.extend(objectSupport);
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(isToday);

dayjs.updateLocale('ko', {
  weekdays: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  weekdaysShort: ['일', '월', '화', '수', '목', '금', '토'],
  weekdaysMin: ['일', '월', '화', '수', '목', '금', '토'],
  months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthsShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  ordinal: (n: number) => `${n}일`,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YY-MM-DD',
    LL: 'YYYY-MM-DD',
    LLL: 'YYYY-MM-DD HH:mm',
    LLLL: 'YYYY-MM-DD HH:mm:ss',
  },
  meridiem: (hour: number) => (hour < 12 ? '오전' : '오후'),
  relativeTime: {
    future: '%s 후',
    past: '%s 전',
    s: '몇 초',
    m: '1분',
    mm: '%d분',
    h: '1시간',
    hh: '%d시간',
    d: '1일',
    dd: '%d일',
    M: '1개월',
    MM: '%d개월',
    y: '1년',
    yy: '%d년',
  },
});

dayjs.locale('ko');

export { dayjs };
