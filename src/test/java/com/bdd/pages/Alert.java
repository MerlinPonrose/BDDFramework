package com.bdd.pages;

import org.openqa.selenium.By;

import com.bdd.stepdefinition.TestExecutor;

public class Alert extends TestExecutor{

	
	public static By alertButton = By.xpath("//button[@class='btn btn-danger']");
	
	
	public void clickAlertBox()
	{
		com.clickElement(alertButton);
	}
	
	public void ClickalertOkButton()
	{
		com.ClickOkInAlert();
	}
}
