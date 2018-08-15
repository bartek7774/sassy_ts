import "./../scss/app.scss";
import "bootstrap";
import { hello } from "./../js/lib/helpers";

let arr = [1, 2, 3];
const tabs = [13, ...arr];
console.log(tabs);

$(document).ready(function() {
  $(".carousel").carousel();
});
