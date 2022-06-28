const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

//PROBLEM STATEMENTS:

// 1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list
// of Products considering Product Name as Key.


function getUniqueProductCount(){
    let obj = {};
    for(let i=0; i<listOfProducts.length; i++){
        let el= listOfProducts[i]
        if(obj[el.productName]===undefined){
            obj[el.productName]=1
        } else{
            obj[el.productName]=obj[el.productName]+1
        }
    }
    return obj
}
console.log(getUniqueProductCount())

// 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the
// productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.


function getUniquePrducts(){
    let sum=listOfProducts.reduce(function(acc, curr) {
        let findIndex = acc.findIndex(item => item.productName === curr.productName);
      
        if (findIndex === -1) {
          acc.push(curr)
        } else {
      
          acc[findIndex].quantity += curr.quantity
        }
        return acc;
      }, [])
      console.log(sum)
      
      
}
console.log(getUniquePrducts())

