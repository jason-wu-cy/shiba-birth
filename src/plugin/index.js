import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

dayjs.extend(timezone); // Support Time Zone
dayjs.extend(utc);

if (typeof window !== 'undefined') {
  window.VIDEOJSNODYNAMIC_STYLE = true;
}
