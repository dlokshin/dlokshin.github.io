function autoResize(e){var t,n;document.getElementById&&(t=document.getElementById(e).contentWindow.document.body.scrollHeight,n=document.getElementById(e).contentWindow.document.body.scrollWidth),document.getElementById(e).height=t+"px",document.getElementById(e).width=n+"px"}


var beaches =
[
  {
    "Title":"Lower Trestles, California, San Onofre",
    "ID":4740
  },

  {
    "Title":"Malibu Surf Rider,California,Malibu Beach",
    "ID":119811
  },

  {
    "Title":"The Wedge,California,Balboa Island",
    "ID":4232
  },

  {
    "Title":"HB Pier, Southside,California,Huntington Beach",
    "ID":4874
  },

  {
    "Title":"Pleasure Point,California,Opal Cliffs",
    "ID":4190
  },

  {
    "Title":"George's/Seaside Reef,California,Solana Beach",
    "ID":4787
  },

  {
    "Title":"Doheny State Beach,California,Dana Point",
    "ID":4848
  },

  {
    "Title":"Ocean Beach, SF,California,Doelger City",
    "ID":4127
  },

  {
    "Title":"HB Pier, Northside,California,Huntington Beach",
    "ID":4223
  },

  {
    "Title":"El Porto,California,Manhattan Beach",
    "ID":4900
  },

  {
    "Title":"Salt Creek,California,Three Arch Bay",
    "ID":4233
  },

  {
    "Title":"County Line,California,Solromar",
    "ID":4203
  },

  {
    "Title":"Malibu,California,Malibu Beach",
    "ID":4209
  },

  {
    "Title":"Oceanside Harbor,California,Oceanside",
    "ID":4238
  },

  {
    "Title":"C Street,California,Kimballville",
    "ID":4200
  },

  {
    "Title":"Pacifica/Lindamar,California,Pedro Valley",
    "ID":5013
  },

  {
    "Title":"Steamer Lane,California,Seabright",
    "ID":4188
  },

  {
    "Pacific Beach,California,Mission Beach",
    "ID":4250
  },

  {
    "Upper Trestles,California,San Onofre",
    "ID":4738
  },

  {
    "Ala Moana Bowls,Hawaii,Waikīkī",
    "ID":5538,
  },

  {
    "Title":"Scripps,California,La Jolla Shores",
    "ID":4246
  },

  {
    "Title":"Seal Beach,California,Seal Beach",
    "ID":4217
  },

  {
    "Title":"Venice Beach,California,Venice Beach",
    "ID":4211
  },

  {
    "Title":"Cardiff,California,Cardiff-by-the-Sea",
    "ID":4786
  },

  {
    "Title":"The Point at San Onofre State Beach,California,San Onofre",
    "ID":4237
  },

  {
    "Title":"Bolsa Chica State Beach,California,Ocean View Estates",
    "ID":4868
  },

  {
    "Title":"Ocean Beach, SD,California,Ocean Beach",
    "ID":4253
  },

  {
    "Title":"Lincoln,New York,Long Beach",
    "ID":4269
  },

  {
    "Title":"Belmar,New Jersey,Belmar",
    "ID":5157
  }
];

$(document).ready(function () {
  var divAppend = '<div class="box"></div><div class="box"><p>Teaser</p><iframe src="http://surf.traceup.com/surfline/scouts?trailer=true" height="212" width="630">You need a Frames Capable browser to view this content.</iframe></div>'
  $('body').append(divAppend);
  for (i = 0; i < beaches.length; i++){
    var divAppend = '<div class="box"><p>' + beaches[i]['TITLE'] + '</p><iframe src="http://surf.traceup.com/surfline/scouts?breakId=' + beaches[i]['ID'] + '" height="212" width="630">You need a Frames Capable browser to view this content.</iframe></div>'
    $('body').append(divAppend);
  }
});
