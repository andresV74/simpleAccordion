window.addEventListener('load', () => {
	const accordions = document.querySelectorAll('.accordion')
	const accordionsButton = document.querySelectorAll('.accordion__title')
	let openHeight = 0, rankingsInitialHeight = []

	for (const accordion of accordions) {
		accordion.style.height = `${
			accordion.firstElementChild.offsetHeight
		}px`;
	}

	accordionsButton.forEach((accordionButton, i) => accordionButton.addEventListener('click', (e) => {
		const father = accordionButton.parentNode
		const sibling = accordionButton.nextElementSibling

		e.preventDefault()
		for (const accordion of accordions) {
			accordion.style.height = `${
				accordion.firstElementChild.offsetHeight
			}px`;
			accordion.firstElementChild.classList.remove('active')
		}

		if (father.offsetHeight === accordionButton.offsetHeight) {
			father.style.height = `${father.offsetHeight + sibling.offsetHeight}px`
			accordionButton.classList.add('active')
		} else {
			accordionButton.classList.remove('active')
			father.style.height = `${accordionButton.offsetHeight}px`
		}

	}))

})