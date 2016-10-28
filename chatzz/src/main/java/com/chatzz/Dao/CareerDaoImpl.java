package com.chatzz.Dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.chatzz.model.Career;


@Transactional
@Repository
public class CareerDaoImpl implements CareerDao {

	@Autowired
	SessionFactory sessionfactory;
	public void createJob(Career career) {
		sessionfactory.getCurrentSession().save(career);
	}

}
