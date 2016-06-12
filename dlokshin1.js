function autoResize(e){var t,n;document.getElementById&&(t=document.getElementById(e).contentWindow.document.body.scrollHeight,n=document.getElementById(e).contentWindow.document.body.scrollWidth),document.getElementById(e).height=t+"px",document.getElementById(e).width=n+"px"}


var beaches =
[
  {
    "TITLE":"El Porto",
    "ID":4900
  },
  {
    "TITLE":"Venice Beach",
    "ID":4211
  },
  {
    "TITLE":"C-street"
    "ID":4200
  },
  {
    "TITLE":"County Line",
    "ID":4203
  },
  {
    "TITLE":"Malibu",
    "ID":4209
  },
  {
    "TITLE":"HB Pier South",
    "ID":4874
  },
  {
    "TITLE":"HB Pier North",
    "ID":4223
  },
  {
    "TITLE":"Lowers",
    "ID":4740
  },
  {
    "TITLE":"Uppers",
    "ID":4738
  },
  {
    "TITLE":"Salt Creek",
    "ID":4233
  },
  {
    "TITLE":"Goldenwest",
    "ID":4870
  },
  {
    "TITLE":"Pacifica/Lindamar",
    "ID":5013
  },
  {
    "TITLE":"Ocean Beach, SF",
    "ID":4127
  },
  {
    "TITLE":"Pleasure Point",
    "ID":4190
  },
  {
    "TITLE":"Steamer Lane",
    "ID":4188
  },
  {
    "TITLE":"Swamis",
    "ID":4789
  },
  {
    "TITLE":"Scripps",
    "ID":4246
  },
  {
    "TITLE":"Cardiff",
    "ID":4786
  },
  {
    "TITLE":"Pacfic Beach, SD",
    "ID":4250
  },
  {
    "TITLE":"Pipe",
    "ID":4750
  },
  {
    "TITLE":"New Smyrna",
    "ID":4420
  },
  {
    "TITLE":"Belmar",
    "ID":5157
  },
  {
    "TITLE":"Cocoa Beach",
    "ID":4421
  },
  {
    "TITLE":"Rockaway",
    "ID":4270
  },
];

$(document).ready(function () {
  var divAppend = '<div class="box"></div><div class="box"><p>Teaser</p><iframe src="http://surf.traceup.com/surfline/scouts?trailer=true" height="212" width="630">You need a Frames Capable browser to view this content.</iframe></div>'
  $('body').append(divAppend);
  for (i = 0; i < beaches.length; i++){
    var divAppend = '<div class="box"><p>' + beaches[i]['TITLE'] + '</p><iframe src="http://surf.traceup.com/surfline/scouts?breakId=' + beaches[i]['ID'] + '" height="212" width="630">You need a Frames Capable browser to view this content.</iframe></div>'
    $('body').append(divAppend);
  }
});
