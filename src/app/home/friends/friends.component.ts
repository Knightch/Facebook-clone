import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  requests = [{
    "profilePath": "https://scontent.fblr1-7.fna.fbcdn.net/v/t39.30808-1/326977803_1846915945682030_7218909257602501042_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p270x270_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=1174&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fblr1-7.fna&_nc_cat=106&_nc_ohc=DdqhBK4um1IAX_9EipI&ccb=1-7&_nc_sid=dbb9e7&oh=00_AfDY_z9ZlG96coCtISL-uH3IrtKlq_be_MA1DGiPB5TBhQ&oe=6418541B",
    "name": "Himansu Kumar Mahto"
  },
  {
    "profilePath": "https://scontent.fblr1-7.fna.fbcdn.net/v/t39.30808-1/279132020_452587236667903_7612623897763595793_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p270x270_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=1174&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fblr1-7.fna&_nc_cat=110&_nc_ohc=ZahkCr71YeYAX_ehTgs&ccb=1-7&_nc_sid=dbb9e7&oh=00_AfCfOmcrOXm6GVigZQ_NyPFW6A-xk4xjKqXqnT81Ms5Irw&oe=641849F1",
    "name": "Prem Bhagat"
  },
  {
    "profilePath": "https://scontent.fblr1-8.fna.fbcdn.net/v/t1.6435-1/143231917_3447369062058610_8838400730839523670_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p270x270_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=1174&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fblr1-8.fna&_nc_cat=101&_nc_ohc=OsxL84J3g0EAX-EzTSY&ccb=1-7&_nc_sid=dbb9e7&oh=00_AfCvd8H0SEYbW6mxeCEy3iCQ1Zruq31S1UDUhgnaPlW07Q&oe=64183171",
    "name": "Sanjeev Kumar Pandey"
  },
  {
    "profilePath": "https://scontent.fblr1-6.fna.fbcdn.net/v/t39.30808-1/320943575_684057033095992_7327638401529263647_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p270x270_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=1174&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fblr1-6.fna&_nc_cat=102&_nc_ohc=aeZnhNeZ9tIAX8A81l5&ccb=1-7&_nc_sid=dbb9e7&oh=00_AfANlJWUWLvuhjWgzdSo-l1xmQNH3k4RcsupdIZJ6Aej-g&oe=64183D03",
    "name": "Madan Singh"
  },
  {
    "profilePath": "https://scontent.fblr1-4.fna.fbcdn.net/v/t39.30808-1/328097227_2594881020652409_3598913329271266462_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p270x270_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=1174&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fblr1-4.fna&_nc_cat=108&_nc_ohc=5LEm_zm66ewAX-m6d38&ccb=1-7&_nc_sid=dbb9e7&oh=00_AfA5kvWpACxjfN5icaQZcj_JilXR14jrUTxT00Q0ljixKg&oe=64183297",
    "name": "Sachin Gond"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
