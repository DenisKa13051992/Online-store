// import {IDataProducts} from '../interface/interface';
// import {IDataProduct} from '../interface/interface';
import {dataProducts} from './dataProducts';

class Model {
  IdataProduct = dataProducts.products;
  newIdataProduct = this.IdataProduct;

  getFinalData(){
    return this.newIdataProduct;
  }

  StartOrResetFilters(){
    return this.newIdataProduct = this.IdataProduct;
  }

  getDataById(idNumb:number){
    return this.newIdataProduct.filter(item => item.id === idNumb)
  }

  getDataFilterByCategory(category:string){
    return this.newIdataProduct = this.newIdataProduct.filter(item => item.category == category);
     
  }

  getDataFilterByBrand(brand:string){
    return this.newIdataProduct = this.newIdataProduct.filter(item => item.brand == brand);
     
  }

  getDataFilterByPrice(priceMin:number, priceMax:number){
    // if (priceMin && priceMax){this.newIdataProduct = this.newIdataProduct.filter(item => item.price >= priceMin && item.price <= priceMax)}
    // else if (!priceMin && priceMax){this.newIdataProduct = this.newIdataProduct.filter(item => item.price <= priceMax)}
    // else if (priceMin && !priceMax){this.newIdataProduct = this.newIdataProduct.filter(item => item.price >= priceMin)}

    this.newIdataProduct = this.newIdataProduct.filter(item => item.price >= priceMin && item.price <= priceMax)
    return this.newIdataProduct;
  } 

  getDataFilterByStock(stockMin:number, stockMax:number){
    // if (stockMin && stockMax){this.newIdataProduct = this.IdataProduct.filter(item => item.price >= stockMin && item.price <= stockMax)}
    // else if (!stockMin && stockMax){this.newIdataProduct = this.IdataProduct.filter(item => item.price <= stockMax)}
    // else if (stockMin && !stockMax){this.newIdataProduct = this.IdataProduct.filter(item => item.price >= stockMin)}

    this.newIdataProduct = this.IdataProduct.filter(item => item.price >= stockMin && item.price <= stockMax)
    return this.newIdataProduct
  } 

  getDataFilterBySearch(searched:string){
     return this.newIdataProduct = this.newIdataProduct.filter(item => item.title.toUpperCase().includes(searched.toUpperCase()) || item.description.toUpperCase().includes(searched.toUpperCase()) || item.brand.toUpperCase().includes(searched.toUpperCase()) || item.category.toUpperCase().includes(searched.toUpperCase()) || String(item.price).includes(searched) || String(item.discountPercentage).includes(searched) || String(item.rating).includes(searched) || String(item.stock).includes(searched));
  }

  resetSearch(){
    return this.newIdataProduct;
  }


  getDataSortByNameIncrease(){
    this.newIdataProduct.sort((a, b) => a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1)
    return this.newIdataProduct
  }

  getDataSortByNameDecrease(){
    this.newIdataProduct.sort(((a, b) => a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1)).reverse()
    return this.newIdataProduct
  }

  getDataSortByPriceIncrease(){
    this.newIdataProduct.sort(((a, b) => a.price > b.price ? 1 : -1))
    return this.newIdataProduct
  }

  getDataSortByPriceDecrease(){
    this.newIdataProduct.sort(((a, b) => a.price > b.price ? 1 : -1)).reverse()
    return this.newIdataProduct
  }

  getDataSortByRatingIncrease(){
    this.newIdataProduct.sort(((a, b) => a.rating > b.rating ? 1 : -1))
    return this.newIdataProduct
  }

  getDataSortByRatingDecrease(){
    this.newIdataProduct.sort(((a, b) => a.rating > b.rating ? 1 : -1)).reverse()
    return this.newIdataProduct
  }
  
  getDataSortByDiscountIncrease(){
    this.newIdataProduct.sort(((a, b) => a.discountPercentage > b.discountPercentage ? 1 : -1))
    return this.newIdataProduct
  }

  getDataSortByDiscountDecrease(){
    this.newIdataProduct.sort(((a, b) => a.discountPercentage > b.discountPercentage ? 1 : -1)).reverse()
    return this.newIdataProduct
  }

  getDataByIdForBasket(idNumb:number[]){
    return this.newIdataProduct.filter(item => {for (const i of idNumb) {if (item.id === i) return true}})
  }

}

export default Model