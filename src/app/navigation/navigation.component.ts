import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
 @Input() src: string ;
  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}