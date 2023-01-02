// import { dataProducts } from '../../model/dataProducts';
import { Header } from '../header';
import { Card } from '../card';
import { Filters } from '../filters'
import { Footer } from '../footer';
import { Search } from '../search';
import { IDataProduct, IDataProducts, IFiltersProps } from '../../interface/interface';
import { Sort } from '../sort';
import { Cart } from '../cart';
import { ProductDetails } from '../productDetails';
import { Page404 } from '../page404';
import { Template } from 'webpack';
import { Controller } from '../../controller';
import Model from '../../model/model';





export class Main {
   
// <<<<<<< HEAD
    card: Card;  
    filters: Filters;
    sort: Sort;
    search: Search;
    cart: Cart;
    productDetails: ProductDetails;
    page404: Page404;
    settingsMain: "/cart" | "/products" | "/productDetails" | "/page404";
    dataProducts: IDataProduct[];
    filterProps: IFiltersProps;
    mod = new Model();

    constructor(dataProducts: IDataProduct[], filterProps: IFiltersProps) {
    this.dataProducts = dataProducts;
    this.filterProps = filterProps;
    this.card = new Card(this.dataProducts[0]);  
    this.filters = new Filters(this.filterProps);
    this.sort = new Sort();
    this.search = new Search();

    this.cart = new Cart(this.mod.getDataByIdForBasket([1, 2, 3, 4, 5, 6, 12, 18, 25, 36, 45]));
    this.productDetails = new ProductDetails(this.dataProducts[0]);
    this.page404 = new Page404()
    this.settingsMain = "/products";
    }
// =======
//     card: Card = new Card(dataProducts.products[0]);  
//     filters: Filters = new Filters(filterProps);
//     sort: Sort = new Sort();
//     search: Search = new Search();
    
//     cart: Cart = new Cart(this.mod.getDataByIdForBasket([1, 2, 3, 4, 5, 6, 12, 18, 25, 36, 45]));
//     productDetails: ProductDetails = new ProductDetails(dataProducts.products[71]);
//     page404: Page404 = new Page404()
//     settingsMain: "/cart" | "/products" | "/productDetails" | "/page404" = "/products";
// >>>>>>> denisdev


render() {

    const productsView = `${this.search.render()}
                            <div class = "d-flex flex-row mb-3 container">
                            ${this.filters.render()}
                                <div class="container">
                                    ${this.sort.render()}
                                    <div class = "products">                                         
                                        ${this.dataProducts
                                            .map(item=>{
                                            this.card.props = item;
                                            return `${this.card.render()}`
                                            }).join("")}
                                    </div>
                                
                                </div>
                            </div> `;

    const cartView = `${this.cart.render()}`;

    const productDetails = `${this.productDetails.render()}`;

    const page404 = `${this.page404.render()}`

    let template = ``;
   
    if (this.settingsMain === '/products') {template = productsView}
    if (this.settingsMain === '/cart') {template = cartView}
    if (this.settingsMain === '/productDetails') {template = productDetails}
    if (this.settingsMain === '/page404') {template = page404}
            return `<main class = "container main">
                ${template}                                      
                </main>`;
}


reRender () {
     (document.querySelector(".main") as HTMLElement).innerHTML = this.render();
    if (this.settingsMain === '/cart') {this.cart.updateRander();}

}
reRenderProducts () {
    (document.querySelector(".products") as HTMLElement).innerHTML = this.dataProducts
                                                                        .map(item=>{
                                                                        this.card.props = item;
                                                                        return `${this.card.render()}`
                                                                        }).join("");

}

}