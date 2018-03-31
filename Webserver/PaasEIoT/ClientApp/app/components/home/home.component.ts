import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CameraService } from "../../services/camera.service";
import { Camera } from "../../models/camera.model";
import {env} from "../../environments/env";

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
    @ViewChild("resto", {read: ElementRef}) resto: ElementRef;
    @ViewChild("theatre", {read: ElementRef}) theatre: ElementRef;

    private cameraFeedback: Camera[];
    private colors: String[];

    constructor(private cameraService: CameraService) {}

    ngOnInit() {
        this.cameraService.getAverages()
            .then(response => {
                this.cameraFeedback = response;
                console.log(this.cameraFeedback[0].density)
            }).then(() => {

            var i = 0;
            for (var c of this.cameraFeedback) {
                if(c.density > env.med) {
                    if(c.density > env.high) {
                        this.colors[i] = env.red;
                    } else {
                        this.colors[i] = env.orange;
                    }
                } else {
                    this.colors[i] = env.green;
                }
                i++
            }
            console.log("test");
            console.log(this.colors);
        });

        this.phoenix.nativeElement.style.backgroundColor = "#FF0000";
        this.apollo.nativeElement.style.backgroundColor = "#ff8800";
        this.jack.nativeElement.style.backgroundColor = "#FF0000";
        this.entrance.nativeElement.style.backgroundColor = "#ff8800";
        this.resto.nativeElement.style.backgroundColor = "#00FF00";
        this.theatre.nativeElement.style.backgroundColor = "#00FF00";
    }
}
