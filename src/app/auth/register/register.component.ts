import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { getDeepFromObject } from '@nebular/auth/helpers';
import { NB_AUTH_OPTIONS, NbAuthSocialLink } from '@nebular/auth';

import { AuthService } from '../auth.service';

import { NbToastStatus } from '@nebular/theme/components/toastr/model';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'axl-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  redirectDelay: number = 0;
  showMessages: any = {};

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {
    password: ''
  };
  socialLinks: NbAuthSocialLink[] = [];
  validation = {};

  constructor(protected auth: AuthService, private toastrService: NbToastrService,
    @Inject(NB_AUTH_OPTIONS) protected config = {},
    protected router: Router) {

    this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
    this.showMessages = this.getConfigValue('forms.register.showMessages');
    this.socialLinks = this.getConfigValue('forms.register.socialLinks');

    this.validation = this.getConfigValue('forms.validation');
  }

  title = 'Register Berhasil!';
  content = `Anda berhasil mendaftar, silahkan periksa email anda untuk verifikasi. Terima Kasih!`;

  register(): void {
    this.errors = this.messages = [];
    this.submitted = true;

    this.auth.register(this.user.email, this.user.password, this.user.fullName)
      .then(() => {
        this.submitted = false;
        this.messages = [];

        // toast here!
        this.showToast(NbToastStatus.SUCCESS, this.title, this.content);

        this.redirectToLogin();
      })
      .catch((err) => {
        this.submitted = false;
        this.errors = [err];
      });
  }

  private showToast(type: NbToastStatus, title: string, body: string) {
    const configs = {
      status: type,
      destroyByClick: true,
      duration: 0,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false,
    };
    const titleContent = title ? `${title}` : '';
    this.toastrService.show(
      body,
      `${titleContent}`,
      configs);
  }

  loginSocial(name) {
    if (name === "google") {
      this.loginGoogle();
    } else if (name === "facebook") {
      this.loginFb();
    } else {
      console.warn("No login for " + name);
    }
  }

  loginGoogle() {
    this.auth.signInWithGoogle()
      .then((success) => {
        this.redirectToDashboard()
      })
      .catch((err) => {
        this.errors = [err];
      });
  }

  loginFb() {
    this.auth.signInWithFacebook()
      .then((success) => {
        this.redirectToDashboard()
      })
      .catch((err) => {
        this.errors = [err];
      });
  }

  redirectToDashboard() {
    setTimeout(() => {
      this.router.navigate(['/pages/dashboard']);
    }, this.redirectDelay);
  }

  redirectToLogin() {
    setTimeout(() => {
      this.router.navigate(['/pages/login']);
    }, this.redirectDelay);
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.config, key, null);
  }

}
