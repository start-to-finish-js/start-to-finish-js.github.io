import jQuery from "jquery";

jQuery(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const preload = urlParams.get("preload");

  console.log("are we here");

  if (preload) {
    const variants = preload.split(",");
    addVariants(variants);
  }
});

function addVariants(variants) {
  var promises = [];
  for (let variant of variants) {
    let variant_array = variant.split(":");

    let quantity = variant_array.length > 1 ? variant_array[1] : 1;

    var request = jQuery.ajax({
      type: "POST",
      url: "/cart/add.js",
      data: {
        id: variant_array[0],
        quantity: quantity,
      },
      dataType: "json",
      success: function (data) {
        console.log("Successfully added: " + variant);
      },
      fail: function (e) {
        console.log("Failure!");
        console.log(e);
      },
    });
    promises.push(request);
  }

  $.when.apply(null, promises).done(function () {
    window.location.href = window.location.href.split("?")[0];
  });
}
