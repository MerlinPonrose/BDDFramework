package com.bdd.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.bdd.stepdefinition.TestExecutor;
import com.bdd.utility.Common;

public class RegisterPage extends TestExecutor{
	
	
	public static String firstname = "//input[@placeholder='First Name']";
	public static By lastname = By.xpath("//input[@placeholder='Last Name']");
	public static By eemail = By.xpath("//input[@ng-model='EmailAdress']");
	public static By addr = By.tagName("textarea");
	public static By phoneeNum = By.xpath("//input[@ng-model='Phone']");
	
	
	
	public void enterFirstName(String FirstName)
	{
		com.entervalue(By.xpath(firstname), FirstName);
	}
	
	public void enterLastName(String Lastname)
	{
	 com.entervalue(lastname, Lastname); 
	}
	
	public void enterAddress(String Adrr)
	{
		com.entervalue(addr, Adrr);
	}
	
	public void enterEmail(String Email)
	{
		com.entervalue(eemail, Email);
	}
	
	public void enterPhone(String PhoneNum)
	{
		com.entervalue(phoneeNum, PhoneNum);
	}
	
	public void verifyPageTitle(String ExpectedTitle)
	{
		
		com.verifyPageTitle(ExpectedTitle);
		 
	}

}
