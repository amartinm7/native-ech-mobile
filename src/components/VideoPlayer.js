const observable = require("data/observable");
  
// Our new Observable view model for data binding
var viewmodel = new observable.Observable({});
  
// Page loaded      
function pageLoaded(args) {
    var page = args.object;
 
    viewmodel.set("htmlString", '<iframe width="100%" height="250" src="https://www.youtube.com/embed/scGRfqV95Xw" frameborder="0"></iframe>');
 
    page.bindingContext = viewmodel;
}
exports.pageLoaded = pageLoaded; 