function getIt() {
  $("p").on("click", function() {
    alert("Hey!")
 })
}

function frameIt() {
  $("img").on("load", function(e) {
    $("img").addClass("tasty")
  )}
}

function pressIt() {
  $(document).on("keydown", function(event) {
    if (event.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}

function submitIt() {
  $("form").on("submit", function(e) {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function() {

// $("p").on("click", getIt())
// $("img").on("load", frameIt())
// $("typing").on("keydown", pressIt())
// $("form").on("submit", submitIt())

getIt()
frameIt()
pressIt()
submitIt()
})
