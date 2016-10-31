
// Swap Provider to Factory :-) 

var application = angular.module('mainApp', []);

application.provider('date', function(){
	var salamu;
	return{										  	// returns the provider value.
		setJambo: function(value){
			salamu = value;
		},
		$get: function(){
			return{										// returns the injector value.
				showDate: function(){
					var date = new Date();
					return salamu + " It's " + date.getHours(); // will return the showDate value
				},
				devshowDate: function(){  // dvshowDate = developer showDate
				var date = new Date();
				return salamu + " It's " + date.getHours(); 
				}
			}
		}
	}

});

application.config(function(dateProvider){  //date = Provider name. Provider is the suffix.
	var time = dateProvider.$get().devshowDate();
	if (time > 0 && time < 12 ) {
		dateProvider.setJambo("Habari ya Asubuhi?");
	}else if(time > 12 && time < 17){
		dateProvider.setJambo("Habari ya Kushinda?");
	}else if(time > 17 && time < 19 ) {
		dateProvider.setJambo("Habari ya Jioni?");
	}else {
		dateProvider.setJambo("Usiku Mwema");
	}
});

application.controller('app', function($scope, date){ 
	$scope.hawayuni = date.showDate();
	});

