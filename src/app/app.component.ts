import { Component, HostListener } from '@angular/core';

export interface Article{
  price : number;
  quantity : number;
  imageName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public screenSize = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if(event.target.innerWidth < 700){
      this.screenSize =  window.innerWidth;
      this.carouselIsOpen = false;
    }
    else{
      this.screenSize =  window.innerWidth;
    }
  }

  public quantity = 1;
  public articlePrice= 150;
  public currentImageIndex= 1;
  public cartArticleNumber = 0;
  public articleImageSrc = "../assets/images/image-product-1.jpg";

  hamburgerIsOpen = false;
  cartIsOpen = false
  carouselIsOpen =false;
  
  public cartArticles : Article[] = []
  
  toggleMenu(){
      this.hamburgerIsOpen = !this.hamburgerIsOpen;
      if(this.cartIsOpen){
        this.cartIsOpen = false;
      }
  }

  toggleCart(){
    this.cartIsOpen = !this.cartIsOpen;
  }

  closeModal(){
    this.cartIsOpen = false;
    this.hamburgerIsOpen = false;
  }
  
  changeImage(value:number){
      this.articleImageSrc = "../assets/images/image-product-" + value + ".jpg";
  }
  
  addItemToCart(){
      if(this.quantity>0){
          this.cartArticles.push(
              {
                  price:this.articlePrice,
                  quantity:this.quantity,
                  imageName: '../assets/images/image-product-' + 4 + '.jpg'
              }
          );
          this.cartArticleNumber++;
      }
      
  }

  deleteArticleFormCart(index:number){
    this.cartArticles.splice(index,1)
  }
  
  increment(){
      this.quantity++;
  }
  
  decrement(){
      if(this.quantity > 1){
          this.quantity--;
      }    
  }

  previousImage(){
    if(this.currentImageIndex == 1){
      this.currentImageIndex = 4;
    }
    else{
      this.currentImageIndex--;
    }
    this.articleImageSrc = "../assets/images/image-product-"+  this.currentImageIndex +".jpg";
  }
  nextImage(){
    if(this.currentImageIndex == 4){
      this.currentImageIndex = 1;
    }
    else{
      this.currentImageIndex++;
    }
    this.articleImageSrc = "../assets/images/image-product-"+  this.currentImageIndex +".jpg";
  }

  toggleCarousel(){
    console.log(this.screenSize);
    if(this.screenSize > 700){
      this.carouselIsOpen = !this.carouselIsOpen
    }
    
  }


}
