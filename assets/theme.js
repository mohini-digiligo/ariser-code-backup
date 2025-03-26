
class ComplementaryAtcButton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click',this._addProduct.bind(this))
  }
  _addProduct(){
    this.classList.add('btn--loading');
    var formData = new FormData();
    formData.append("id",this.dataset.variant);
    fetch(window.Shopify.routes.root + 'cart/add.js', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then((data) =>{
      this.classList.remove('btn--loading');
      if(data.status) return;
      document.dispatchEvent(new CustomEvent('ajaxProduct:added'));
   });
  }
}

if (!customElements.get('complementary-atc-button')) {
  customElements.define('complementary-atc-button', ComplementaryAtcButton);
}

  class CartRecommendations extends HTMLElement {
    constructor() {
      super();
      this.el = this;
      this.url = this.dataset.url;
      this.intent = this.dataset.intent;
      this.placeholder = this.querySelector('.product-recommendations-placeholder');
      this.productResults =  this.querySelector('.grid-product');
      this.sectionId = this.dataset.sectionId;
      this.blockId = this.dataset.blockId;
    }
  
    connectedCallback() {
        this.slideshow = this.querySelector('[data-slideshow]');
        if (this.slideshow) {
          this.setupSlider();
        }
    }
  
    setupSlider() {
      const controlType = this.slideshow.dataset.controls;
      const perSlide = parseFloat(this.slideshow.dataset.perSlide);
      const count = parseFloat(this.slideshow.dataset.count);
  
      let prevNextButtons = false;
      let pageDots = true;
  
      if (controlType === 'arrows') {
        pageDots = false;
        prevNextButtons = true;
      }
  
      if (perSlide < count) {
        this.flickity = new theme.Slideshow(this.slideshow, {
          prevNextButtons,
          pageDots,
          adaptiveHeight: true,
          wrapAround: false,
        });
        setTimeout(function(){
            window.dispatchEvent(new Event('resize'),true)
          },3000)
      }
    }
  }
  
  customElements.define('cart-recommendations', CartRecommendations);

  class CartItemOptions extends HTMLElement {
    constructor() {
      super();
      this.popup = this.querySelector("template");
      this.cartPage = this.classList.contains('cartPageItem');
      if(this.popup){
        this.querySelector('[data-cart-popup-open]').addEventListener('click',function(){
         
          let popUpHtml = this.popup.content.cloneNode(true);
          // popUpHtml.classList.add('activeCartPopUp');
          
          document.body.append(popUpHtml);
          this.newPopup = document.querySelector('.activeCartPopUp');
          if(this.newPopup){
          this.newPopup.style.display = 'flex';
            
            if (typeof theme !== "undefined" && theme.sections) {
  theme.sections.register('product', theme.Product, this.newPopup);
} else {
  console.warn("Theme object is not available.");
}
            this.popUpClose = this.newPopup.querySelector('[data-cart-popup-close]');
            if(this.popUpClose){
              this.popUpClose.addEventListener('click',function(event){
                event.preventDefault();
                this.newPopup.style.display = 'none';
                this.newPopup.remove();
              }.bind(this));
            }
            this.submitBtn = this.newPopup.querySelector('[data-submit-btn]');
            if(this.submitBtn){
            this.submitBtn.addEventListener('click',function(event){
              event.preventDefault();
              this.changeCartItems();
            }.bind(this));
          }
          }
        }.bind(this));
        
      }
    }
    changeCartItems(){
        let currentVariant = this.dataset.key,
          newVariant = this.dataset.newVariant;
        
        let updates = {};
          updates[currentVariant] = 0;
          updates[newVariant] = parseInt(this.dataset.quantity);
        fetch(window.Shopify.routes.root + 'cart/update.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ updates })
        })
        .then(response => {
          return response.json();
        })
        .then((data) =>{
          if(data.status) return;
          if(this.cartPage){
          document.dispatchEvent(new CustomEvent('cart:build'));
          }else{
          document.dispatchEvent(new CustomEvent('ajaxProduct:added')); 
          }
          if(this.newPopup){
            setTimeout(function(){
                this.newPopup.style.display = 'none';
                this.newPopup.remove();
            }.bind(this),1000)
          }
       })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
    updateBtn(status){
      if(this.submitBtn){
        if(status == true){
          this.submitBtn.removeAttribute('disabled')
        }
        else{
          this.submitBtn.setAttribute('disabled','true')
        }
      }
    }
  
  }
  
  customElements.define('cart-item-options', CartItemOptions);


  class CartGiftWrapping extends HTMLElement {
    constructor() {
      super();
      this.variant = this.dataset.giftWrapId;
      this.cartSize = parseInt(this.dataset.cartItemsSize);
      this.giftWrapStatus = parseInt(this.dataset.giftWrapsInCart);
      this.cartPage = this.closest('[data-gift-wrap]')?.classList.contains('cart-page');
      if(this.cartSize == 1 && this.giftWrapStatus > 0 ){
        this.UpdateGiftWrap(0);
      }
      this.addEventListener('click',function(event){
        event.preventDefault();
        this.classList.add('disabled');
        if(this.giftWrapStatus > 0){
              this.UpdateGiftWrap(0);
        }else{
              this.UpdateGiftWrap(1);          
        }
      }.bind(this));
    }
    UpdateGiftWrap(quantity){
        
        let updates = {};
          updates[this.variant] =quantity;
        fetch(window.Shopify.routes.root + 'cart/update.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ updates })
        })
        .then(response => {
          return response.json();
        })
        .then((data) =>{
          if(data.status) return;
          if(this.cartPage){
          document.dispatchEvent(new CustomEvent('cart:build'));
          }else{
          document.dispatchEvent(new CustomEvent('ajaxProduct:added')); 
          }
       })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  
  }
  
  customElements.define('cart-gift-wrapping', CartGiftWrapping);

  class CustomSlider extends HTMLElement {
    constructor() {
      super();
      this.args = {
        adaptiveHeight: false,
        autoPlay: false,
        cellAlign:"left",
        pageDots: false,
        pauseAutoPlayOnHover: false,
        prevNextButtons: true,
        contain:true,
        resize:true,
        ImagesLoaded: true
      };
      
      this.slideshow = new Flickity(this, this.args);
      window.addEventListener('resize',function() {
        this.slideshow.resize();
      }.bind(this))
    }
  }
  customElements.define("custom-slider", CustomSlider);
    // var holder = document.getElementById('QuickShopHolder-' + handle);