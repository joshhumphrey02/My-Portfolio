let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.querySelectorAll('.theme-dot');
themeDots.forEach(dots=>{
	dots.addEventListener('click', function(){
		let mode = this.dataset.mode
		setTheme(mode)
	})
})

function setTheme(mode){
	if(mode == 'light'){
		document.querySelector('#theme-style').href = './styles/light.css'
	}
	else if(mode == 'dark'){
		document.querySelector('#theme-style').href = './styles/dark.css'
	}

	localStorage.setItem('theme', mode)
}