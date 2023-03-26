import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  letter = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = "";

  onChangeInput(event: any) {
    const parsedValue = parseInt(event.target.value);

    if (!isNaN(parsedValue)) {
      this.letter = parsedValue
    }
  }

  onChangeLetters() {
    this.includeLetters = !this.includeLetters
  }
  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers
  }
  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols
  }

  onButtonClick() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    let validCharacters = ""
    if (this.includeLetters) {
      validCharacters += letters
    }
    if (this.includeNumbers) {
      validCharacters += numbers
    }
    if (this.includeSymbols) {
      validCharacters += symbols
    }

    let genPassword = ""
    for (let i = 0; i < this.letter; i++) {
      let index = Math.floor(Math.random() * validCharacters.length)
      genPassword += validCharacters[index]
    }

    this.password = genPassword
  }

}
