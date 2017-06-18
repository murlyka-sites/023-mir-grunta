// $(document).ready(function() {
// 	var controller = new ScrollMagic.Controller();

// 	// new ScrollMagic.Scene({triggerElement: "#scene1", duration: 100, offset: -160})
// 	// 	//.setPin("#pin1")
// 	// 	.setClassToggle("#pin1", "animation")
// 	// 	// .on("enter leave", updateBox)
// 	// 	.addIndicators() // add indicators (requires plugin)
// 	// 	.addTo(controller);

// 	new ScrollMagic.Scene({triggerElement: "#scene1", duration: 450, offset: -110})
// 		//.setPin("#pin1")
// 		.setClassToggle("#pin2", "cargo")
// 		// .on("enter leave", updateBox)
// 		.addIndicators() // add indicators (requires plugin)
// 		.addTo(controller);

// 	new ScrollMagic.Scene({triggerElement: "#scene1", duration: 450, offset: -60})
// 		//.setPin("#pin1")
// 		.setClassToggle("#pin3", "cargo")
// 		// .on("enter leave", updateBox)
// 		.addIndicators() // add indicators (requires plugin)
// 		.addTo(controller);

// 	// var tween = TweenMax.staggerFromTo("#pin2", 2, {left: 700}, {left: 0, ease: Back.easeOut}, 0.15);
// 	var tween = TweenMax.to("#pin2", 0.5,  {left: 1920}, {left: 400});

// 	// build scene and supply getMousePos function as duration
// 	new ScrollMagic.Scene({triggerElement:  "#scene1", duration: 600, offset: -110})
// 		.setTween(tween)
// 		.addIndicators({name: "go 1", color: "white"}) // add indicators (requires plugin)
// 		.addTo(controller);

// 	var tween = TweenMax.to("#pin3", 0.5,  {left: 1920}, {left: 400});

// 	// build scene and supply getMousePos function as duration
// 	new ScrollMagic.Scene({triggerElement:  "#scene1", duration: 800, offset: -60})
// 		.setTween(tween)
// 		.addIndicators({name: "go 2"}) // add indicators (requires plugin)
// 		.addTo(controller);

// 	var tween = TweenMax.to("#pin4", 0.5,  {right: 1920}, {right: 480});

// 	// build scene and supply getMousePos function as duration
// 	new ScrollMagic.Scene({triggerElement:  "#scene2", duration: 600, offset: 0})
// 		.setTween(tween)
// 		.addIndicators({name: "go 3", color: "white"}) // add indicators (requires plugin)
// 		.addTo(controller);

// 	var tween = TweenMax.to("#pin5", 0.5,  {right: 1920}, {right: 480});

// 	// build scene and supply getMousePos function as duration
// 	new ScrollMagic.Scene({triggerElement:  "#scene2", duration: 650, offset: -50})
// 		.setTween(tween)
// 		.addIndicators({name: "go 4"}) // add indicators (requires plugin)
// 		.addTo(controller);


// 	var tween = TweenMax.to("#pin6", 0.5,  {left: 1920}, {left: 280});

// 	// build scene and supply getMousePos function as duration
// 	new ScrollMagic.Scene({triggerElement:  "#scene3", duration: 600, offset: 0})
// 		.setTween(tween)
// 		.addIndicators({name: "go 5", color: "white"}) // add indicators (requires plugin)
// 		.addTo(controller);

// 	var tween = TweenMax.to("#pin7", 0.5,  {left: 1920}, {left: 280});

// 	// build scene and supply getMousePos function as duration
// 	new ScrollMagic.Scene({triggerElement:  "#scene3", duration: 650, offset: -50})
// 		.setTween(tween)
// 		.addIndicators({name: "go 6"}) // add indicators (requires plugin)
// 		.addTo(controller);


// 	var tween = TweenMax.to("#pin8", 0.5,  {right: 1920}, {right: 280});

// 	// build scene and supply getMousePos function as duration
// 	new ScrollMagic.Scene({triggerElement:  "#scene4", duration: 600, offset: 0})
// 		.setTween(tween)
// 		.addIndicators({name: "go 7", color: "white"}) // add indicators (requires plugin)
// 		.addTo(controller);

// 	var tween = TweenMax.to("#pin9", 0.5,  {right: 1920}, {right: 280});

// 	// build scene and supply getMousePos function as duration
// 	new ScrollMagic.Scene({triggerElement:  "#scene4", duration: 650, offset: -150})
// 		.setTween(tween)
// 		.addIndicators({name: "go 8"}) // add indicators (requires plugin)
// 		.addTo(controller);

// 	var tween = TweenMax.to("#pin10", 0.5,  {left: 1920}, {left: 280});

// 	// build scene and supply getMousePos function as duration
// 	// new ScrollMagic.Scene({triggerElement:  "#targets", duration: 600, offset: 0})
// 	// 	.setTween(tween)
// 	// 	.addIndicators({name: "go 10", color: "white"}) // add indicators (requires plugin)
// 	// 	.addTo(controller);

// 	// var tween = TweenMax.to("#pin11", 0.5,  {left: 1331}, {left: 280});

// 	// build scene and supply getMousePos function as duration
// 	// new ScrollMagic.Scene({triggerElement:  "#targets", duration: 650, offset: 350})
// 	//  	.setPin("#pinfoo")
// 	// 	.setTween(tween)
// 	// 	.addIndicators({name: "a"}) // add indicators (requires plugin)
// 	// 	.addTo(controller);

// 	// new ScrollMagic.Scene({triggerElement:  "#targets", duration: 650, offset: 50})
// 	//  	.setPin("#map")
// 	// 	// .setTween(tween)
// 	// 	.addIndicators({name: "n"}) // add indicators (requires plugin)
// 	// 	.addTo(controller);
// });