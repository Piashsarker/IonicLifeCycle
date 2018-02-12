import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  /** TODO: ionViewCanEnter()   Nav Guards
   * Fired before entering into a view, allows you to control whether
   * the view can be accessed or not (returning true or false).
   */
  ionViewCanEnter(){
    console.log("ionViewCanEnter SecondPage.");
  }
  /** TODO: ionViewCanLeave() Nav Guards
  ionViewCanLeave(){
    console.log('ionViewCanLeave SecondPage.');
  }

  /** TODO: ionViewDidLoad():
   *   Fired only when a view is stored in memory.
   *  This event is NOT fired on entering a view that is already cached.
   *  It’s a nice place for init related tasks. **/
  ionViewDidLoad(){
    console.log("ionViewDidLoad SecondPage.");
  }

  /** TODO: ionViewWillEnter():
   *  It’s fired when entering a page, before it becomes the active one.
   *   Use it for tasks you want to do every
   *  time you enter in the view (setting event listeners, updating a table, etc.).
   *  **/
  ionViewWillEnter(){
    console.log('ionViewWillEnter SecondPage.');
  }
  /** TODO: ionViewDidEnter()
   *  Fired when entering a page, after it becomes the active page.
   *  Quite similar to the previous one. **/
  ionViewDidEnter(){
    console.log('ionViewDidEnter SecondPage.');
  }

  /** TODO: ionViewWillLeave()
   * Fired when you leave a page, before it stops being the active one.
   *  Use it for things you need to run every time you are leaving a
   *  page (deactivate event listeners, etc.).
   *  **/
  ionViewWillLeave(){
    console.log('ionViewWillLeave SecondPage.');
  }

  /** TODO: ionViewDidLeave()
   * Fired when you leave a page, after it stops being the active one.
   * Similar to the previous one.
   */
  ionViewDidLeave(){
    console.log('ionViewDidLeave SecondPage.');
  }

  /** TODO: ionViewWillUnload():
   * Fired when a view is going to be completely removed (after leaving a non-cached view).
   */

  ionViewWillUnload(){
    console.log('ionViewWillUnload SecondPage.');
  }




}
