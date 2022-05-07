{/* <option value="Product type"> Product type </option>
                    <option value="Candle Holder">Candle Holder</option>
                    <option value="Cologne">Cologne</option>
                    <option value="Gift Set">Gift Set</option> */}


                    var prounder15data = [

  

                        {
                             
                          proimg: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw96126717/images/Spring2022/diff_mday_sp3_ss.jpg?yocs=o_s_",
                          proname: "Wallflowers Frafrance Refils",
                          prodesc:" Ends Today",
                          prorate:"5/$18.00",
                          procategory:"Top Offersr",
                          profragnance: "Fresh",
                          rate:18.00
                      
                        },

                        {
                             
                            proimg: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4d4bda80/images/Spring2022/tbctier-noblbc_sp3_ss_0.jpg?yocs=o_s_",
                            proname: "Ful Size Body Care",
                            prodesc:"Buy Three Get One Free",
                            prorate:"$ 24.00",
                            procategory:"Top Offers",
                            profragnance: "Fresh",
                            rate:24.00
                        
                          },



                          {
                             
                            proimg: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw55bfb0b6/images/Spring2022/sp_garden-infusion_sp3_ss.jpg?yocs=o_s_",
                            proname: "Hand Soaps",
                            prodesc:"Ends Today",
                            prorate:"5/$ 18.0",
                            procategory:"Top Offers",
                            profragnance: "Fresh",
                            rate:18.00
                        
                          },


                          {
                             
                            proimg: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw36bcc92f/images/Spring2022/cndl_sw_sp3_ss.jpg?yocs=o_s_",
                            proname: "Single Wick Candles",
                            prodesc:"Ends Today",
                            prorate:"2/$ 22.00",
                            procategory:"Top Offers",
                            profragnance: "Fresh",
                            rate:22.0
                        
                          },

                          {
                             
                            proimg: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw12b687f4/images/Spring2022/sn_pocketbac_sp3_ss.jpg?yocs=o_s_",
                            proname: "Hand Sanitizers",
                            prodesc:"Pack of 5",
                            prorate:"$ 8.00",
                            procategory:"Top Offers",
                            profragnance: "Fresh",
                            rate:8.0,
                        
                          },

                          {
                             
                            proimg: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw04cb8737/images/Spring2022/diff_crs_sp3_ss.jpg?yocs=o_s_",
                            proname: "Room Sprays",
                            prodesc:"Pack of 3",
                            prorate:"$ 8.00",
                            procategory:"Top Offers",
                            profragnance: "Fresh",
                            rate:8.0,
                        
                          },
                    
                                       
                      
                      ]
                      
                      
                      
                      
                          
                      
                      
                      var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
                          
                          
                          displaydata(prounder15data)
                      
                          function displaydata(data){
                      
                          
                      
                            data.forEach( function (ele) {
                          
                           
                       
                            var card = document.createElement("div");
                            card.setAttribute("id","card")
                           
                            var imgdiv = document.createElement("div");
                            imgdiv.setAttribute("id", "imgdiv")
                           
                           
                           
                           
                           
                            var imglogo = document.createElement("img")
                                imglogo.setAttribute("src",ele.proimg)
                                imgdiv.append(imglogo);
                            
                             
                            var prodiv = document.createElement("div");
                           prodiv.setAttribute("id","prodiv");
                           
                           
                            var name = document.createElement("h3");
                                 name.innerText = ele.proname;
                           
                            var desc = document.createElement("h4");
                           
                            desc.innerText = ele.prodesc;
                           
                            var price = document.createElement("p");
                                price.innerText=ele.prorate;
                           
                           
                           var addtobag = document.createElement("button");
                           addtobag.setAttribute("id", "addtobagbtn")
                           addtobag.innerText="Add to Bag";
                           addtobag.style.cursor= "pointer";
                           addtobag.addEventListener("click", function(){
                            addtobagfn(ele)
                          });
                           
                           
                           prodiv.append(name,desc,price, addtobag)
                               
                                 card.append(imgdiv, prodiv);
                           
                                 document.querySelector("#vbox3").append(card)
                           
                           
                           
                           })
                          }



                          function addtobagfn(ele){
    
                            // console.log(ele)
                        
                            cartArr.push(ele);
                        
                            localStorage.setItem("cartItems", JSON.stringify(cartArr));
                            alert("Item Added To Cart")
                        
                          }

                          console.log(cartArr)
                      
                      
                      
                      
                      
                      
                      
                          
                         
                      
                      
                      