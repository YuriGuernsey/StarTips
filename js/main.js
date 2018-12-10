var loc = window.location.href
  // JSON API that gets all the events
function ajaxGetEvents() {
  return $.ajax({
    type: 'GET'
    , url: loc + "/js/Tips.json"
    , contentType: 'application/json'
    , processData: false
  }).done(function () {
    console.log("Working")
  });
}
$(document).ready(function () {
  function Login() {
    $("#account").on("click", function () {
      $("#Log").click();
    });
  };
  // VueJS data
  var App = new Vue({
    el: "#Tips"
    , data: {
      json: []
    , }
    , created: function () {
      ajaxGetEvents().done(function (json) {
        App.json = json;
      }).fail(function (json) {
        console.log(json);
      });
    }
  });
});