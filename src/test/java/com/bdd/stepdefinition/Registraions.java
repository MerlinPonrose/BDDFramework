package com.bdd.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Registraions extends TestExecutor{
	
	@When("User clicks the Female radio button")
	public void user_clicks_the_Female_radio_button() {
		
		WebElement femaleRadioButton = driver.findElement(By.xpath("//input[@value='FeMale']"));
		femaleRadioButton.click();
	  
	}

	@Then("User validates radio button is selected")
	public void user_validates_radio_button_is_selected() {
		
		WebElement femaleRadioButton = driver.findElement(By.xpath("//input[@value='FeMale']"));
	   if(femaleRadioButton.isSelected())
	   {
		   System.out.println("Female radio button is clicked");
	   }
	   else
	   {
		   System.out.println("Female radio button is not clicked");
	   }
	}


}
