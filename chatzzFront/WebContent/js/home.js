
var chatworld=angular.module("chatzz",["ngRoute"]);
chatworld.config(function($routeProvider)
{
	$routeProvider.when("/register",
			{
		templateUrl:"partials/register.html",
		controller:"registerController"
	
			})
			
	.when("/blog",
			{
		templateUrl:"partials/blog.html",
		controller:"blogController"
		
	        })
	.when("/career",
			{
		templateUrl:"partials/career.html",
		controller:"careerController"
			})
	.when("/login",
			{
		templateUrl:"partials/login.html",
		controller:"loginController"
			});
});

chatworld.controller("registerController",function($scope,$http)
		{
			console.log("iam in register controller")
			$scope.register=function()
			{
				var users={
						username:$scope.username,
						email:$scope.email,
						password:$scope.password,
						country:$scope.country
							};
				var res=$http.post("http://localhost:8080/chatzz/registerUser",users);
				res.success(function(data, status, headers, config)
				{
			console.log("status:"+status);
				});
			}
		});
chatworld.controller("blogController",function($scope,$http)
		{
			console.log("in blog controller");
			$scope.blog=function()
			{
				var blog={
						blog_Name:$scope.blog_Name,
						blog_Description:$scope.blog_Description
							};
var res=$http.post("http://localhost:8080/chatzz/createBlog",blog);
				res.success(function(data, status, headers, config)
						{
					console.log("status:"+status);
						});
			}
		});




chatworld.controller("careerController",function($scope,$http)
		{
			console.log("in career controller");
			$scope.career=function()
			{
				var career={
						
						job_Role:$scope.job_Role,
						job_Description:$scope.job_Description,
						eligibility:$scope.eligibility
								};
					var res=$http.post("http://localhost:8080/chatzz/createJob",career);
					res.success(function(data, status, headers, config)
						{
					console.log("status:"+status);
						});
			}
			
		
		
		});

/*chatworld.controller("loginController",function($scope,$http)
		{
			console.log("in login controller");
			$scope.login=function()
			{
				var login={
						
						username:$scope.username,
						password:$scope.password
								};
			var res=$http.post("http://localhost:8080/chatzz/authenticate",login);
					res.success(function(data, status, headers, config)
						{
					console.log("status:"+status);
						});
			}
			
		
		
		});

*/
chatworld.controller("loginController",['$scope','$http','$location','$rootScope',function($scope,$http,$location,$rootScope)
              {
              	console.log("in login controller");
              	$scope.login=function()
              		{
              		
              			var login={
              			username:$scope.username,
              			password:$scope.password
              							
              		} 
             	$http.post("http://localhost:8080/chatzz/authenticate",login).then(function(response)
             		{
             			console.log("result data:"+response.data);
                 		 var r=response.data.toString();
             			 console.log("response:"+r);
                				     
                			if(r==1)
                				{

                							
                					$rootScope.blog=true;
                					
                			     	$rootScope.career=true;
                            		$rootScope.login=false;
                					$rootScope.users=false;
                							
                					$rootScope.logout=true;
                							
                					console.log('logout:'+$rootScope.logout);
                					console.log("logged out:"+response.data);
                					$location.path('/index');
                							}
                						if(r==0)
                							{
                							$scope.username="";
                							$scope.password="";
                							$scope.message="username/password incorrect";
                							$location.path('/login');
                							}
                						if(r==2)
                						{
                							$rootScope.login=false;
                							$rootScope.register=false;
                							
                							$rootScope.users=true;
                							
                							$rootScope.logout=true;
                							
                						$location.path('/index');
                						}
                							}	
                				 ); 
                							 }
                						}]);
                						
