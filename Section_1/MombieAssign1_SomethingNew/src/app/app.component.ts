import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MombieAssign1_SomethingNew';

  data: {
    text: string;
    img: string;
  }[] = [
    {
      text: 'Television Boardcast',
      img: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      text: 'Print Boardcast',
      img: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      text: 'Online Magazines',
      img: 'https://images.pexels.com/photos/8938733/pexels-photo-8938733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      text: 'Radio Boardcast',
      img: 'https://images.pexels.com/photos/682082/pexels-photo-682082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      text: 'Magazine',
      img: 'https://images.pexels.com/photos/1021873/pexels-photo-1021873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      text: 'Photo Journalism',
      img: 'https://images.pexels.com/photos/3886870/pexels-photo-3886870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      text: 'Podcasts',
      img: 'https://images.pexels.com/photos/7383471/pexels-photo-7383471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      text: 'Online Newspaper',
      img: 'https://images.pexels.com/photos/4185957/pexels-photo-4185957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      text: 'RSS Reader',
      img: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
}
