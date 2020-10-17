import {Component, OnInit} from '@angular/core';
// let numberOfColors =1;
@Component({
  selector: 'app-color',
  templateUrl: './eachColor.component.html',
  styleUrls: ['./eachColor.component.css']
})
export class EachColorComponent implements OnInit{
  colorCode = '#000000' ;
  // backgroundColor = '';
  specificName(): string{
    // @ts-ignore
    return ntc.name(this.colorCode)[1].toString();
  }
  setColorRandomly(): void {
    this.colorCode = '#' + Math.floor(Math.random() * 16777215).toString(16);
    if ( this.colorCode.length < 7){
      this.setColorRandomly();
    }
    // this.backgroundColor = 'background-color:' + this.colorCode.toString() + ';';
  }
  ngOnInit(): void {
    this.setColorRandomly();
    // console.log(this.colorCode);
  }
  // setColor(): void {
  //   this.backgroundColor = 'background-color:' + this.colorCode.toString() + ';';
  // }
   changeColor(event): void{
      if ( (event.length >= 3) && (event.length <= 7)){
        this.colorCode = event.toString();
        // this.setColor();
        // console.log(this.colorCode);
      }
  }
}
