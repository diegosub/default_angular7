import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import 'rxjs/add/operator/do';
import { Observable } from "rxjs/Observable";
import { UtilService } from '../../services/util.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    util : UtilService;

    constructor(private router: Router,
                private spinnerService: Ng4LoadingSpinnerService) {
        this.util = UtilService.getInstance();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
        let authRequest : any;

        this.spinnerService.show();

        if(this.util.isLoggedIn()){

            let token = localStorage.getItem("token");
            //console.log(token);
            authRequest = req.clone({ 
                setHeaders : {'Authorization' : token }
            });
            
            return next.handle(authRequest).do((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                  //token ok.. continua o processo (pode ser implementado a logica de sempre atualizar o token)                  
                  this.spinnerService.hide();
                }
            }, (err: any) => {
              if (err instanceof HttpErrorResponse) {

                this.spinnerService.hide();
                
                if (err.status === 401) {
                  //token expirado, realize o logout                    
                  //this.mensagem.tratarErroPersonalizado('Sua sessão expirou, favor realizar o login novamente.','Sessão expirada');
                  localStorage.removeItem("usuario");
                  localStorage.removeItem("token");
                  this.router.navigate(['/login']);
                }
              }
            });

        } else {          
          return next.handle(req).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {              
              //desativando loaging
              this.spinnerService.hide();
            }
          }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                this.spinnerService.hide();
            }
          });         
        }
    }

}