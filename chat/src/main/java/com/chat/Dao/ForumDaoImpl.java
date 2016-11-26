package com.chat.Dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.chat.model.Forum;

@Repository
@Transactional
public class ForumDaoImpl implements ForumDao {

	@Autowired
	SessionFactory sessionfactory;
	
	public void createForum(Forum forum) {
		sessionfactory.getCurrentSession().save(forum);
		
	}

	public List<Forum> listForum(Forum forum) {
		Session session=sessionfactory.getCurrentSession();
		List<Forum> list=session.createCriteria(Forum.class).list();
		return list;
	}

}
