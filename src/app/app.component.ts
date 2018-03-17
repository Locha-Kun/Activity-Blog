import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  posts = [
    {
     title: '今日はいい天気です',
     content: '昔々あるところに、叔父さんはとても古いです。。。ある日鬼さまは村に行きましたそして彼は。。。秘密だ昔々あるところに、叔父さんはとても古いです。。。ある日鬼さまは村に行きましたそして彼は。。。秘密だ昔々あるところに、叔父さんはとても古いです。。。ある日鬼さまは村に行きましたそして彼は。。。秘密だ',
     loveIts: 1,
     created_at: '14/03/18, 10:10 PM'
    },
    {
     title: 'Ordo Mementum lux',
     content: 'ed laeditur hic coetuum magnificus splendor levitate paucorum incondita, ubi nati sunt non reputantium, sed tamquam indulta licentia vitiis ad errores lapsorum ac lasciviam. ut enim Simonides lyricus docet, beate perfecta ratione vieturo ante alia patriam esse convenit gloriosamed laeditur hic coetuum magnificus splendor levitate paucorum incondita, ubi nati sunt non reputantium, sed tamquam indulta licentia vitiis ad errores lapsorum ac lasciviam. ut enim Simonides lyricus docet, beate perfecta ratione vieturo ante alia patriam esse convenit gloriosam.',
     loveIts: -1,
     created_at: '15/03/18, 9:9 PM'
    },
    {
    title: 'jabala',
     content: 'jabalajabalajabalaed laeditur hic coetuum magnificus splendor levitate paucorum incondita, ubi nati sunt non reputantium, sed tamquam indulta licentia vitiis ad errores lapsorum ac lasciviam. ut enim Simonides lyricus docet, beate perfecta ratione vieturo ante alia patriam esse convenit gloriosamed laeditur hic coetuum magnificus splendor levitate paucorum incondita, ubi nati sunt non reputantium, sed tamquam indulta licentia vitiis ad errores lapsorum ac lasciviam. ut enim Simonides lyricus docet, beate perfecta ratione vieturo ante alia patriam esse convenit gloriosam',
     loveIts: 0,
     created_at: '14/03/18, 4:4 AM'
    },
  ];