package com.chat.Dao;

import java.util.List;

import com.chat.model.Blog;

public interface BlogDao {

		void createBlog(Blog blog);
		List<Blog> viewBlogs();
		void updateBlog(Blog blog);
		void deleteBlog(int id);
}
