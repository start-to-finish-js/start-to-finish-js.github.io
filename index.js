import jQuery from "jquery";

jQuery(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const preload = urlParams.get("preload");

  if (preload) {
    const variants = preload.split(",");
    addVariants(variants);
  }
});

function addVariants(variants) {
  var promises = [];
  for (let variant of variants) {
    var request = jQuery.ajax({
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
    promises.push(request);
  }

  $.when.apply(null, promises).done(function () {
    window.location.href = window.location.href.split("?")[0];
  });
}
