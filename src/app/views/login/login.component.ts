import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginModel = new Users();
  mensagem = ""

  onSubmit() {
    console.log(this.loginModel)
    
    this.loginService.login(this.loginModel).subscribe((response)=>{
      console.log(response)
      this.router.navigateByUrl('')
    }, (respostaErro) =>{
      this.mensagem = respostaErro.error
      console.log(respostaErro)

    })
  }
}
