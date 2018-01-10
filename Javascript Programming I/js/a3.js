/*** NOTE: LA Times missing descriptions for some articles. These are skipped and result in an error in the Console. Please disregard. ***/
jQuery(
		function() {
			$('#articleButton').click(function xmlLoader() {
				$.ajax( {
					type: 'GET',
					url: 'http://www.latimes.com/rss2.0.xml',
					success: function(xmlData) {	
						var myXML = xmlData.responseText;
						var JSONConvertedXML = $.xml2json(myXML);

						var ranArt = Math.floor(Math.random() * JSONConvertedXML.channel.item.length);
							$('#myXMLList1').html('<li><b>' + JSONConvertedXML.channel.item[ranArt].title + '</b></li><li>' + '<a href="' + JSONConvertedXML.channel.item[ranArt].link + '">' + '<img src="' + JSONConvertedXML.channel.item[ranArt].thumbnail.url + '" /></a></li><li>' + JSONConvertedXML.channel.item[ranArt].description + '</li>');
							//alert(i);
					}//END success FUNCTION
					});//END AJAX
			});//END xmlLoader
		}//END MAIN FUNCTION CONTAINER
)
