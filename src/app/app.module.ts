import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './components/security/auth.guard';
import { SharedModule } from './components/shared/shared.module';
import { TemplateComponent } from './components/shared/template/template.component';
import { LoginComponent } from './pages/login/login.component';
import { MensagemService } from './services/shared/mensagem.service';
import { TokenService } from './services/token/token.service';
import { UsuarioService } from './services/usuario/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [    
    TokenService,
    UsuarioService,
    AuthGuard,
    MensagemService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }