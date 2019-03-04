import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { NgxMaskModule } from 'ngx-mask';
import { DateAdapter, MatAutocompleteModule, MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatNativeDateModule, MatToolbarModule, MAT_DATE_LOCALE } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { AuthInterceptor } from '../security/auth.interceptor';
import { DateFormat } from './util/date-format';
import { ConfirmDialogService } from 'src/app/services/shared/confirm-dialog.service';
import { AvaCrudService } from 'src/app/services/shared/ava-crud.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { ToastrModule } from 'ngx-toastr';
import { MensagemService } from 'src/app/services/shared/mensagem.service';

@NgModule({
    exports: [
      FooterComponent,
      MenuComponent,
      HeaderComponent,
      CommonModule
    ],
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        MatDialogModule,
        MatToolbarModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatFormFieldModule,  
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MyDateRangePickerModule,
        ToastrModule.forRoot(),
        NgbModule.forRoot(),
        NgxMaskModule.forRoot()
    ],
    declarations: [
        FooterComponent,
        MenuComponent,
        HeaderComponent,
        HomeComponent,
        NotfoundComponent,
        ConfirmDialogComponent,
    ],
    providers: [
      MensagemService,
      AvaCrudService,
      ConfirmDialogService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }, 
      { provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
      { provide: DateAdapter, useClass: DateFormat },
      
    ],

    entryComponents: [ ConfirmDialogComponent ],
})
export class SharedModule { }