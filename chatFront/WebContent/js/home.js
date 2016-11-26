
var chatworld=angular.module("chat",["ngRoute"]);
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
	 .when("/blogAdmin",
			{
		templateUrl:"partials/blogAdmin.html",
		controller:"adminBlogController"
		
	        })
	 .when("/admin",
			{
		templateUrl:'partials/admin.html',
		controller:'adminController'					
			})
	.when("/userHome",
			{
		templateUrl:'partials/userHome.html',
		controller:'userHomeController'					
			})
	.when("/career",
			{
		templateUrl:"partials/career.html",
		controller:"careerController"
			})
	/*.when("/adminJobs",
			{
		templateUrl:"partials/adminJobs.html",
		controller:"adminJobsController"
			})*/
	.when("/forum",
			{
		templateUrl:"partials/forum.html",
	    controller:"forumController"
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
				var res=$http.post("http://localhost:8081/chat/registerUser",users);
				res.success(function(data, status, headers, config)
				{
			console.log("status:"+status);
				});
			}
		});
chatworld.controller("blogController",function($scope,$http,$rootScope)
		{
	$rootScope.blog=true;
	$rootScope.forum=true;
	$rootScope.career=true;
	$rootScope.login=false;
	$rootScope.register=false;
	$rootScope.logout=true;
	//$location.path('/logout');
			$http.get("http://localhost:8081/chat/viewBlogs").then(function (response) {$scope.blogs = response.data;});
			console.log("in blog controller");
			$scope.blog=function()
			{
				var blog={
						blog_Name:$scope.blog_Name,
						blog_Description:$scope.blog_Description
							};
            var res=$http.post("http://localhost:8081/chat/createBlog",blog);
  			$http.get("http://localhost:8081/chat/viewBlogs").then(function (response) {$scope.blogs = response.data;});

              res.success(function(data, status, headers, config)
						{
            	  			$scope.message = data;
            	  			console.log("status:"+status);
						});
			
			}
			$scope.editBlog=function(blog)
			{
				console.log("inside editblog");
				console.log("blog:"+blog);
				$scope.blogDataToEdit=blog;
			}
						 		 
			$scope.saveEdit=function()
			{
				var blog = {
		    				blog_Name:$scope.blogDataToEdit.blog_Name,
		    				blog_Description:$scope.blogDataToEdit.blog_Description,
		 					blog_Id:$scope.blogDataToEdit.blog_Id
		 		};
				$http.put('http://localhost:8081/chat/updateBlog', blog);
				

			$http.get("http://localhost:8081/chat/viewBlogs").then(function (response) {$scope.blogs = response.data;});
			}
			
		$scope.deleteBlog=function(blogDataToEdit)
			{
				console.log("In the delete blog");
				blog_Id:$scope.blogDataToEdit.blog_Id;
				console.log("blog_Id:"+blogDataToEdit.blog_Id);
				//$http.delete('http://localhost:8081/chat/deleteBlog/'+blogDataToEdit.blog_Id);
				
				$http['delete']('http://localhost:8081/chat/deleteBlog/'+blogDataToEdit.blog_Id);
				$http.get("http://localhost:8081/chat/viewBlogs").then(function (response) {$scope.blogs = response.data;});
			}
			
		});
chatworld.controller("adminBlogController",function($scope,$http,$rootScope)	
		{	
			$rootScope.login=false;
			$rootScope.Users=false;
	
			$rootScope.home=false;
	
			$rootScope.users=true;
			$rootScope.registeredUsers=true;
	
			console.log(" in adminblog controller");
	
			$http.get("http://localhost:8081/chat/viewBlogs").then(function (response) 
					{
			    	
			    	$scope.blogs = response.data;
			    	
			    	console.log("data:"+response.data);
					});
			
				$scope.AppDisapp=function(adminblog)
				{
					console.log("inside appdisappblog");
					console.log("adminblog:"+adminblog);
					$scope.blogstatus=adminblog;
				}
				$scope.approveBlog=function()
				{
					console.log("in approveblog");
					var edit=
					{
							blog_Id:$scope.blogstatus.blog_Id,
							blog_Name:$scope.blogstatus.blog_Name,
							blog_Description:$scope.blogstatus.blog_Description,
							status:true
					}
				$http.put("http://localhost:8081/chat/updateBlog",edit);
				$http.get("http://localhost:8081/chat/viewBlogs").then(function (response) 
						{
	    	
					$scope.blogs = response.data;
	    	
					console.log("data:"+response.data);
						});
				}
				
				
				
			$scope.disapproveBlog=function()
				{
					console.log("in disapproveblog");
					var edit=
					{
							blog_Id:$scope.blogstatus.blog_Id,
							blog_Name:$scope.blogstatus.blog_Name,
							blog_Description:$scope.blogstatus.blog_Description,
							status:false
					}
					$http.put("http://localhost:8081/chat/updateBlog",edit);
					$http.get("http://localhost:8081/chat/viewBlogs").then(function (response) 
					{
	    	
						$scope.blogs = response.data;
	    	
						console.log("data:"+response.data);
					});
					}

		});	

