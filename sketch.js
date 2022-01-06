var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	noLoop();
}

function draw() {
	background(0, 255, 255);

	let colors = [
		{ "value": color(255, 255, 255), "weight": 3 },
		{ "value": color(255, 0, 0), "weight": 1 },
		{ "value": color(0, 0, 255), "weight": 1 },
		{ "value": color(255, 255, 0), "weight": 1 }
	];

	let strokeWidth = 10;

	let rectWidths = [canvasWidth / 8, canvasWidth / 4, canvasWidth / 4 * 3, canvasWidth / 2];
	let rectHeights = [canvasHeight / 8, canvasHeight / 4, canvasHeight / 4 * 3, canvasHeight / 2];

	let y = 0;
	let x = 0;

	while (y < canvasHeight) {
		x = 0;
		let rectHeight = random(rectHeights);
		while (rectHeight + y == height) {
			// we want the rectangle height to be BIGGER than the lasting canvas, in order to cut off the last rectangle
			rectHeight = random(rectHeights);
		}
		while (x < canvasWidth) {
			let rectWidth = random(rectWidths);
			while (rectWidth + x == width) {
				// we want the rectangle width to be BIGGER than the lasting canvas, in order to cut off the last rectangle
				rectWidth = random(rectWidths);
			}
			rectangle(x, y, rectWidth, rectHeight, strokeWidth, colors)
			x = x + rectWidth;
		}
		y = y + rectHeight;
	}
}

function mousePressed() {
	redraw();
}

function rectangle(x, y, width, height, strokeWidth, colors) {
	stroke('black');
	strokeWeight(strokeWidth);
	fill(pickRandomWeightedItem(colors));
	rect(x - strokeWidth / 2, y - strokeWidth / 2, width, height);
}

function pickRandomWeightedItem(items) {
	let allItems = [];
	for (let i = 0; i < items.length; i++) {
		for (let j = 0; j < items[i].weight; j++) {
			allItems.push(items[i].value);
		}
	}
	return random(allItems);
}
