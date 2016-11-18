/******************************************************************************
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
******************************************************************************/

define(["libs/spin/spin.min"], function(Spinner){
	var _defaults =  {
	        lines: 13, 				// The number of lines to draw
	        length: 8, 				// The length of each line
	        width: 3, 				// The line thickness
	        radius: 7, 				// The radius of the inner circle
	        corners: 1, 			// Corner roundness (0..1)
	        rotate: 0, 				// The rotation offset
	        direction: 1, 			// 1: clockwise, -1: counterclockwise
	        color: '#000', 			// #rgb or #rrggbb or array of colors
	        speed: 1.3, 			// Rounds per second
	        trail: 60, 				// Afterglow percentage
	        shadow: false, 			// Whether to render a shadow
	        hwaccel: false, 		// Whether to use hardware acceleration
	        className: 'spinner', 	// The CSS class to assign to the spinner
	        zIndex: 2e9, 			// The z-index (defaults to 2000000000)
	        top: '50%', 			// Top position relative to parent
	        left: '50%'				// Left position relative to parent
	};
	
	var OverlayLoader = function(elementId,options){
		options = options || {};
		var options = _.extend(_defaults,options) ;
		this.spinner = new Spinner(options).spin(document.getElementById(elementId));	
	};
	
	OverlayLoader.prototype.stopOverlay = function(){
		this.spinner.stop();
	};
	
	var Overlay = function(elementId, options){
		if(typeof elementId !== 'undefined'){
			var overlay = new OverlayLoader(elementId, options);
			return overlay;
		}
		return null;
		
	};
	
	return Overlay;
});
