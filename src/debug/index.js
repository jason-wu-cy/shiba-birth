/* eslint-disable no-console */
import dayjs from 'dayjs';
import { TIMEZONE_TAIPEI } from '@Base/timezone';
import PackageJson from '../../package.json';

class Debug {
  print = () => {
    console.log('------------');
    console.log('Build In APP_NAME ::: ', PackageJson.name);
    console.log('Build In APP_ENV ::: ', process.env.APP_ENV);
    console.log('Build In NODE_ENV ::: ', process.env.NODE_ENV);
    console.log('Build In Version ::: ', PackageJson.version);
    console.log('Build In Git Commit Hash ::: ', process.env.GIT_COMMIT_HASH);
    console.log(
      'Build In Git Commit Time ::: ',
      dayjs(process.env.GIT_COMMIT_TIME).tz(TIMEZONE_TAIPEI).format('YYYY/MM/DD HH:mm:ss'),
    );
    console.log('------------');
  };
}

export default Debug;
