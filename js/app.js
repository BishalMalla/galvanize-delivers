var clickToOrder =$('.clickToOrder');
var placeOrder =$('.placeOrder');
var notification =$('.notification')
var purchases = $('.purchases');
var cost =$('.cost');
var foodName="";
var price =0;
var subtotalCost=$('.subtotalCost');
var taxCost =$('.taxCost');
var totalCost =$('.totalCost');
$('document').ready(function(event){
  var subtotalText=subtotalCost[0].children[0]
  var subtotalPrice =0;
  var taxText = taxCost[0].children[0];
  var taxPrice = 0;
  var totalText = totalCost[0].children[0];
  var totalPrice = 0;
  clickToOrder.click(function(event){
    event.preventDefault();
    var parent = $(this).parent().parent();
    foodName =parent[0].children[1].children[0].innerText;
    price = price = parent[0].children[1].children[1].innerText;
    var pPurchases =$('<p>')
    pPurchases.addClass('pPurchases');
    pPurchases.html(foodName);
    purchases.append(pPurchases);
    var pPrice =$('<p>');
    pPrice.addClass('pPrice');
    pPrice.html(price);
    cost.append(pPrice);
    subtotalPrice +=price;
    subtotalPrice = eval(subtotalPrice.replace(/\$/g,'+'));
    subtotalText.innerText=('$'+subtotalPrice);
    taxPrice=subtotalPrice*0.1;
    taxText.innerText=('$'+taxPrice.toFixed(2));
    totalPrice=subtotalPrice+taxPrice;
    totalText.innerText=('$'+totalPrice.toFixed(2));
  });
  $('form').on('submit', function (event) {
    event.preventDefault();
    if(subtotalPrice===0){
      notification[0].style.color='red';
      notification[0].style.display ='block';
      notification[0].innerText='Your Cart is Empty!!! Please order some item';
      setTimeout(function(){
        notification[0].style.display='none';
      }, 3000);
    }
    else{
      notification[0].style.color='green';
      notification[0].style.display ='block';
      notification[0].innerText='your order has been submitted';
      setTimeout(function(){
        notification[0].style.display='none';
      }, 3000);
    }
  });
});
