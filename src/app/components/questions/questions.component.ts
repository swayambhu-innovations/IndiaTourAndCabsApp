import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {

  constructor() { }
  Questions=[
    {
      qn: "What is the best way to travel to the airport?",
      ans: "The best way to travel to the airport is by taxi. You can also use the bus or the train, but these are not as convenient as the taxi. You can also use the bus or the train, but these are not as convenient as the taxi."
    },
    {
      qn: "Best way to travel to the airport?",
      ans: "The best way to travel to the airport is by taxi. You can also use the bus or the train, but these are not as convenient as the taxi. You can also use the bus or the train, but these are not as convenient as the taxi."
    },
    {
      qn: "My Question?",
      ans: "TAnswers is by taxi. You can also use the bus or the train, but these are not as convenient as the taxi. You can also use the bus or the train, but these are not as convenient as the taxi."
    
    },
    {
      qn: "What is the best way to travel to the airport?",
      ans: "The best way to travel to the airport is by taxi. You can also use the bus or the train, but these are not as convenient as the taxi. You can also use the bus or the train, but these are not as convenient as the taxi."
    },
    {
      qn: "Best way to travel to the airport?",
      ans: "The best way to travel to the airport is by taxi. You can also use the bus or the train, but these are not as convenient as the taxi. You can also use the bus or the train, but these are not as convenient as the taxi."
    },
  
    
  ]
  ngOnInit() {}

}
