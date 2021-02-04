import jQuery from "jquery";

jQuery(document).ready(function () {
    console.log("we are here!");

    jQuery(".js-add-to-cart").click(function () {
      jQuery.ajax({
        type: "POST",
        url: "/cart/add.js",
        data: {
          quantity: 1,
          id: "37671584661681",
        },
        dataType: "json",
        success: function (data) {
          alert("success!");
        },
      });
    });

})