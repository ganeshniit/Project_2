package com.chatzz.Dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.chatzz.model.Users;
@Transactional
@Repository
public class UserDaoImpl implements UserDao{

	@Autowired
	SessionFactory sessionfactory;
	public void registerUser(Users user) {
		sessionfactory.getCurrentSession().save(user);
		
	}
	public List<Users> getUsers() {
		Session session=sessionfactory.getCurrentSession();
		
		
		String hql="from Users";
		Query query=session.createQuery(hql);
		return query.list();
		/*  List<Users> list=session.createCriteria(Users.class).list();
		
		return list;*/
	}
	
	
	
}
