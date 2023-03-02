import '@testing-library/jest-dom/extend-expect';
import '@Mocks';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(timezone); // Support Time Zone
dayjs.extend(utc);
