package com.chat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.chat.Dao.BlogDao;
import com.chat.Dao.CareerDao;
import com.chat.Dao.UserDao;
import com.chat.model.Blog;
import com.chat.model.Career;
import com.chat.model.Users;
import com.chat.model.jobRegistration;

@RestController
public class UserController {
	
	@Autowired
	UserDao userDao;
	
	
	
	
	/*REGISTER*/
	@RequestMapping(value="/registerUser",headers="Accept=Application/json",method=RequestMethod.POST)
	
	public void saveUser(@RequestBody Users user)
	{
		userDao.registerUser(user);
	}
	@RequestMapping(value = "/getUsers", method = RequestMethod.GET, headers = "Accept=application/json")  
	 public List<Users> getUsers()
	 {
		 List<Users> users=userDao.getUsers();
		return users;
	 }
	
	
	
	
	
	
	
	/*BLOG*/
	@Autowired
	BlogDao blogDao;
	
		@RequestMapping(value="/createBlog",headers="Accept=Application/json",method=RequestMethod.POST)
	
	public void saveBlog(@RequestBody Blog blog)
	{
		blogDao.createBlog(blog);
	}
	
		@RequestMapping(value="/viewBlogs",headers="Accept=application/json",method=RequestMethod.GET)
	public List<Blog> viewBlogs()
	{
		List<Blog> blog=blogDao.viewBlogs();
		return blog;
	}
	
		@RequestMapping(value="/updateBlog",headers="Accept=application/json",method=RequestMethod.PUT)
	public void updateBlog(@RequestBody Blog blog)
	{
		System.out.println("Inside update blog");
		blogDao.updateBlog(blog);
	}
	
		/*@RequestMapping(value="/deleteBlog",headers="Accept=application/json",method=RequestMethod.DELETE)
	public void deleteJob(@RequestBody Blog blog)
	{
		blogDao.deleteBlog(blog);
	}*/
	
		@RequestMapping(value="/deleteBlog/{blog_Id}",headers="Accept=Application/json",method=RequestMethod.DELETE)
		public void deleteJob(@PathVariable int blog_Id)
		{
			blogDao.deleteBlog(blog_Id);
		}

	
	
	
	
	
	
	/*JOB*/
	@Autowired
	CareerDao careerDao;

	@RequestMapping(value="/createJob",headers="Accept=Application/json",method=RequestMethod.POST)
	
	public void saveCareer(@RequestBody Career career)
	{
		careerDao.createJob(career);
	}
	
	@RequestMapping(value="/viewCareers",headers="Accept=Application/json",method=RequestMethod.GET)
	
	public List<Career> viewJobs()
	{
		List<Career> career=careerDao.viewCareers();
		return career;
	}
	
	@RequestMapping(value="/updateCareers",headers="Accept=Application/json",method=RequestMethod.PUT)
	public void updateCareer(@RequestBody Career career)
	{
		careerDao.updateCareers(career);
	}
	
	/*@RequestMapping(value="/deleteCareers",headers="Accept=Application/json",method=RequestMethod.DELETE)
	public void deleteCareer(@RequestBody Career career)
	{
		careerDao.deleteCareers(career);
	}*/
	@RequestMapping(value="deleteJobs/{job_Id}",headers="Accept=Application/json",method=RequestMethod.DELETE)
	public void deleteJobs(@PathVariable int job_Id)
	{
		careerDao.deleteJobs(job_Id);
		
	}
	@RequestMapping(value="/registerJob",headers="Accept=Application/json",method=RequestMethod.POST)
	public void registerJob(@RequestBody jobRegistration jobReg)
	{
		careerDao.registerJob(jobReg);
	}
	
	
	
	
	
	
	/*AUTHENTICATION*/
	@RequestMapping(value="/authenticate", method=RequestMethod.POST,headers="Accept=application/json")
	public int authenticateUser(@RequestBody Users user)
	{
		System.out.println("In Authenticate");
		System.out.println("name:"+user.getUsername());
		System.out.println("password:"+user.getPassword());
		int result=0;
		result=userDao.validateUser(user.getUsername(), user.getPassword());
		System.out.println("result is:"+result);
		
		return result;
	}
}
