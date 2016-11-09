package com.chat.Dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.chat.model.Blog;
@Transactional
@Repository
public class BlogDaoImpl implements BlogDao {
	@Autowired
	SessionFactory sessionfactory;
	public void createBlog(Blog blog) {
		sessionfactory.getCurrentSession().save(blog);
		
	}
	public List<Blog> viewBlogs() {
        Session session=sessionfactory.getCurrentSession();
        String hql="from Blog";
		Query query=session.createQuery(hql);
		return query.list();
	}
	public void updateBlog(Blog blog) {
		Session session=sessionfactory.getCurrentSession();
		  /*Date date=new Date();
			 String data=date.toString();
			 blog.setDate(data);*/
		session.update(blog);

	}
	public void deleteBlog(int id) {
		Session session=sessionfactory.getCurrentSession();
		Blog blog=(Blog)session.get(Blog.class,new Integer(id));
		session.delete(blog);

	}
	

}
