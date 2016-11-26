package com.chat.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class jobRegistration {
 
	@Id@GeneratedValue
	private int student_Id;
	private int job_Id;
	
	private String stream;
	private String percentage;
	public int getStudent_Id() {
		return student_Id;
	}
	public void setStudent_Id(int student_Id) {
		this.student_Id = student_Id;
	}
	public int getJob_Id() {
		return job_Id;
	}
	public void setJob_Id(int job_Id) {
		this.job_Id = job_Id;
	}
	public String getStream() {
		return stream;
	}
	public void setStream(String stream) {
		this.stream = stream;
	}
	public String getPercentage() {
		return percentage;
	}
	public void setPercentage(String percentage) {
		this.percentage = percentage;
	}
	
	
	
	
	
}
