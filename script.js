const generate_new_btn = document.getElementById('generate_new_btn');
const dominoes_amount = document.getElementById('dominoes_amount');
const dominoes_dv = document.getElementById('dominoes_dv')

const domino_el = document.createElement('div');
domino_el.className = 'domino_el';

document.onload = function() {
  const dominoes_els = [];
  dominoes_dv.innerHTML = domino_el;
}
