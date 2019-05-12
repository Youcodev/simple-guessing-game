import { Component, OnInit } from '@angular/core';
import { Player } from '../Player';

@Component({
  selector: 'app-greeting-and-guessing',
  templateUrl: './greeting-and-guessing.component.html',
  styleUrls: ['./greeting-and-guessing.component.css']
})
export class GreetingAndGuessingComponent implements OnInit {
  player: Player = {
    firstName: '',
    lastName: '',
    chosenNumber: null
  };
  
  greetingMsg: string = '';
  guessingMsg: string = '';

  constructor() { }

  ngOnInit() {
  }

  greeting(): void {
  this.greetingMsg = 'Hello';
    setTimeout(() => { 
      this.guessingMsg = ' ';
    }, 1000);
  }

  guessing(): void {
    let randNum = Math.floor(Math.random() * 10) + 1;
    if (this.player.chosenNumber <= 0 || this.player.chosenNumber > 10)
      alert("You must enter a number between 1 and 10 !");
    else {
      if (randNum == this.player.chosenNumber)
      this.guessingMsg = 'You won, Congrats !!';
      else
      this.guessingMsg = 'You lost :( Try again ... The generated number was ' + randNum;
    }
  }

}
