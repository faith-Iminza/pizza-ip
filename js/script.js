//business logic
function pizza(size, toppings, crust, quantity) {
this.size = size;
this.toppings = toppings;
this.crust = crust;
this.quantity = quantity;
 }
// // pizza.prototype.totalItems = function() {
// //   return this.size + " " + this.toppings + "" + this.crust + "" + this.quantity;
// // }
// /* function size (){
//   return small === 500;
//          meduim === 800; */
         //user-interface logic
         $(document).ready(function() {
           $("#select").click(function() {
             $("#select").show();
             $("#hform").hide();
           });
         });
         $(document).ready(function() {
           $("#select").click(function() {
              $("#hform").show();
              $("#select").hide();
            });
          });
           $(document).ready(function() {
             $("#select1").click(function() {
              $("#select1").show();
               $("#hform1").hide();
             });
           });
           $(document).ready(function() {
           $("#select1").click(function() {
            $("#hform1").show();
             $("#select1").hide();
             });
             });
             $(document).ready(function() {
               $("#select2").click(function() {
                 $("#select2").show();
                 $("#hform2").hide();
               });
             });
             $(document).ready(function() {
               $("#select2").click(function() {
                  $("#hform2").show();
                  $("#select2").hide();
                });
                });
                $(document).ready(function() {
                  $("#select3").click(function() {
                    $("#select3").show();
                    $("#hform3").hide();
                  });
                });
                $(document).ready(function() {
                  $("#select3").click(function() {
                     $("#hform3").show();
                     $("#select3").hide();
                   });
                   });
                   $(document).ready(function() {
                     $("#select4").click(function() {
                       $("#select4").show();
                       $("#hform4").hide();
                     });
                   });
                   $(document).ready(function() {
                     $("#select4").click(function() {
                        $("#hform4").show();
                        $("#select4").hide();
                      });
                      });
                      $(document).ready(function() {
                        $("#select5").click(function() {
                          $("#select5").show();
                          $("#hform5").hide();
                        });
                      });
                      $(document).ready(function() {
                        $("#select5").click(function() {
                           $("#hform5").show();
                           $("#select5").hide();
                         });
                         });
                         $(document).ready(function() {
                           $("#select6").click(function() {
                             $("#select6").show();
                             $("#hform6").hide();
                           });
                         });
                         $(document).ready(function() {
                           $("#select6").click(function() {
                              $("#hform6").show();
                              $("#select6").hide();
                            });
                            });
                         $(document).ready(function() {
                           $("#select7").click(function() {
                             $("#select7").show();
                             $("#hform7").hide();
                           });
                         });
                         $(document).ready(function() {
                           $("#select7").click(function() {
                              $("#hform7").show();
                              $("#select7").hide();
                            });
                            });

              // $(document).ready(function() {
              //    $("form").submit(function(){
              //
              //      var psize = $("#size option:selected").text();
              //      var ptoppings = $("#toppings option:selected").text();
              //       var pcrust = $("#crust option:selected").text();
              //       var pquantity=$("input#quan").val();

                    // var mypizza = new pizza(psize, ptoppings, pcrust, pquantity );
                    //
                    // $("ul#lists").append("<li><span class="List">" + newContact.psize() + "</span></li>");
                    //
                    // $("#size option:selected").text("");
                    // $("#toppings option:selected").text("");
                    // $("#crust option:selected").text("");
                    // $("input#quan").val("");

            //   });
            // });


//business logic
function getSizeValue() {
   var selectedValue = document.getElementById("size").value;
   return parseInt(selectedValue);
}
function getToppings() {
   var selectedToppings = document.getElementById("toppings").value;
   return parseInt(selectedToppings);
}
function getCrust() {
   var selectedCrust = document.getElementById("crust").value;
   return parseInt(selectedCrust);
}
function getQuantity() {
   var selectedQuantity = document.getElementById("quan").value;
   return parseInt(selectedQuantity);
}
function getTotalAmount() {
   var totalAmount = (getSizeValue() + getCrust() + getToppings()) * getQuantity();
   alert ("You ordered " + getQuantity() + " pizza(s)." + ""+" Your bill is " + (totalAmount));
}


function getSizeValue1() {
   var selectedValue1 = document.getElementById("size1").value;
   return parseInt(selectedValue1);
}
function getToppings1() {
   var selectedToppings1 = document.getElementById("toppings1").value;
   return parseInt(selectedToppings1);
}
function getCrust1() {
   var selectedCrust1 = document.getElementById("crust1").value;
   return parseInt(selectedCrust1);
}
function getQuantity1() {
   var selectedQuantity1 = document.getElementById("quan1").value;
   return parseInt(selectedQuantity1);
}
function getTotalAmount1() {
   var totalAmount1 = (getSizeValue1() + getCrust1() + getToppings1()) * getQuantity1();
   alert ("You ordered " + getQuantity1() + " pizza(s)." + ""+" Your bill is " + (totalAmount1));
}


