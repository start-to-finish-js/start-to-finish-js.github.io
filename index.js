import jQuery from "jquery";


jQuery(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const preload = urlParams.get("preload");

  if (preload) {
    const variants = preload.split(",");

    for (let variant of variants) {
      jQuery.ajax({
        type: "POST",
        url: "/cart/add.js",
        data: {
          quantity: 1,
          id: variant,
        },
        dataType: "json",
        success: function (data) {
          console.log("Successfully added: " + variant);
        },
      });
    }
  }
});