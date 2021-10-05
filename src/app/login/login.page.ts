import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AlertController, NavController,LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,public alertController : AlertController,public navCtrl: NavController,public loadingController: LoadingController) {
      this.formularioLogin = this.fb.group({
        'nombre': new FormControl("",Validators.required),
        'contraseña': new FormControl("",Validators.required)
      })
    }


  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;
    this.loadingController.dismiss();
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuario.nombre == f.nombre && usuario.contraseña == f.contraseña){
      console.log("ingresado")
      localStorage.setItem('ingresado','true');
      this.loadingController.dismiss();
      this.navCtrl.navigateRoot('inicio');
      
  }else{
    const alert = await this.alertController.create({
      header: 'Datos incompletos',
      message: 'Correo o Contraseña incorrecto',
      buttons: ['Aceptar'] 
  }); 
  await alert.present();
  }

  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      message: 'Entrando',
      translucent: true,
      duration:100,
      backdropDismiss: true
    });
    await loading.present();
  }


}  
