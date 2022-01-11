import { Component, OnInit } from '@angular/core';
import { Url } from '../models/Url';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-url-details',
  templateUrl: './url-details.component.html',
  styleUrls: ['./url-details.component.css']
})
export class UrlDetailsComponent implements OnInit {

  urls: any;
  warningmessage: any;
  successmsg: any;
  errormsg: any;
  id: any;
  url: Url = new Url();

  constructor(private urlservice: UrlService) { }

  ngOnInit(): void {
    this.GetAllUrls();
  }


  AddUrl() {
    this.urlservice.addUrl(this.url).subscribe(
      data => {
        if (data)
          this.GetAllUrls()
          this.successmsg = "Url successfully added !!";
      },
      error => {
        this.errormsg = " Url length is too long for it to be added.Please shorten a bit";
        console.log(error);
      }
    );
  }

  GetAllUrls() {
    this.urlservice.getUrls().subscribe(
      data => {
        this.urls = data;
      },
      error => console.log(error));
  }

  UpdateUrl(urlObj: Url) {
    this.urlservice.updateUrl(urlObj).subscribe(data => { },
      error => console.log(error));
  }

  OnSubmit() {
    if (this.url.longUrl != "") {
      this.errormsg = "";
      this.successmsg = "";
      let len = this.checkIfUrlExists();
      if (len < 1) {
        this.CreateShortUrl();
        this.AddUrl();
      }
      else {
        this.warningmessage = "This Url already exists with Url Id " + this.id;
      }
    }
    else {
      this.errormsg = "* Please enter the long Url *"
    }
  }

  

  CreateShortUrl() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    let length = 10;
    let initString = "https://localhost:8080/";
    this.url.shortUrl = initString;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * length));
    }
    if (result != undefined && result != "" && result != null) {

      this.url.shortUrl = initString.concat(result.trim());
    }

  }

  checkIfUrlExists() {
    let enteredUrl = this.url.longUrl;
    let length = 0;
    if (this.urls && this.urls.length != 0) {
      let data = this.urls.filter((url: Url) => (url.longUrl === enteredUrl));
      if (data != null && data != undefined && data != "") {
        length = data.length;
        this.id = data[0].urlid;
      }
    }
    return length;
  }

  incrCount(urlObj: Url) {
    urlObj.clickCount = urlObj.clickCount + 1;
    this.UpdateUrl(urlObj);
  }

  reset() {
    this.warningmessage = "";
    this.successmsg = "";
    this.url.longUrl = "";
    this.url.shortUrl = "";
    this.errormsg = "";
  }

}
