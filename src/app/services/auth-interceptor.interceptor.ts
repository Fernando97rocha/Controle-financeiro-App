import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb250cm9sZS1maW5hbmNlaXJvLWFwaSIsInN1YiI6InRlc3RlM0B0ZXN0ZS5jb20iLCJleHAiOjE3MjM1OTcyMzF9.1J6PPl_EV8Kyl24JCniwOkyEe_FQZ4pNxG04zwt4A4w';

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  return next(authReq);
};
