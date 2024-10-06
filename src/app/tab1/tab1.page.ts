import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonModal } from '@ionic/angular';

interface CartItem {
  size: string;
  flavor: string;
  quantity: number;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild('modal', { static: true }) modal!: IonModal;

  showConfirm: boolean = true;

  sizes = [
    { label: 'Sample', icon: './../../assets/icon/mnf.svg' },
    { label: '250g', icon: null },
    { label: '1lb', icon: './../../assets/icon/mnf.svg' },
    { label: '3lb', icon: './../../assets/icon/mnf.svg', disabled: true },
    { label: '5lb', icon: null },
    { label: '10lb', icon: null }
  ];

  flavors = [
    { label: 'Chocolate' },
    { label: 'Matcha Green Tea'},
    { label: 'Vanilla' },
    { label: 'Cafe Mocha', disabled: true },
    { label: 'Orange Yuzu' }
  ];

  selectedSize: string = '';
  selectedFlavor: string = '';
  quantity: number = 1;
  cart: CartItem[] = [];

  constructor(
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.selectedSize = this.sizes[0].label
    this.selectedFlavor = this.flavors[0].label
  }

  // ฟังก์ชันที่ถูกเรียกเมื่อกดปุ่ม
  breakpoint() {
    if (this.modal) {
      this.modal.initialBreakpoint = 0.85;
      this.modal.breakpoints = [0, 0.85];
      this.modal.present(); // แสดง modal
    }
  }

  toggleConfirm() {
    this.showConfirm = !this.showConfirm;
  }

  selectSize(size: string) {
    console.log('Selected size:', size);
    this.selectedSize = size;
  }

  selectFlavor(flavor: string) {
    this.selectedFlavor = flavor;
  }

  increaseQuantity() {
    console.log("123");

    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    // const newItem: CartItem = {
    //   sku: this.selectedSku,
    //   name: this.selectedItem.name,
    //   price: this.selectedItem.price,
    //   quantity: this.quantity
    // };

    // const existingItem = this.cart.find(item => item.sku === newItem.sku);
    // if (existingItem) {
    //   existingItem.quantity += newItem.quantity;
    // } else {
    //   this.cart.push(newItem);
    // }

    this.quantity = 1;
    this.presentAlert();  // Call the alert function after adding to cart
  }

  // Function to show the alert
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'เพิ่มลงตะกร้าสินค้าแล้ว'
    });

    await alert.present();

    // Close the alert after 1 second (1000 milliseconds)
    setTimeout(() => {
      alert.dismiss();
    }, 1000);
  }

}
