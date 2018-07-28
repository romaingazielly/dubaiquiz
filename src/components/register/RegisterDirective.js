import Vue from 'vue'

Vue.directive('register', {
	bind(el, binding){
		el.addEventListener('click', function(){
			console.log('click ok')
		})
	}
})