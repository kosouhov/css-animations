window.onload = () => {
	let images = document.querySelectorAll('.retina-img')
	for (var i = 0; i < images.length; i++) {
		let e = images[i]
		e.style.width = e.width / 2 + 'px'
	}
	document.body.classList.add('ready');
}