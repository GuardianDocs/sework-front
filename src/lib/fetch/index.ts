import { jsonReturnFetch } from './jsonReturnFetch';
import { throwingErrorByStatusCodeFetch } from './throwingErrorByStatusCodeFetch';

export const fetchOnServer = jsonReturnFetch({
  fetch: throwingErrorByStatusCodeFetch({
    headers: { Accept: '*/*', 'Content-Type': 'application/json' },
    baseUrl: 'https://api-dev.iras.kr/api',
  }),
});
