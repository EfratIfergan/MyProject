import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private viewportScroller:ViewportScroller){}
 onClickScroll(elementId:string):void{this.viewportScroller.scrollToAnchor(elementId)}

navIsUp:boolean=true;
@HostListener('window:scroll', ['$event']) 
onScroll(event){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 0)
  {
   this.navIsUp=true
  }
  else {
  this.navIsUp=false;
  }
}






}
