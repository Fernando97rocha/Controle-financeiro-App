import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb250cm9sZS1maW5hbmNlaXJvLWFwaSIsInN1YiI6InRlc3RlMkB0ZXN0ZS5jb20iLCJleHAiOjE3MjUzNjk2MzZ9.Doxs3RWiEkd9mKVWXordnVQDxuzNYbC24ALaEeKn6o8';

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  return next(authReq);
};
