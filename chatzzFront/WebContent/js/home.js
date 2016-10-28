
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
