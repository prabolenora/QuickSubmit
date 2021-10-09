import { Component, OnInit } from '@angular/core';

import { EmailComposer } from '@ionic-native/email-composer/ngx';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  constructor(public composer:EmailComposer,private menu: MenuController,) {
   // this.composer.isAvailable(true);
   }

  ngOnInit() {

  }
  openFirst() {
    this.menu.enable(true, 'first');
    //this.menu.open('first');
  }

  openEmailComposer(){
    this.composer.open({
      to:"suppor@quicksubmit.lk",
    })
  }
}
