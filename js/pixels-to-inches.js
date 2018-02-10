// target: #getDPI, #inPixels, events: 'change', 'keyup'
$("#getDPI, #inPixels").on("change keyup", function() { 
  
  // Get inPixels value
  var inPixels = $("#inPixels").val();

  // Get selected DPI
  var getDPI = Number($("#getDPI").val());

  // Convert pixels to inches with 4 decimals
  var inInches = parseFloat(inPixels / getDPI).toFixed(4);

  // prepare the #displayInches div for dynamic addition of inInches value, or a warning to select DPI if needed 
  var theDiv = document.getElementById("displayInches");

  if ($("#getDPI").val() !== "Please Choose DPI") {
    theDiv.innerHTML = " = " + inInches + " inches";
  } else {
    // alert the user about selecting a DPI value
    theDiv.innerHTML = '<div class="alert alert-danger"><i class="fa fa-warning"></i> You <strong>must choose</strong> a DPI value...</div></div>';
  }
});

