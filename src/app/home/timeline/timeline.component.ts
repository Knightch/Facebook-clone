import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  timelineDetails=[
    {
      'name':'Raj Benarjee',
      'profilePicPath':'assets/jpg/rajProfile.jpg',
      'time':'10d',
      'aboutPost':'',
      'postMediaPath':'assets/jpg/meme.jpg'
    },
    {
      'name':'Subir Saha',
      'profilePicPath':'https://scontent.fblr1-4.fna.fbcdn.net/v/t39.30808-1/322967672_865794654669563_1602530336256771735_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p144x144_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=1174&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fblr1-4.fna&_nc_cat=108&_nc_ohc=Ya4hcWLlFgYAX-a0Cnw&ccb=1-7&_nc_sid=7206a8&oh=00_AfAHp_eM_1oHykrv-K0T3ntL_QDzr8Hged_cLU_iesgclg&oe=64182EC9',
      'time':'4d',
      'aboutPost':'',
      'postMediaPath':'https://scontent.fblr1-5.fna.fbcdn.net/v/t39.30808-6/330913327_862392011660840_2229531263050754636_n.jpg?stp=dst-jpg_e15_q60_s1170x880_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=1174&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fblr1-5.fna&_nc_cat=103&_nc_ohc=onyWzGEyeycAX-P4Knr&ccb=1-7&_nc_sid=730e14&oh=00_AfCzDcwtZ4aPv8LmDY0VgjjkvTYChVbpycVD4r1SYFMdZw&oe=641830E8'
    },
    {
      'name':'Filmymantra.com',
      'profilePicPath':'https://scontent.fagr1-3.fna.fbcdn.net/v/t39.30808-1/296275874_3361922827457952_6571853040337311158_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p144x144_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=2034&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fagr1-3.fna&_nc_cat=1&_nc_ohc=Bmv4oqBWcNQAX-K8mNh&ccb=1-7&_nc_sid=c6021c&oh=00_AfBE8C8XXOc-Vf-mIAP6ztF8PT3QwdMymO-l-tr3Z3VZ0w&oe=64182C7F',
      'time':'5d',
      'aboutPost':'',
      'postMediaPath':'https://scontent.fblr1-4.fna.fbcdn.net/v/t39.30808-6/330805693_1327928721320816_948271168268874314_n.jpg?stp=dst-jpg_e15_q60_s1170x1345_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=1174&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fblr1-4.fna&_nc_cat=1&_nc_ohc=jdjy8Xgh7PYAX-hmOrM&ccb=1-7&_nc_sid=8bfeb9&oh=00_AfCJ-5EncU-zSiOT4XeFLZbqLtv6COENe5YDdYHypr7l1w&oe=64182606'
    },
    {
      'name':'Rakesh Kumar',
      'profilePicPath':'https://scontent.fblr1-6.fna.fbcdn.net/v/t39.30808-1/318897864_2368212456687761_3188865759758930198_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p144x144_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=1174&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fblr1-6.fna&_nc_cat=104&_nc_ohc=8pWGzuwOzMAAX8OMHpJ&ccb=1-7&_nc_sid=7206a8&oh=00_AfANeyJ2SRHOYQX0ZM4kYVCT50ds41WgkI_MXP4_jqGCHA&oe=64181E7E',
      'time':'2d',
      'aboutPost':'',
      'postMediaPath':'https://scontent.fblr1-8.fna.fbcdn.net/v/t39.30808-6/329037228_1811120582604720_8109660236576848677_n.jpg?stp=dst-jpg_e15_q60_s1170x1650_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=1174&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fblr1-8.fna&_nc_cat=105&_nc_ohc=A1AVwB6i8FIAX-7EuNb&ccb=1-7&_nc_sid=8bfeb9&oh=00_AfAciputqzGUdlSWrxrdnDAfK95ns5CtSmGW7c6iIY3Zaw&oe=6418234B'
    },
    {
      'name':'Manoj Aditya Singh',
      'profilePicPath':'https://scontent.fblr1-6.fna.fbcdn.net/v/t39.30808-1/331005590_3478312902495105_3934085273773596918_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p144x144_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=1174&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fblr1-6.fna&_nc_cat=104&_nc_ohc=-D7Ix5jjXCEAX_8FV28&ccb=1-7&_nc_sid=7206a8&oh=00_AfC9saP0qQhmsm4xBDjAL0DZCXEFJ6ixfRBokJ4FaRO7wQ&oe=641819FD',
      'time':'17h',
      'aboutPost':'',
      'postMediaPath':'https://scontent.fblr1-7.fna.fbcdn.net/v/t39.30808-6/331128587_1197298591157626_7657606656153831576_n.jpg?stp=dst-jpg_e15_q60_s1170x1170_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=1174&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fblr1-7.fna&_nc_cat=107&_nc_ohc=swACxQ_BvkoAX-F-xfi&ccb=1-7&_nc_sid=730e14&oh=00_AfDhVCIVDvcn1rXmbKcvfXAChanMUP2WkoogLZ8n9IrKIg&oe=641831DA'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
