/*
 * Replace double quotes with single quotes
 * /"
 *
 * Replace single quotes with double quotes
 * /'
 *
 * (
 */

var $newdiv1 = $('<div/>'),
    newdiv2 = document.createElement('div'),
    existingdiv1 = document.getElementById('foo');
$('body').append($newdiv1, [newdiv2, existingdiv1]);