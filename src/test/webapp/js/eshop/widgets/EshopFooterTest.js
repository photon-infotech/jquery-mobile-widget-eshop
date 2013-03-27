/*
 * PHR_html_jquery_mobileapp
 *
 * Copyright (C) 1999-2013 Photon Infotech Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*global require */

require(  [ "jquery", "eshop/widgets/Footer"], function($, Footer) {

	//var equal = QUnit.equal, notEqual =  QUnit.notEqual, expect = QUnit.expect, testWithSameFooter = QUnit.test, testWithMismatchFooter = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the Footer-widget
	 */
	module("Footer.js;Footer");
	test("Testing Footer-widget unite test case for same Footer items.", function() {
		
        var data, footer, api, mainContent = $('<div ></div>'), 
        self = this, myCart = $('<div class="mycart_div"></div>'),
        footerContainer = $('<div id="container-foot" class="footer footerTop">'), ul, homeLI, browseLI,
        specialOffersLI, myCartLI, moreLI, output1, output2;
		
		footer = new Footer();
		footer.api = api;
		footer.listener = undefined;
		footer.phrescoapi = undefined;
		output1 = footer.renderUI();
		ul = $('<ul>');
        homeLI = $('<li class="home"></li>');
        browseLI = $('<li class="offerttab">');
        browseLI = $('<li id="browse" class="browse" ></li>');
        specialOffersLI = $('<li class="searchtab">');
        specialOffersLI = $('<li id="spl_offer" class="spl_offer"></li>');
        myCartLI = $('<li class="mucarttab">');
        myCartLI = $('<li id="mycart" class="mycart"></li>');
        moreLI = $('<li class="moretab">');
        moreLI = $('<li class="more"></li>');
        ul.append(homeLI);
        ul.append(browseLI);
        ul.append(specialOffersLI);
        ul.append(myCartLI);
        ul.append(moreLI);
        footerContainer.append(ul);
        mainContent.append(footerContainer);  
		output2 = mainContent;
		equal(output1.html(),output2.html(),"Success - Test case for Footer-widget Passed");
	});
	
	test("Testing Footer-widget unite test case for mismatch Footer items.", function() {
		
        var data, footer, api, mainContent = $('<div ></div>'), 
        self = this, myCart = $('<div class="mycart_div"></div>'),
        footerContainer = $('<div id="container-foot" class="footer footerTop">'), ul, homeLI, browseLI,
        specialOffersLI, myCartLI, moreLI, output1, output2;
		
		footer = new Footer();
		footer.api = api;
		footer.listener = undefined;
		footer.phrescoapi = undefined;
		output1 = footer.renderUI();
		ul = $('<ul>');
        homeLI = $('<li class="home"></li>');
        browseLI = $('<li class="offerttab">');
        browseLI = $('<li id="browseeee" class="browse" ></li>');
        specialOffersLI = $('<li class="searchtab">');
        specialOffersLI = $('<li id="spl_offer" class="spl_offer"></li>');
        myCartLI = $('<li class="mucarttab">');
        myCartLI = $('<li id="mycart" class="mycart"></li>');
        moreLI = $('<li class="moretab">');
        moreLI = $('<li class="more"></li>');
        ul.append(homeLI);
        ul.append(browseLI);
        ul.append(specialOffersLI);
        ul.append(myCartLI);
        ul.append(moreLI);
        footerContainer.append(ul);
        mainContent.append(footerContainer);  
		output2 = mainContent;
		notEqual(output1.html(),output2.html(),"Failuure - Mismatch In Tags");
	});
});