import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

@Input() getmessage='Please enter correct values'

  constructor() { }

  ngOnInit(): void {
  }

}
