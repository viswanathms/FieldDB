console.log("Loading Webservices info");
/* Extends the OPrime class */
var OPrime = OPrime || {};


OPrime.websiteUrl = "https://wwwdev.fieldlinguist.com:3182";
OPrime.authUrl = "https://authdev.fieldlinguist.com:3183";
OPrime.audioUrl = "https://audiodev.fieldlinguist.com:3184";
OPrime.lexiconUrl = "https://lexicondev.fieldlinguist.com:3185";
OPrime.corpusUrl = "https://corpusdev.fieldlinguist.com:3186";
OPrime.activityUrl = "https://activitydev.fieldlinguist.com:3187";
OPrime.widgetUrl = "https://widgetdev.fieldlinguist.com:3188";

/*
 * Use the current app's chrome url, assuming if its a dev, they will have their
 * own url that is not from the market, and if its a bleeding edge user, they
 * will have the market one. In both cases it is save to return the
 * window.location.href but this code is added to be clear that there is also a
 * bleeding edge url for users.
 */
OPrime.chromeClientUrl = function(){
  if (window.location.origin != "chrome-extension://eeipnabdeimobhlkfaiohienhibfcfpa"){
    return window.location.origin;
  }else{
    return "chrome-extension://eeipnabdeimobhlkfaiohienhibfcfpa";
  }
};
  
OPrime.defaultCouchConnection = function() {
  var d = {
    protocol : "https://",
    domain : "ifielddevs.iriscouch.com",
    port : "443",
    pouchname : "default",
    path : ""
  }; 
  return d; 

};

OPrime.contactUs = "<a href='https://docs.google.com/spreadsheet/viewform?formkey=dGFyREp4WmhBRURYNzFkcWZMTnpkV2c6MQ' target='_blank'>Contact Us</a>";

