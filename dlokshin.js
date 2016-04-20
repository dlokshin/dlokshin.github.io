var beaches =
[
  {
    "TITLE":"La Jolla Shores",
    "ID":4812
  },
  {
    "TITLE":"Pacifica/Lindamar",
    "ID":5013
  },
  {
    "TITLE":"HB Pier Southside",
    "ID":4874
  },
  {
    "TITLE":"El Porto",
    "ID":4900
  },
  {
    "TITLE":"Terra Mar Point",
    "ID":4775
  },
  {
    "TITLE":"HB Pier Northside",
    "ID":4223
  },
  {
    "TITLE":"Hanalei Bay",
    "ID":5522
  },
  {
    "TITLE":"Rincon",
    "ID":4197
  },
  {
    "TITLE":"Guns",
    "ID":119419
  },
  {
    "TITLE":"Nosara-Guiones",
    "ID":5559
  },
  {
    "TITLE":"Huntington Pier",
    "ID":286
  },
  {
    "TITLE":"Lower Trestles",
    "ID":4740
  },
  {
    "TITLE":"Jones Beach",
    "ID":67578
  },
  {
    "TITLE":"Del Mar",
    "ID":4783
  },
  {
    "TITLE":"Torrance Beach/Haggerty's",
    "ID":4910
  },
  {
    "TITLE":"Venice Beach",
    "ID":4211
  },
  {
    "TITLE":"Bolsa Chica State Beach",
    "ID":4868
  },
  {
    "TITLE":"Manhattan Beach",
    "ID":4901
  },
  {
    "TITLE":"Santa Ana River Jetties",
    "ID":4875
  },
  {
    "TITLE":"Oceanside Harbor",
    "ID":4238
  },
  {
    "TITLE":"Cardiff",
    "ID":4786
  },
  {
    "TITLE":"Swami's",
    "ID":4789
  },
  {
    "TITLE":"Goldenwest",
    "ID":4870
  },
  {
    "TITLE":"T-Street",
    "ID":4235
  },
  {
    "TITLE":"Fonte da Telha",
    "ID":110193
  },
  {
    "TITLE":"Malibu Surf Rider",
    "ID":119811
  },
  {
    "TITLE":"Old Man's/Tourmaline",
    "ID":4804
  },
  {
    "TITLE":"The Point at San Onofre State Beach",
    "ID":4237
  },
  {
    "TITLE":"Ventura Point",
    "ID":89981
  },
  {
    "TITLE":"Carpinteria State Beach",
    "ID":5001
  },
  {
    "TITLE":"Pakala",
    "ID":5527
  },
  {
    "TITLE":"Blacks",
    "ID":4245
  },
  {
    "TITLE":"Church",
    "ID":4741
  },
  {
    "TITLE":"Ala Moana Bowls",
    "ID":5538
  },
  {
    "TITLE":"San Lorenzo",
    "ID":4387
  },
  {
    "TITLE":"Topanga State Beach",
    "ID":4204
  },
  {
    "TITLE":"County Line",
    "ID":4203
  },
  {
    "TITLE":"Huntington State Beach",
    "ID":103681
  },
  {
    "TITLE":"Pipes",
    "ID":4790
  },
  {
    "TITLE":"Makaha",
    "ID":5568
  },
  {
    "TITLE":"George's/Seaside Reef",
    "ID":4787
  },
  {
    "TITLE":"Pacific Beach",
    "ID":4250
  },
  {
    "TITLE":"Ponto",
    "ID":4773
  },
  {
    "TITLE":"Manly",
    "ID":6448
  },
  {
    "TITLE":"Ocean Beach, SD",
    "ID":4253
  },
  {
    "TITLE":"Emerald Isle",
    "ID":5254
  },
  {
    "TITLE":"Poipu Outer Reef",
    "ID":5526
  },
  {
    "TITLE":"Surfer's Beach",
    "ID":6682
  },
  {
    "TITLE":"Steamer Lane",
    "ID":4188
  },
  {
    "TITLE":"Pismo Beach Pier",
    "ID":5065
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
