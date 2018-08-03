import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  todos: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  addItem() {
    this.alertCtrl.create({
      title: 'TODO hinzufügen',
      inputs: [
        {
          name: 'todo',
          placeholder: 'etwas tun'
        }
      ],
      buttons: [{
        text: 'speichern',
        handler: data => {
          this.todos.push(data['todo']);
        }
      }]
    }).present();
  }

  deleteItem(todo: string) {
    var index = this.todos.indexOf(todo, 0);
      if (index > -1){
        this.todos.splice(index, 1);
      }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
