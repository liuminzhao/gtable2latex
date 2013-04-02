function mylatexify() {
  var range = SpreadsheetApp.getActiveRange();
  var numRows = range.getNumRows();
  var numCols = range.getNumColumns();
  var values = range.getValues();
  var rowvalues = "";
  var cell = "";
  var ans = "";
  
//  start string
  ans = "\\begin{tabular}{";
  var align = range.getHorizontalAlignments(); // get align
 // Logger.log(align);
  for (var i = 0; i < numCols; i ++) {
    if (align[0][i] == 'left') {
      ans += "l";
    } else if (align[0][i] == 'center') {
      ans += "c";
    } else {
      ans += "r";
    }
  } 
  
  ans += "}\n\\hline\n"; 
  
  for (i = 0; i < numRows; i ++){
    rowvalues = values[i];
    for (var j = 0; j < numCols; j++){
      cell = rowvalues[j];
      ans += cell;
      if (j < numCols -1) ans += "&";
    }
    ans += "\\\\\n";
  }
  
  ans += "\\hline\n\\end{tabular}\n"; 
  Logger.log(ans);
};
