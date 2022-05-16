$(document).ready(function () {
  $(".navbar-nav").on("click", "a", function () {
    $(".navbar-nav a.active").removeClass("active");
    $(this).addClass("active");
  });
});
$(document).ready(function () {
  $("#myImg").on("click", function () {
    $(".navbar").addClass("d-none");
  });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelector("#myImg");
var img1 = document.querySelector("#myImg1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  $(".navbar").removeClass("d-none");
  $(".navbar").addClass("d-inline");
};
