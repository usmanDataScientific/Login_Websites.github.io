import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
 loggedUser : any;

 constructor(){
  const localusers = localStorage.getItem('loggedUser');
  if(localusers != null)
  {
    this.loggedUser = JSON.parse(localusers);
  }
 }
 
}
