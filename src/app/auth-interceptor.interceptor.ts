import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb250cm9sZS1maW5hbmNlaXJvLWFwaSIsInN1YiI6InRlc3RlM0B0ZXN0ZS5jb20iLCJleHAiOjE3MjI4MjM1MTd9.ybp2dYHqwVikat4rN_HU48f0CqV_dQZIPXRf7x-ZogQ';

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  return next(authReq);
};