function getSizeValue2() {
   var selectedValue2 = document.getElementById("size2").value;
   return parseInt(selectedValue2);
}
function getToppings2() {
   var selectedToppings2 = document.getElementById("toppings2").value;
   return parseInt(selectedToppings2);
}
function getCrust2() {
   var selectedCrust2 = document.getElementById("crust2").value;
   return parseInt(selectedCrust2);
}
function getQuantity2() {
   var selectedQuantity2 = document.getElementById("quan2").value;
   return parseInt(selectedQuantity2);
}
function getTotalAmount2() {
   var totalAmount2 = (getSizeValue2() + getCrust2() + getToppings2()) * getQuantity2();
   alert ("You ordered " + getQuantity2() + " pizza(s)." + ""+" Your bill is " + (totalAmount2));
}


function getSizeValue3() {
   var selectedValue3 = document.getElementById("size3").value;
   return parseInt(selectedValue3);
}
function getToppings3() {
   var selectedToppings3 = document.getElementById("toppings3").value;
   return parseInt(selectedToppings3);
}
function getCrust3() {
   var selectedCrust3 = document.getElementById("crust3").value;
   return parseInt(selectedCrust3);
}
function getQuantity3() {
   var selectedQuantity3 = document.getElementById("quan3").value;
   return parseInt(selectedQuantity3);
}
function getTotalAmount3() {
   var totalAmount3 = (getSizeValue3() + getCrust3() + getToppings3()) * getQuantity3();
   alert ("You ordered " + getQuantity3() + " pizza(s)." + ""+" Your bill is " + (totalAmount3));
}


function getSizeValue4() {
   var selectedValue4 = document.getElementById("size4").value;
   return parseInt(selectedValue4);
}
function getToppings4() {
   var selectedToppings4 = document.getElementById("toppings4").value;
   return parseInt(selectedToppings4);
}
function getCrust4() {
   var selectedCrust4 = document.getElementById("crust4").value;
   return parseInt(selectedCrust4);
}
function getQuantity4() {
   var selectedQuantity4 = document.getElementById("quan4").value;
   return parseInt(selectedQuantity4);
}

function getTotalAmount4() {
   var totalAmount4 = (getSizeValue4() + getCrust4() + getToppings4()) * getQuantity4();
   alert ("You ordered " + getQuantity4() + " pizza(s)." + ""+" Your bill is " + (totalAmount4));
}


function getSizeValue5() {
   var selectedValue5 = document.getElementById("size5").value;
   return parseInt(selectedValue5);
}
function getToppings5() {
   var selectedToppings5 = document.getElementById("toppings5").value;
   return parseInt(selectedToppings5);
}
function getCrust5() {
   var selectedCrust5 = document.getElementById("crust5").value;
   return parseInt(selectedCrust5);
}
function getQuantity5() {
   var selectedQuantity5 = document.getElementById("quan5").value;
   return parseInt(selectedQuantity5);
}
function getTotalAmount5() {
   var totalAmount5 = (getSizeValue5() + getCrust5() + getToppings5()) * getQuantity5();
   alert ("You ordered " + getQuantity5() + " pizza(s)." + ""+" Your bill is " + (totalAmount5));
}


function getSizeValue6() {
   var selectedValue6 = document.getElementById("size6").value;
   return parseInt(selectedValue6);
}
function getToppings6() {
   var selectedToppings6 = document.getElementById("toppings6").value;
   return parseInt(selectedToppings6);
}
function getCrust6() {
   var selectedCrust6 = document.getElementById("crust6").value;
   return parseInt(selectedCrust6);
}
function getQuantity6() {
   var selectedQuantity6 = document.getElementById("quan6").value;
   return parseInt(selectedQuantity6);
}
function getTotalAmount6() {
   var totalAmount6 = (getSizeValue6() + getCrust6() + getToppings6()) * getQuantity6();
   alert ("You ordered " + getQuantity6() + " pizza(s)." + ""+" Your bill is " + (totalAmount6));
}


function getSizeValue7() {
   var selectedValue7 = document.getElementById("size7").value;
   return parseInt(selectedValue7);
}
function getToppings7() {
   var selectedToppings7 = document.getElementById("toppings7").value;
   return parseInt(selectedToppings7);
}
function getCrust7() {
   var selectedCrust7 = document.getElementById("crust7").value;
   return parseInt(selectedCrust7);
}
function getQuantity7() {
   var selectedQuantity7 = document.getElementById("quan7").value;
   return parseInt(selectedQuantity7);
}
function getTotalAmount7() {
   var totalAmount7 = (getSizeValue7() + getCrust7() + getToppings7()) * getQuantity7();
   alert ("You ordered " + getQuantity7() + " pizza(s)." + ""+" Your bill is " + (totalAmount7));
}
