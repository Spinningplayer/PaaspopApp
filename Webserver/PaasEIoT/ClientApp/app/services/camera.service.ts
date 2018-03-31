import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { env } from '../environments/env';
import { Camera } from '../models/camera.model'

@Injectable()
export class CameraService{
    private headers: Headers = new Headers({'content-type':'application/json'});
    private url = env.url + '/cameras/';

    private fakeCameras = [
        new Camera(65),
        new Camera(20),
        new Camera(88),
        new Camera(20),
        new Camera(60),
        new Camera(90)
    ];

    constructor(private http: Http) {}

    public getAverages(): Promise<Camera[]> {

        return new Promise<any>(() => {
            return this.fakeCameras;
        })

        // return this.http.get(
        //     this.url,
        //     {headers: this.headers})
        //     .toPromise()
        //     .then(response => {
        //         return response.json() as Camera[];
        //     })
        //     .catch(err => console.log(err));
    }

    // public getAverageByCamera(id: number): Promise<Camera> {
    //     return this.http.get(
    //         this.url + id,
    //         {headers: this.headers})
    //         .toPromise()
    //         .then(response => {
    //             return response.json() as Camera;
    //         }).catch(err => console.log(err));
    // }


}