let playerState = 'idle';
let select = document.getElementById('animation');

select.addEventListener('change', (e) => {
	let selected = e.target.value;
	playerState = selected;
})
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "./images/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;
// let frameY = 3;
let gameFrame = 0;
let staggerFrame = 6;
const spriteAnimation = [];

let animationState = [
	{ name: "idle", frames: 7 },
	{ name: "jump", frames: 7 },
	{ name: "fall", frames: 7 },
	{ name: "run", frames: 8 },
	{ name: "dizzy", frames: 10 },
	{ name: "sit", frames: 5 },
	{ name: "roll", frames: 7 },
	{ name: "bite", frames: 7 },
	{ name: "ko", frames: 12 },
	{ name: "gethit", frames: 4 },
];

animationState.forEach((state, index) => {
	let frame = {
		loc: [],
	};

	for (let i = 0; i < state.frames; i++) {
		let positionX = i * spriteWidth;
		let positionY = index * spriteHeight;

		frame.loc.push({ x: positionX, y: positionY });
	}

	spriteAnimation[state.name] = frame;
});
console.log(spriteAnimation);

function animate() {
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	let position = Math.floor(gameFrame / staggerFrame) % spriteAnimation[playerState].loc.length;
	let frameX = spriteWidth * position;
	let frameY = spriteAnimation[playerState].loc[position].y;
	console.log(frameY);
	ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight,0,0,spriteWidth,spriteHeight);

	gameFrame++;

	requestAnimationFrame(animate);
}
animate();
