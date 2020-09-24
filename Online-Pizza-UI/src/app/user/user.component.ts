import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  parent: FormGroup;

  @Input()
  total: string;

  @Input()
  prices: any;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
