import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
Languages = [

    {
      name: 'English',
      code: 'en',
    },
    {
      name: 'Arabic',
      code: 'ar',
    },
    {
      name: 'French',
      code: 'fr',
    },
    {
      name: 'German',
      code: 'de',
    },
    {
      name: 'Italian',
      code: 'it',
    },
    {
      name: 'Japanese',
      code: 'ja',
    },
  ];

  constructor() { }


  ngOnInit() {}

}
