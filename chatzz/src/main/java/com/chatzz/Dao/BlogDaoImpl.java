package com.chatzz.Dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.chatzz.model.Blog;
@Transactional
@Repository
public class BlogDaoImpl implements BlogDao {
	@Autowired
	SessionFactory sessionfactory;
	public void createBlog(Blog blog) {
		sessionfactory.getCurrentSession().save(blog);
		
	}

}