chatworld.controller("careerController",function($scope,$http,$rootScope)
		{
	$rootScope.blog=true;
	$rootScope.forum=true;
	$rootScope.career=true;
	$rootScope.login=false;
	$rootScope.register=false;
	$rootScope.logout=true;
	//$location.path('/logout');
			$http.get("http://localhost:8081/chat/viewCareers").then(function (response) {$scope.careers = response.data;});
			console.log("in career controller");
			$scope.job=function()
			{
				var obj={
						job_Role:$scope.job_Role,
						job_Description:$scope.job_Description,
						eligibility:$scope.eligibility
							};
            var res=$http.post("http://localhost:8081/chat/createJob",obj);
  			$http.get("http://localhost:8081/chat/viewCareers").then(function (response) {$scope.careers = response.data;});

              res.success(function(data, status, headers, config)
						{
            	  			$scope.message = data;
            	  			console.log("status:"+status);
						});
			
			}
			$scope.editJob=function(career)
			{
				console.log("inside editJob");
				console.log("Career:"+career);
				$scope.careerDataToEdit=career;
			}
						 		 
			$scope.saveEdit=function()
			{
				var job = {
							job_Id:$scope.careerDataToEdit.job_Id,
		    				job_Role:$scope.careerDataToEdit.job_Role,
		    				job_Description:$scope.careerDataToEdit.job_Description,
		 					eligibility:$scope.careerDataToEdit.eligibility
		 		};
				$http.put('http://localhost:8081/chat/updateCareers', job);
				

			$http.get("http://localhost:8081/chat/viewCareers").then(function (response) {$scope.careers = response.data;});
			}
			
			
			$scope.deleteJob=function(careerDataToEdit)
			{
				console.log("In the delete Job");
				job_Id:$scope.careerDataToEdit.job_Id;
				console.log("job_Id:"+careerDataToEdit.job_Id);
				//$http.delete('http://localhost:8081/chat/deleteCareers'+careerDataToEdit.job_Id);
				$http['delete']('http://localhost:8081/chat/deleteJobs/'+careerDataToEdit.job_Id);
				$http.get("http://localhost:8081/chat/viewCareers").then(function (response) {$scope.careers = response.data;});
			}
			/*$scope.deleteJob=function(careerDataToEdit)
			{
				var del=
					{
				job_Id:$scope.careerDataToEdit.job_Id
					}
			$http.get("http://localhost:8081/chat/deleteCareers",del);
			$http.get("http://localhost:8081/chat/viewCareers").then(function (response)
					{
						$scope.careers = response.data;
				     	console.log("data:"+response.data);
				    });
			}
*/
			


		});


chatworld.controller("adminController",function($scope,$http)
		{
			$scope.message="this is admin home"
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
			var res=$http.post("http://localhost:8081/chat/authenticate",login);
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
             	$http.post("http://localhost:8081/chat/authenticate",login).then(function(response)
             		{
             			console.log("result data:"+response.data);
                 		 var r=response.data.toString();
             			 console.log("response:"+r);
                				     
                			if(r==1)
                				{

                							
                					$rootScope.blog=true;
                					
                			     	$rootScope.career=true;
                            		$rootScope.login=false;
                					$rootScope.register=false;
                							
                					$rootScope.logout=true;
                							
                					console.log('logout:'+$rootScope.logout);
                					console.log("logged out:"+response.data);
                					$location.path('/userHome');
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
                							$rootScope.blog=true;
                							$rootScope.forum=true;
                							$rootScope.users=false;
                							
                							$rootScope.logout=true;
                							
                						$location.path('/admin');
                						}
                							}	
                				 ); 
                							 }
                						}]);
                						
chatworld.controller("forumController",function($scope,$http,$rootScope)
		{
	console.log("in forum");
	$rootScope.login=false;
	$rootScope.register=false;
	$scope.forum=function()
	{
		var forum={
				questionName:$scope.questionName,
				response:$scope.response
				
		};
		var res=$http.post("http://localhost:8081/chat/createForum",forum); 
		res.success(function(data, status, headers, config) {
		console.log("status:"+status);
	});
	}
	
	});
