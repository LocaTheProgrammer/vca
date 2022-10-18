import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {


  userSelected: User[] = [];
  userList: User[] = [
    new User('gianni', 'bianchi', 32),
    new User('matteo', 'rossi', 12),
    new User('luca', 'verdi', 51),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
