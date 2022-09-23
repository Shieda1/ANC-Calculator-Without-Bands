// https://www.omnicalculator.com/health/anc-without-bands

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ANCRadio = document.getElementById('ANCRadio');
const WBCcountRadio = document.getElementById('WBCcountRadio');
const NEUTRadio = document.getElementById('NEUTRadio');

let ANC;
let WBCcount = v1;
let NEUT = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

ANCRadio.addEventListener('click', function() {
  variable1.textContent = 'WBC count';
  variable2.textContent = 'NEUT';
  WBCcount = v1;
  NEUT = v2;
  result.textContent = '';
});

WBCcountRadio.addEventListener('click', function() {
  variable1.textContent = 'ANC';
  variable2.textContent = 'NEUT';
  ANC = v1;
  NEUT = v2;
  result.textContent = '';
});

NEUTRadio.addEventListener('click', function() {
  variable1.textContent = 'ANC';
  variable2.textContent = 'WBC count';
  ANC = v1;
  WBCcount = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ANCRadio.checked)
    result.textContent = `ANC = ${computeANC().toFixed(2)}`;

  else if(WBCcountRadio.checked)
    result.textContent = `WBC count = ${computeWBCcount().toFixed(2)}`;

  else if(NEUTRadio.checked)
    result.textContent = `NEUT = ${computeNEUT().toFixed(2)}`;
})

// calculation

function computeANC() {
  return (Number(WBCcount.value) * Number(NEUT.value)) * 10;
}

function computeWBCcount() {
  return (Number(ANC.value) / 10) / Number(NEUT.value);
}

function computeNEUT() {
  return (Number(ANC.value) / 10) / Number(WBCcount.value);
}