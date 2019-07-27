// business logic
function pizza(size, toppings, crust, quantity) {
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.quantity = quantity;
}
pizza.prototype.totalItems = function() {
  return this.size + " " + this.toppings + "" + this.crust + "" + this.quantity;
}

//user interface logic
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
      
 // $(document).ready(function() {
   $("form#hform").submit(function(event) {
     event.preventDefault();

     var sizeState = $("input#size").val();
     var toppingState = $("input#toppings").val();
     var crustState = $("input#crust").val();
     var quantityState= $("input#quan").val();

     var newPizza = new pizza(sizeState, toppingState, crustState, quantityState);

     $("ul#list").append("<li><span class='list'>" + newPizza.totalItems() + "</span></li>");

     $("input#size").val("");
     $("input#toppings").val("");
     $("input#crust").val("");
     $("input#quan").val("");
   });

     // $(".contact").last().click(function() {
     // $("#show-contact").show();
     // $("#show-contact h2").text(newContact.firstName);
     // $(".first-name").text(newContact.firstName);
     // $(".last-name").text(newContact.lastName);

   // });

 // });
