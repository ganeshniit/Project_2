package com.chatzz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.chatzz.Dao.BlogDao;
import com.chatzz.Dao.CareerDao;
import com.chatzz.Dao.UserDao;
import com.chatzz.model.Blog;
import com.chatzz.model.Career;
import com.chatzz.model.Users;

@RestController
public class UserController {
	
	@Autowired
	UserDao userDao;
	
	@Autowired
	BlogDao blogDao;
	
	@Autowired
	CareerDao careerDao;
	
	@RequestMapping(value="/registerUser",headers="Accept=Application/json",method=RequestMethod.POST)
	
	public void saveUser(@RequestBody Users user)
	{
		userDao.registerUser(user);
	}
	
	@RequestMapping(value="/createBlog",headers="Accept=Application/json",method=RequestMethod.POST)
	
	public void saveBlog(@RequestBody Blog blog)
	{
		blogDao.createBlog(blog);
	}
	
	@RequestMapping(value="/createJob",headers="Accept=Application/json",method=RequestMethod.POST)
	
	public void saveCareer(@RequestBody Career career)
	{
		careerDao.createJob(career);
	}
	
	
	@RequestMapping(value = "/getUsers", method = RequestMethod.GET, headers = "Accept=application/json")  
	 public List<Users> getUsers()
	 {
		 List<Users> users=userDao.getUsers();
		return users;
	 }	
}
