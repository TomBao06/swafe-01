import { Component, OnInit } from '@angular/core';
import { Billionaire, SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private data: SharedService) { }

  ngOnInit() {
    
  }

  billionaires: Billionaire[] = [{ 
    name: 'Bill Gates',
    net_worth: 133200000000,
    nationality: 'US',
  }, {
    name: 'Jeff Bezos',
    net_worth: 200100000000,
    nationality: 'US',
  }, {
    name: 'Elon Musk',
    net_worth: 190700000000,
    nationality: 'US',
  }, {
    name: 'Mark Zuckerberg',
    net_worth: 135200000000,
    nationality: 'US',
  }]
}
