package com.chatzz.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="Role")
public class Role {
	@Id
	private String uers_id;
	private String username;
	private String password;

}
