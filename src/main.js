import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Character } from './battleMaster.js'

$(document).ready(function () {
  let user = new Character();
  $('#warrior').click(function() {
    user = new Character('The Warrior', 100, 50)
    $('.characters').hide();
  });
  $('#archer').click(function() {
    user = new Character('The Archer', 90, 60)
    $('.characters').hide();

  });
  $('#wizard').click(function() {
    user = new Character('The Wizard', 120, 40)
    $('.characters').hide();
  });
  $(".characters").on("click", function(){
  console.log(user);
});


});
