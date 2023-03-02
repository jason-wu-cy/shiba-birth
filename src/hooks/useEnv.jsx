import { useMemo } from 'react';
import Env from '@Env';

/**
 * 描述 : 取得路徑
 */

export default function useEnv() {
  /* Main */
  return useMemo(() => Env, []);
}
