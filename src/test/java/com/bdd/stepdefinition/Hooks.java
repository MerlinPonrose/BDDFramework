package com.bdd.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Hooks extends TestExecutor{
	
//globally	
	@Before(order=1)
	public void precondition1()
	{
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		
		driver.get("https://demo.automationtesting.in/Register.html"); // to open URL
		
	}

	@Before(order=2)
	public void precondition2()
	{
		System.out.println("Precondition 2");
	}
	
	@After(order=1)
	public void postcondition1()
	{
		System.out.println("post condition 1");
	//	driver.quit();
	}
	
	@After(order=2)
	public void postcondition2()
	{
		System.out.println("post condition 2");
	}
	
	@Before("@alert")
	public void alertPrecondition()
	{
		System.out.println("Precondition for alert");
	}
	
	@After("@Test")
	public void testpostcondition()
	{
		System.out.println("test post condition");
	}
}
