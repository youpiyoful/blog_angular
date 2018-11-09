import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // lastUpdate = new Promise((resolve, reject) => {
  //   const date = new Date();
  //   setTimeout(
  //     () => {
  //       resolve(date);
  //     }, 2000
  //   );
  // });

  posts = [
    {
      title: 'test1',
      content: 'quid multos tamen sunt illum duis multos dolor quorum malis',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'test2',
      content: 'noster cillum ipsum malis malis quid aute quae aliqua magna',
      loveIts: 0,
      created_at: Date
    },
    {
      title: 'test3',
      content: 'veniam nulla quis cillum culpa labore labore nulla malis malis',
      loveIts: 2,
      created_at: Date
    }
  ];
}
