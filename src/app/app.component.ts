import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works fine!';
}

@Component({
  selector: 'app-root-2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent2 {
  title = 'app-root-2 works fine too!';
}
