import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';

  constructor(private router: Router) { }

  isAuthenticated(): boolean {
    let value = sessionStorage.getItem("usuario_autenticado");
    if (value == "1") {
      return true;
    }
    else {
      return false;
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }
}
