var cartArr = JSON.parse(localStorage.getItem("cartItems")) ||[]
displaycartlist(cartArr)
function displaycartlist(data){
    //console.log(data)
    document.querySelector("#tablebodydata").innerHTML="";
    data.forEach(function(elem,i){
        var tr=document.createElement("tr")
        tr.style.borderBottom="1px solid gray";
//-----------------td1------------------------------------
        var td1=document.createElement("td");
        td1.style.display="flex"
        var image = document.createElement("img");
image.setAttribute("src",elem.proimg);
var div=document.createElement("div")
var h4=document.createElement("h3");
h4.innerText=elem.prodesc;
h4.style.fontFamily="Roboto Condensed, sans-serif";
h4.style.fontWeight="bolder"
var p=document.createElement("p")
p.innerText=elem.procategory;
p.style.color="gray";
p.style.fontSize="small";
p.style.fontFamily="Radio Canada, sans-serif";
var p1=document.createElement("p")
p1.innerText=elem.profragnance;
p1.style.color="red";
p1.style.fontSize="small";
p1.style.fontFamily="Radio Canada, sans-serif";
div.append(h4,p,p1)
td1.append(image,div);
//---------------------------td2------------------------------

var td2=document.createElement("td");
td2.innerText=elem.prorate;
//------------------------------td3--------------------------
var td3=document.createElement("td");
var div2=document.createElement("div")
div2.setAttribute("id","cartmodify");

var minus=document.createElement("div");
minus.innerText="-";
minus.addEventListener("click",function(){
if((count.innerText)>1){
    (count.innerText)--
}})
var count=document.createElement("div")
count.innerText="1";

var plus=document.createElement("div")
plus.innerText="+";
plus.addEventListener("click",function(){
(count.innerText)++})

div2.append(minus,count,plus);
td3.append(div2)


//-------------------------------------td4----------------------------
var  td4=document.createElement("td")
td4.innerText=elem.prorate;
//------------------------------------td5-----------------------------
var td6=document.createElement("td")
td6.innerText="X"
td6.style.color="red"
td6.style.cursor="pointer";
td6.addEventListener("click",function(){
      
      callback(elem,i)})
tr.append(td1,td2,td3,td4,td6);
document.querySelector("#tablebodydata").append(tr);
//--------------------------END TABLE--------------------------------------

var subtotal=document.querySelector("#MSB").innerText
//console.log((Number(subtotal)+elem.rate)*count.innerText)

var finalrate=document.querySelector("#MSB").innerText=(Number(subtotal)+elem.rate);

var stax=document.querySelector("#tax").innerText=Math.ceil(0.1*elem.rate);

document.querySelector("#fullamount").innerText=Math.ceil(10+(1.1*finalrate));

document.querySelector("#updatebutton").addEventListener("click",function(){

    if(count.innerText>1)
    {
        var updatetotal=document.querySelector("#MSB").innerText=(finalrate)*(Number(count.innerText));
        document.querySelector("#fullamount").innerText=Math.ceil(10+(1.1*updatetotal));
        document.querySelector("#tax").innerText=(Math.ceil(updatetotal*(1/10)))
    }
    
})
document.querySelector("#productcountnumber").innerText=cartArr.length

    })

    function callback(elem,i){
        cartArr.splice(i,1)
        localStorage.setItem("cartItems",JSON.stringify(cartArr));
        window.location.reload();
}

}
let btn=document.querySelector(".checkout");
btn.addEventListener("click",orderPlace);
function orderPlace(){
    alert("Order Placed Successfully!");
    window.location.href="index.html";
}