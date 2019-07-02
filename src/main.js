import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Character } from './battleMaster.js'

$(document).ready(function () {
  $('#warrior').click(function() {
    const warrior = new Character('The Warrior', 100, 50)
    $('.characters').hide();
});



});
