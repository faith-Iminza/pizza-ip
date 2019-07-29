// business logic
// // function pizza(size, toppings, crust, quantity) {
// //   this.size = size;
// //   this.toppings = toppings;
// //   this.crust = crust;
// //   this.quantity = quantity;
// // }
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
              $(document).ready(function() {
                 $("form").submit(function(){
                   var psize = $("#size option:selected").text();
                   var psize = $("#toppings option:selected").text();
                    var pcrust = $("#crust option:selected").text();
                    var pquantity=$("input#quan").val();
              });
            });


//business logic
// var size, toppings, crust, quantity;
//
// function input(){
//   size= document.getElementById("size").selectedIndex;
//   toppings = document.getElementById("toppings").selectedIndex;
//   crust = document.getElementById("crust").selectedIndex;
//   quantity= document.getElementById("quan").value;
// }
// function checkSize(){
//   input();
//    if (size == 1){
//      console.log ("500/=");
//    }else if (size == 2){
//      console.log("750/=");
//    }else if (size == 3){
//      console.log ("1000/=");
//    }
//     if (toppings == 1){
//       console.log("100/=");
//     }else if{
//       console.log("200/=");
//     }
//   }
// checkSize();
