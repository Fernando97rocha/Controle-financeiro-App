import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb250cm9sZS1maW5hbmNlaXJvLWFwaSIsInN1YiI6InRlc3RlM0B0ZXN0ZS5jb20iLCJleHAiOjE3MjI3MjE5NTl9.fw5lcY4ZECY8bNCl1dDF-a4Z7hAff1Iqmi-5Xj7fMGg';

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  return next(authReq);
};