OPrime.publicUserStaleDetails = function() {
  return {
    token : "$2a$10$VEzkBbg7kN5LpiEurR7HgOuBxtcgl0g2E/1RQq8OTju7LbqZb2n7S",
    encryptedUser : "confidential:VTJGc2RHVmtYMStBTDBmMVN3NVVxRldWdWVXcXBBODJuMmxicThPN0hUSmlRYkFCclRwSXFxYVNtV2o5WFdnYkhOR2JlTVEyRjZoSnRobG4rczArdWVmbXl1K1JMaDZCY1NpVGZGTTRubm02azhGZVlhQWxwMkZGZzFVeEhONVZ2UDFicHkwU1l1azVEc0VNOHRpWEZhL0wwdThiNmd2OVhyNUVMU1UxdERPZmpLc0MxR29CUjBxejQ1QTU1c0s0QmdoempIS052YlJlYTRWVVNiTC9SeGNXeFU4eGN6NUp1Z3FQVjlJOTBPeS83ckNBNlZCdVdGYWhYU0ZzYXJhMm14NVN1dE82Yjk1enpaaitTci9CV0pKZWNXbklTNkRyRVlmYmczcGRXemVlcFMwUGRKY0NMRmhGNHp3aEpTNjBxRHU5Si9KUzNTR2dadEJaYWkyd0p2NExpdG9kOXB4YkNIYXQvR21hMTg3QnZFbkhqZmZMazQvZURySkwvTGxkRUUwTGZsdzg2VWduNnZpS3ZFOElWT1RPaXZIbFUzTEdqOFJWYTZrd2dPM3J2ci9EY2dKb24vUkxwUXBrVkZVdUlEektLeXN0WG0rSFQvSEtoZFVQQVdNdTNEWXdUcDI3SUM1NVMyNW5tQ3ZaM1FTeUxiOFk2SWQ5Q0x2dFk4d0ZQRTZVRjdqNnpEem1IRHN2QVBjU0xuQ2k3RGJPWG9BUTFqeFRpald0WW1pSkJ6WXIwNHFFb0xIMk5pN2hjaThiemFCN0Vva0t1b0Vpbm9wbGxGazBseTlkNUtEWE1ma1JncFFYWGNEaUxrQmR3YnhneThaSjlRT0Fqc0kzQXRPQndRUUJMNkVmbTZRUWg5OGFDZWRMVmxFWXQwV2VKSmhCSEJqMDlqcE9qcnkzNUVPMktTU2EwK0lTU0drN1pYd1RWci9vbGlBZHZ4TzNaWGFsWjZMMTNaUWJreU5PWVlXVlU5akJOeTNlYmFaY0NiUTdSL2tNNjFzMVZ2VjJBQmF0NFNKeXJKZkIrbTFSSC9lOE1zU3ppWng0aVZGMzhzOWZWQVV5ZFpUZUpabVM4NVEzNWlDWHpKbkVmcFJLOHFEWGdueFdxTHZtemxkZERXOVNoLzBkdjlneFNKZ05IY08xbU1aUFp0RzErMEVuNUtqbDlLZFovZGhPTGtibmVTdktTRXFZcDhvZnRNbFIzdVlxMXFoQVQ2bjNPQ3FoRmQ4Q3R4YUxTajhNaHBMeFVseEdCNjZvNkNUN2JOMk1ZbGZNV0RycG9Tak9XMUVZZGovN0lrREdVdEZsVDF4SWtIcmVYNlJsNWRQSzVLdTQrbUdGSHI4RkNDZGVINlF1M1FyTGNKR3dJY0tSTW9xYStaRndYU2gvTW1RQ1oyc3VTdVVzSkJIcmg3TFRzei9uY2pGZXZJSmdqb3hZczY3bkxMZmM4QkVrc3R5ZnNkYlJWZlRkeG9ZVitaTC9DeDFFdXlPU1pKSjZBTG9iVytlaEhxMVNFSVRHUEFhMk5RdEN6NlNrYlR6QmJtSCt5bjkzMGlwSDRUSUF1M0l3ME0xRVhrUDVCWVU5bjF0VWxXaUxBdllUVUV6OHBVenpiTUpmOGNtVTB1NWlCOFFZb1hmTW5UL2wwbk1JUm1KT1A1S3BOME9RSEZORWNmb0hmY3dScEl6ZlNVeEUvcXFTV1N3cHhqRXh5aHVEZWllcXBhNlVBbGM3RitTS1pHc21VeTRmUFA5UjMxNy92UEhHakgrWStnMEVIUmN3NUdiY1lRT3ZTMkNSdzl6bXNZL2NQUlFEbzQ4Q2hHL2VzTEhTTzJ1aTkzcURSNHI0aEw4OXRCYXE2REJiaWJSZ1dvWUs0aFdpVG50TGtZd1Z1MGExQkVDZkpsMEZWR0xpemJIalMvek5VSDdtVWh1QWhjZzc3OU0yZGNrTWhaTmZsMC9STWRqcE9aYUpESlMwbkdhTjRNZFZuY3BDZ202TWQ3c0xVcDhWUWlucGEvWGlxbXpVMG9qekpYczRxVTJ5Z0R1a1IrdnZBenAvaDhFeTUzM0NpY2paamdIS0s4a0IrU0NZQ1BaSENOSWhoMVhFVE9Od2tUbzIrVitGL0JtRGVLQWd6TWJta08xKzJ5eG9tYTJqL2E1YWgreUx1VXFNMTlJVWVINUg2cjZmL0QwZmN5RUsrRGZ0NzRhUGFUU01FYitxRFBEc1NDNVZCZ0JoRTJSa2loM3dHQVUwVTEyNU83NTVaekpMOUM3eFRyOUt5SWxjT1VrMzREamwvNkRzWmw5NzZLc1ZOV0tlaHpJSVVNVzBSSVgxTjJ4aXRoTVJVVkpodlU3OUlzT2UvWWlMZER5OFFRcHRpc214dS95ZGRlQyt2Z1BFMFdWb2xKVmprbU1HT0RMNC9YbEZkZFpncG9tMWowRkpqZnRPUHpJbElvSkwvYUVHR0puK3E2em1SZGlwcjk3Tkp3RkxUNmFUN3V4UjdMWmk2cVZxQjFmZkN3VTJVRWVVQWFJZUovQTlYZjgzTnptK1Yxb1BTSDZFSXVXZzFzVm42UEtyL3JlM2Vscks5YitpU08yeWdOTkxsb2plK0EvMlRmc0J3dmFxMThuaTFKeTh6RXVlL2E1a1krOStnSkdOQThsR3BLRUVXbEF1UFFlWDVobUR3MXNsMTJXMUtmYWc1UFRNOGFyQy9LL0FjVzltQUlFTXFpWVl6WmZJM25jUzI0MFByQ1BFRDFFQW9IMDdjbUZQQ1VycW5MRmxKZjl6blJIUmU2NmpHVjQ0SGNOcnZhSGZxMVRRQytaY056ckFxblN1ZC9wWVNDNHhLeGVoeWF4M2xDdzNsbzR0LzhlNHZVZWxwVFpjcUtOaDdXL0p0YlpwNkJrV2JmQldjc21ETEozcC9qM3ZDaG1rcXV0eWxxd0VCS3U1YnluamlrRDlFZEd3SDVwbURRQmsrQ0xoLzhXY0NveE9sT3dMV2EvTUY0VVdnQTlmOHdCUjV1T2VVMUcrUzFjSzBqKzRDbTltc2ZzbnNrZGlCQUVqdjIxbTQ5YituUEZVRkkyYURqUHdFL0Y4RmtTbFRJc1ZuK2hQVmVlMVFPVzFxU0tzZDdHUU1pNWtzSU5nNEp2ZnloMjVZaEwzdmR5VkpJTjhWdXRmQWV4aUhEZUMvbW5qcjh6Z3hkMS9Tb3FCZTluTWJTUUxCQXVlM0hZbXBSNWdBWllFcUdENmRIK0dtUURzQzJCSjVwakZEd1V0MG05ZU5KR0VTdERLZmxZUDJrTE1ReEc5a2FmVmt1SUk4bEMvZVhZNEpYWnR3Q0o4L1hKUVJ6SStQOXJHclpDYWU4Qk9qbDdwcVhkazBISnhVUUFtRkhFc0w1S0NNdWpiT0JEL1FKK25QMldYNXJib2YydWY3MUNNZ2ZaT3FFalFkSmZZblNveDlWQnFJTXFsOVh4R0lHL0RqcEttYXpmV2hneFMwb09DakRPTldKZnRYTk5FUDN5MWJaY0dhdnl0OFVnaklBa3pLRVJjNGhkaUY2ZktoRjhyN1Nhc2JyS3J6OWxHU25FWEhMTEUvcnFyVkIvS2JQLzRTRVRyR0RuZXJUZkJXeVVmd25PTzJjaFNLNmkrQmxReDgrcm5naVdlUFBzZ2ZPQlpHUDFFMWZGSjlZb3JVbnl5YnM4WHBZZDhhaXhLWTRCZndiQ2l5Mk55MXpwSDNDNE1HL0dsZWlIYi81TW9vSERkeVlTa0g4YmxHSm0zeC9mNi9VcEVJQ05LZGRVaEtkenR5Uy9YRG9jT2pUVlNnMGFadm5rMFoybU5VOSswTHVDWENNTkRyZzUvUjZWdlV6U2VhRWtPMjRQVnZiRHFIRXRTUVV0dUNqdDZDMlVaV3NkYnIySTNaVW16Y1cxeTFDQWUzS2lMT2xTU1c1dE9sc2ZLZ3FDMGxnN2VXZmZWeGdvMHlZMU5GbFhSQ3pWazVNT2tIYldSVzUrSDZxUWFaMERvWXVySHZlaVZETGNvNTl2Y3JJbFlvcDlQV0wyaE1ENEhiWGdaTzhMYzU5aUEvTzR0aUZMQm5sUXN0MjNLOWM3cUJHUG5hNVdjcU5zMTJWcHI4bXhrUDRJSzNXL1AwZEtVM2VpSnFTbG9DUUZTS0JFR3JTUGdnVm9QOEdSRVU1cXJlcnVkZzZFbTZYTlgzN1pnYWZoa2J2WWd2TmFtbDdScEpBQ3V6aDc4Q25sZGVya0pQWHJoRXFZbG9LOStpZUF5N05uemMwaU5oSVNZdGhuU2g2WDNXUllXS3BEaWdvbzRtME5zYUgraE51MExBWmZ2QjZNcVpTY2RxMkx0YnozdkdrbHZMSW9wcjlCTzRDNXRkZHFPWUg4VXFub28xdFBMSUNIb3djUG1ydHU3K1ZzL2wwK05NV0hxVWlJL3B2UUV6TVJjMStud3E2cUlZY3lVajc3NFU3VitNMVY1VzFuempYTnlZc0hOVmErRTZGMVJhazd5MkVvYmJhak5POGxVaFBqaEZ4UlhKcWVwd0NHTDM5dkJOUlRnNDl5NldXOWRjNkV5L29vNkdJRk9WWlpLUWdud1R1dktlZ2UyaWpnPQ==",
    username : "public"
  };
};

OPrime.guessCorpusUrlBasedOnWindowOrigin = function(dbname) {
  var optionalCouchAppPath = "";
  if(OPrime.isCouchApp()){
    var corpusURL = window.location.origin;
    if (corpusURL.indexOf("lignsync.org") >= 0) {
      corpusURL = "https://corpus.lingsync.org";
    } else if (corpusURL.indexOf("authdev.fieldlinguist.com") >= 0) {
      corpusURL = "https://ifielddevs.iriscouch.com";
    } else if (corpusURL.indexOf("prosody.linguistics.mcgill") >= 0) {
      corpusURL = "https://prosody.linguistics.mcgill.ca/corpus";
    } else if (corpusURL.indexOf("localhost") >= 0) {
      // use the window origin
    }
    optionalCouchAppPath = corpusURL+"/"+dbname+"/_design/pages/";
  }
  return optionalCouchAppPath;
};