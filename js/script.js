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
                  $("#select4").click(function() {
                     $("#hform4").show();
                     $("#select4").hide();
                   });
                   });
                   $(document).ready(function() {
                     $("#select4").click(function() {
                       $("#select4").show();
                       $("#hform4").hide();
                     });
                   });
                   $(document).ready(function() {
                     $("#select5").click(function() {
                        $("#hform5").show();
                        $("#select5").hide();
                      });
                      });
                      $(document).ready(function() {
                        $("#select5").click(function() {
                          $("#select5").show();
                          $("#hform5").hide();
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


function getSizeValue() {
   var selectedValue = document.getElementById("size1").value;
   return parseInt(selectedValue);
}
function getToppings() {
   var selectedToppings = document.getElementById("toppings1").value;
   return parseInt(selectedToppings);
}
function getCrust() {
   var selectedCrust = document.getElementById("crust1").value;
   return parseInt(selectedCrust);
}
function getQuantity() {
   var selectedQuantity = document.getElementById("quan1").value;
   return parseInt(selectedQuantity);
}
function getTotalAmount1() {
   var totalAmount = (getSizeValue() + getCrust() + getToppings()) * getQuantity();
   alert ("You ordered " + getQuantity() + " pizza(s)." + ""+" Your bill is " + (totalAmount));
}


function getSizeValue() {
   var selectedValue = document.getElementById("size2").value;
   return parseInt(selectedValue);
}
function getToppings() {
   var selectedToppings = document.getElementById("toppings2").value;
   return parseInt(selectedToppings);
}
function getCrust() {
   var selectedCrust = document.getElementById("crust2").value;
   return parseInt(selectedCrust);
}
function getQuantity() {
   var selectedQuantity = document.getElementById("quan2").value;
   return parseInt(selectedQuantity);
}
function getTotalAmount() {
   var totalAmount = (getSizeValue() + getCrust() + getToppings()) * getQuantity();
   alert ("You ordered " + getQuantity() + " pizza(s)." + ""+" Your bill is " + (totalAmount));
}


function getSizeValue() {
   var selectedValue = document.getElementById("size3").value;
   return parseInt(selectedValue);
}
function getToppings() {
   var selectedToppings = document.getElementById("toppings3").value;
   return parseInt(selectedToppings);
}
function getCrust() {
   var selectedCrust = document.getElementById("crust3").value;
   return parseInt(selectedCrust);
}
function getQuantity() {
   var selectedQuantity = document.getElementById("quan3").value;
   return parseInt(selectedQuantity);
}
function getTotalAmount() {
   var totalAmount = (getSizeValue() + getCrust() + getToppings()) * getQuantity();
   alert ("You ordered " + getQuantity() + " pizza(s)." + ""+" Your bill is " + (totalAmount));
}
function getSizeValue() {
   var selectedValue = document.getElementById("size4").value;
   return parseInt(selectedValue);
}
function getToppings() {
   var selectedToppings = document.getElementById("toppings4").value;
   return parseInt(selectedToppings);
}
function getCrust() {
   var selectedCrust = document.getElementById("crust4").value;
   return parseInt(selectedCrust);
}
function getQuantity() {
   var selectedQuantity = document.getElementById("quan4").value;
   return parseInt(selectedQuantity);
}

function getTotalAmount() {
   var totalAmount = (getSizeValue() + getCrust() + getToppings()) * getQuantity();
   alert ("You ordered " + getQuantity() + " pizza(s)." + ""+" Your bill is " + (totalAmount));
}
function getSizeValue() {
   var selectedValue = document.getElementById("size5").value;
   return parseInt(selectedValue);
}
function getToppings() {
   var selectedToppings = document.getElementById("toppings5").value;
   return parseInt(selectedToppings);
}
function getCrust() {
   var selectedCrust = document.getElementById("crust5").value;
   return parseInt(selectedCrust);
}
function getQuantity() {
   var selectedQuantity = document.getElementById("quan5").value;
   return parseInt(selectedQuantity);
}
function getTotalAmount() {
   var totalAmount = (getSizeValue() + getCrust() + getToppings()) * getQuantity();
   alert ("You ordered " + getQuantity() + " pizza(s)." + ""+" Your bill is " + (totalAmount));
}


function getSizeValue() {
   var selectedValue = document.getElementById("size6").value;
   return parseInt(selectedValue);
}
function getToppings() {
   var selectedToppings = document.getElementById("toppings6").value;
   return parseInt(selectedToppings);
}
function getCrust() {
   var selectedCrust = document.getElementById("crust6").value;
   return parseInt(selectedCrust);
}
function getQuantity() {
   var selectedQuantity = document.getElementById("quan6").value;
   return parseInt(selectedQuantity);
}
function getTotalAmount() {
   var totalAmount = (getSizeValue() + getCrust() + getToppings()) * getQuantity();
   alert ("You ordered " + getQuantity() + " pizza(s)." + ""+" Your bill is " + (totalAmount));
}


function getSizeValue() {
   var selectedValue = document.getElementById("size7").value;
   return parseInt(selectedValue);
}
function getToppings() {
   var selectedToppings = document.getElementById("toppings7").value;
   return parseInt(selectedToppings);
}
function getCrust() {
   var selectedCrust = document.getElementById("crust7").value;
   return parseInt(selectedCrust);
}
function getQuantity() {
   var selectedQuantity = document.getElementById("quan7").value;
   return parseInt(selectedQuantity);
}
function getTotalAmount() {
   var totalAmount = (getSizeValue() + getCrust() + getToppings()) * getQuantity();
   alert ("You ordered " + getQuantity() + " pizza(s)." + ""+" Your bill is " + (totalAmount));
}
