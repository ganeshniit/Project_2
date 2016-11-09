package com.chat.Dao;

import java.util.List;

import com.chat.model.Forum;

public interface ForumDao {

	void createForum(Forum forum);
	List<Forum> listForum(Forum forum);
}
