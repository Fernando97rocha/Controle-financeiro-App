import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb250cm9sZS1maW5hbmNlaXJvLWFwaSIsInN1YiI6InRlc3RlM0B0ZXN0ZS5jb20iLCJleHAiOjE3MjM3ODAyNzR9.1Kuea-TeC04Tmp62MUaV3s-InHQDf6oCgfEuHVA7RpQ';

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  return next(authReq);
};
