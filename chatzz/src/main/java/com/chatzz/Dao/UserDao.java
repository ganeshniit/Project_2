package com.chatzz.Dao;



import java.util.List;

import com.chatzz.model.Users;


public interface UserDao {
	
	void registerUser(Users user);
	//public Users get(String id);
	//public List<Users> list(); 
	List<Users> getUsers();
	int validateUser(String username,String password);

}
