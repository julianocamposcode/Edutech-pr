// scroll

var cards = document.querySelector(".card_geral");
var animateClass = Element.animate(keyframes);

function scroll() {
	var windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

	if (windowTop > cards.offsetTop) {
		cards.classList.add(animateClass);
	}else {
		cards.classList.remove(animateClass);
	}
}

scroll()

if (cards.length){

	window.addEventListener('scroll',()=>{
		scroll();

		console.log("jhfgdsjgfsdu");
	});
}
