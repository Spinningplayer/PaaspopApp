import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
    colorPhoenix: string = "#FFFFFF";
    @ViewChild("phoenix", {read: ElementRef}) phoenix: ElementRef;
    @ViewChild("apollo", {read: ElementRef}) apollo: ElementRef;
    @ViewChild("jack", {read: ElementRef}) jack: ElementRef;
    @ViewChild("entrance", {read: ElementRef}) entrance: ElementRef;

    constructor() {}

    ngOnInit() {
        // this.phoenix.nativeElement.style.backgroundColor = "#000000";
        this.apollo.nativeElement.style.backgroundColor = "#00FF00";
        this.jack.nativeElement.style.backgroundColor = "#FF0000"
        this.entrance.nativeElement.style.backgroundColor= "#F0F000";
    }
}
