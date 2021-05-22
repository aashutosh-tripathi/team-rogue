import { Component } from '@angular/core';
import { JoyrideService } from 'ngx-joyride';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'team-rogue';

  constructor(private readonly joyrideService: JoyrideService) { }

  ngOnInit(): void {

    this.joyrideService.startTour(
      { steps: ['1', '2','3','4','5'] } // Your steps order
  );
      
  }


}
