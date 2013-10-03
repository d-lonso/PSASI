const Cc = Components.classes;
const Ci = Components.interfaces;

Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");

function PSASICCKService() {}

PSASICCKService.prototype = {
  observe: function(aSubject, aTopic, aData) {
    switch(aTopic) {
      case "profile-after-change":
        Components.utils.import("resource://cck-PSASI/cckModule.jsm");
        break;
    }
  },
  classDescription: "CCK Service - PSASI",
  contractID: "@mozilla.org/cck-service-PSASI;2",
  classID: Components.ID("{06bdf02c-21b5-487b-9876-18f878ed4ec2}"),
  QueryInterface: XPCOMUtils.generateQI([Ci.nsIObserver]),
  _xpcom_categories: [{category: "profile-after-change"}]
}

if (XPCOMUtils.generateNSGetFactory)
  var NSGetFactory = XPCOMUtils.generateNSGetFactory([PSASICCKService]);
else
  var NSGetModule = XPCOMUtils.generateNSGetModule([PSASICCKService]);

