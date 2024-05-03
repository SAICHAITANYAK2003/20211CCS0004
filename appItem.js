import { Component } from "react"
const eCommercelist=[
    {
      productName:'laptop 1',
      price:2236,
      rating:4.7,
      discount:63,
      availability:'yes'
    },
    {
      productName:'laptop 13',
      price:1244,
      rating:4.5,
      discount:45,
      availability:  'out-of-stock'
    },
    {
      productName:'laptop 3',
      price:9102,
      rating:4.44,
      discount:68,
      availability: 'out-of-stock'
    },
    {
      productName:'laptop 11',
      price:2652,
      rating:4.12,
      discount:70,
      availability:'yes'
    },
    {
      productName:'laptop 4',
      price:1258,
      rating:3.8,
      discount:33,
      availability:'yes'
    },
    {
      productName:'laptop 4',
      price:1258,
      rating:3.8,
      discount:33,
      availability:'yes'
    },
    {
      productName:'laptop 13',
      price:8686,
      rating:3.22,
      discount:24,
      availability: 'out-of-stock'
    },
    {
      productName:'laptop 14',
      price:9254,
      rating:3,
      discount:56,
      availability:'yes'
    },
    {
      productName:'laptop 1',
      price:1059,
      rating:2.77,
      discount:21,
      availability:'yes'
    },
    {
      productName:'laptop 10',
      price:7145,
      rating:2.74,
      discount:15,
      availability:'yes'
    },
    {
      productName:'laptop 10',
      price:4101,
      rating:2.67,
      discount:37,
      availability:  'out-of-stock'
    },
  ]

class appItem extends Component{
  state={
    eCommercelistdata:eCommercelist[1].price
  }

   onGetvalue=()=>{
   const filteritem=eCommercelist.filter(eachitem=>eachitem.price>=1000)
    return filterItem;
   }
    
    render(){
        const {eCommercelist}=this.state;
        const{filteritem}=this.state;
        const{productName,price,rating,discount,availability}=eCommercelist
        return(

          <div>
            <h1 className="heading">{productName}</h1>
            <p className="price">{price}</p>
            
            <p className="rating">{rating}</p>
            <p className="disconut">{discount}</p>
            <p className="availability">{discount}</p>
            <button type='submit" onClick={this.onGetvalue}>{fitleritems}</button>
            
          </div>

          
        )
    }
}

export default appItem
