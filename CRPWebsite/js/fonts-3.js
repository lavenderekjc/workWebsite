


/*Open new window for printing friendly
*/
function print_preview()
{
	
	print_ref=window.open('','',
  'width=995,height=600,left=100,top=25'
   +',menubar=1'
   +',toolbar=1'
   +',status=0'
   +',scrollbars=1'
   +',resizable=1');
  
   
   var content_vlue=document.getElementById("splash-container").innerHTML;
   
   /*var footer_vlue=document.getElementById("footer").innerHTML;*/
  var footer_vlue=('<table width="800" border="0" cellspacing="2" cellpadding="3"><tr align="center" valign="top"><td align="center"><span class="footer"><span class="ft_header">The Official Site of James City County, Virginia</span><br><a href="http://www.jamescitycountyva.gov/news/e-subscribe.html">e-subscribe</a> | <a href="../contact/index.html">Contact Us</a> | <a href="../citizens/how-do-i-find.html">How do I?</a> | <a href="http://www.jamescitycountyva.gov/epayment/">e-Payment</a><br><a href="../search/privacy-policy.html">Privacy Practices and Security Policy</a></span></td></tr><tr><td ></td></tr></table>');
  var template_open='<html><head><title>James City County Government</title>';
  
  template_open+='<link type="text/css" rel="stylesheet" href="http://www.jamescitycountyva.gov/css/jcc-2010-common-pr.css">';
   var block='<div id="header" align="center"><img src="http://www.jamescitycountyva.gov/images/headerMN1.jpg"></div>';
 	var template_body='</head>'+'<body>'+block+content_vlue+'<div id="clear">'+footer_vlue+'</div>'+'</body>';
  var template_close='</html>';
  
  print_ref.document.write(template_open+template_body+template_close);
  print_ref.document.close();
  print_ref.focus();
  print_ref.print();	
}