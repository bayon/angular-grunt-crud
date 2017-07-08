/*
angular.module('App',[]).controller('ctrl',['$scope',function($scope){ ...  }]);
	$scope.Table1 = [{foo:"123",bar:"Joe"},{foo:"999",bar:"Bill"}]
	$scope.entity = {}
	$scope.fnName = function(index){$scope.entity = $scope.table1[index]}
<a href="localhost:8888/ANGULAR/script.js">the script</a>
*/
var monkey=null;
var baboon=null;
var change="2.1";
var PROFILE_DATA = [
	      {
	        name : "Bob",
	        country : "Indonesia",
	        editable : false
	      },
	      {
	        name : "Soup-AT",
	        country : "Thailand",
	        editable : false
	      }
	    ];
angular.module('App', []).controller('CrudCtrl', ['$scope',
	function($scope) {
		//RETRIEVE PERSISTED DATA or use BACKUP DEFAULT DATA
		var data = localStorage.getItem('PROFILE_DATA');
		if(data == null){
			$scope.Profiles = PROFILE_DATA;
		}else{
			 $scope.Profiles = JSON.parse(data);
		}
		 
	 
	 
	 $scope.entity = {}
	    
	 $scope.edit = function(index){
	   $scope.entity = $scope.Profiles[index];
	   $scope.entity.index = index;
	   $scope.entity.editable = true;
	 }
	    
	 $scope.delete = function(index){
	   $scope.Profiles.splice(index,1);
	 }
	    
	 $scope.save = function(index){
	   $scope.Profiles[index].editable = false;
		//SAVE PERSIST data in LOCAL STORAGE.
		var PROFILE_datastring = JSON.stringify($scope.Profiles);
		localStorage.setItem('PROFILE_DATA',PROFILE_datastring);
	 }
	    
	 $scope.add = function(){
	   $scope.Profiles.push({
	      name : "",
        country : "",
        editable : true
	   })
	 }
	}
]);