angular.module('appModule')
	.component('appComponent', {
		template : '<h1>{{vm.message}}</h1>',
		controller : function() {
			var vm = this;
			
			vm.message = 'Hello World';
		},
		controllerAs : 'vm'
	});