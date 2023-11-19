import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'grot-mini-apps',
  templateUrl: './mini-apps.component.html',
  styleUrl: './mini-apps.component.scss',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
        color: '#2fde32'
      })),
      state('closed', style({
        opacity: 0.8,
        color: '#2f8cde'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('1s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ],
})
export class MiniAppsComponent {
  isOpen = false;
  open(){
    this.isOpen = true;
  }
  close(){
    this.isOpen = false;
  }
}
