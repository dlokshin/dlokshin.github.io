function autoResize(e){var t,n;document.getElementById&&(t=document.getElementById(e).contentWindow.document.body.scrollHeight,n=document.getElementById(e).contentWindow.document.body.scrollWidth),document.getElementById(e).height=t+"px",document.getElementById(e).width=n+"px"}


var beaches =
[
  {
    "TITLE":"Lower Trestles, California, San Onofre",
    "ID":4740
  },

  {
    "TITLE":"Malibu Surf Rider,California,Malibu Beach",
    "ID":119811
  },

  {
    "TITLE":"The Wedge,California,Balboa Island",
    "ID":4232
  },

  {
    "TITLE":"HB Pier, Southside,California,Huntington Beach",
    "ID":4874
  },

  {
    "TITLE":"Pleasure Point,California,Opal Cliffs",
    "ID":4190
  },

  {
    "TITLE":"George's/Seaside Reef,California,Solana Beach",
    "ID":4787
  },

  {
    "TITLE":"Doheny State Beach,California,Dana Point",
    "ID":4848
  },

  {
    "TITLE":"Ocean Beach, SF,California,Doelger City",
    "ID":4127
  },

  {
    "TITLE":"HB Pier, Northside,California,Huntington Beach",
    "ID":4223
  },

  {
    "TITLE":"El Porto,California,Manhattan Beach",
    "ID":4900
  },

  {
    "TITLE":"Salt Creek,California,Three Arch Bay",
    "ID":4233
  },

  {
    "TITLE":"County Line,California,Solromar",
    "ID":4203
  },

  {
    "TITLE":"Malibu,California,Malibu Beach",
    "ID":4209
  },

  {
    "TITLE":"Oceanside Harbor,California,Oceanside",
    "ID":4238
  },

  {
    "TITLE":"C Street,California,Kimballville",
    "ID":4200
  },

  {
    "TITLE":"Pacifica/Lindamar,California,Pedro Valley",
    "ID":5013
  },

  {
    "TITLE":"Steamer Lane,California,Seabright",
    "ID":4188
  },

  {
    "TITLE":"Pacific Beach,California,Mission Beach",
    "ID":4250
  },

  {
    "TITLE":"Upper Trestles,California,San Onofre",
    "ID":4738
  },

  {
    "TITLE":"Ala Moana Bowls,Hawaii,Waikīkī",
    "ID":5538,
  },

  {
    "TITLE":"Scripps,California,La Jolla Shores",
    "ID":4246
  },

  {
    "TITLE":"Seal Beach,California,Seal Beach",
    "ID":4217
  },

  {
    "TITLE":"Venice Beach,California,Venice Beach",
    "ID":4211
  },

  {
    "TITLE":"Cardiff,California,Cardiff-by-the-Sea",
    "ID":4786
  },

  {
    "TITLE":"The Point at San Onofre State Beach,California,San Onofre",
    "ID":4237
  },

  {
    "TITLE":"Bolsa Chica State Beach,California,Ocean View Estates",
    "ID":4868
  },

  {
    "TITLE":"Ocean Beach, SD,California,Ocean Beach",
    "ID":4253
  },

  {
    "TITLE":"Lincoln,New York,Long Beach",
    "ID":4269
  },

  {
    "Title":"Belmar,New Jersey,Belmar",
    "ID":5157
  }
];

$(document).ready(function () {
  for (i = 0; i < beaches.length; i++){
    var divAppend = '<div class="box"><p>' + beaches[i]['TITLE'] + '</p><iframe src="http://surf.traceup.com/surfline/scouts?breakId=' + beaches[i]['ID'] + '" height="212" width="630">You need a Frames Capable browser to view this content.</iframe></div>'
    $('body').append(divAppend);
  }
});
