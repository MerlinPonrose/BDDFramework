package com.bdd.utility;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.bdd.stepdefinition.TestExecutor;

public class Common extends TestExecutor{
	
	
	public void clickElement(By loc)
	{
		WebElement ele = driver.findElement(loc);
		ele.click();
	}
	
	public void entervalue(By loc,String value)
	{
		WebElement ele = driver.findElement(loc);
		ele.click();
		ele.clear();
		ele.sendKeys(value);
	}
	
	public void verifyPageTitle(String ExpectedTitle)
	{
		String currentTitle = 	driver.getTitle();
		if(currentTitle.equalsIgnoreCase(ExpectedTitle))
		{
			System.out.println("Page title is as expected");
		}
		else
		{
			System.out.println("Page title is not as expected");
		}
	}
	
	public void ClickOkInAlert()
	{
		Alert alert = driver.switchTo().alert();
		alert.accept();
	}
	
	public void clickCancelInAlert()
	{
		Alert alert = driver.switchTo().alert();
		alert.dismiss();
	}

}
