import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  currentImgIndex: number = 0;
  images: string[] = [
    './../../assets/img/place-holder0.png',
    './../../assets/img/place-holder0-1.png',
    './../../assets/img/place-holder3.png',
    './../../assets/img/product-mock3.png',
    './../../assets/img/baam-directions.png',
  ];

  selectedSegment: string = '1';

  sizes = [
    { label: 'Sample'},
    { label: '250g'},
    { label: '1lb'},
    { label: '3lb'},
    { label: '5lb'},
    { label: '10lb'}
  ];
  selectedSize: string = '';
  constructor() {}

  ngOnInit() {
    this.selectedSize = this.sizes[0].label
  }



  prevImage() {
    this.currentImgIndex = (this.currentImgIndex > 0) ? this.currentImgIndex - 1 : this.images.length - 1;
  }

  nextImage() {
    this.currentImgIndex = (this.currentImgIndex < this.images.length - 1) ? this.currentImgIndex + 1 : 0;
  }

  onSegmentChanged(event: any) {
    this.selectedSegment = event.detail.value; // Update the selected segment
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }
}
