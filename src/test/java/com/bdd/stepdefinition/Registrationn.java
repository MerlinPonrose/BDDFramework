package com.bdd.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Registrationn extends TestExecutor{

	
	@Given("User launches chrome browser and opens the URL {string}")
	public void user_launches_chrome_browser_and_opens_the_URL(String url) {
		
	//	System.setProperty("webdriver.chrome.driver", "C:\\Users\\Karen Amy\\eclipse-workspace\\AprilWeekEndSelenium\\exe\\chromedriver.exe");
		
		ChromeOptions chromeOptions = new ChromeOptions();
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver(chromeOptions);
		
		driver.manage().window().maximize();
		
		driver.get(url); // to open URL
		

	 }

	@When("User click the firstname and enter the value {string}")
	public void user_click_the_firstname_and_enter_the_value(String FirstName) {
	
		regPage.enterFirstName(FirstName);
	  
	}

	@When("User click lastname and enter {string} in lastname field")
	public void user_click_lastname_and_enter_in_lastname_field(String Lastname) {
		regPage.enterLastName(Lastname);
	
	}

	@When("User click Address field and enterthe address {string}")
	public void user_click_Address_field_and_enterthe_address(String Adrr) {
		
		regPage.enterAddress(Adrr);

	  
	}

	@When("User click email and enter {string}")
	public void user_click_email_and_enter(String Email) {
		regPage.enterEmail(Email);
	 
	}

	@When("User click phonenumber and enter the value {string}")
	public void user_click_phonenumber_and_enter_the_value(String PhoneNum) {
		
	regPage.enterPhone(PhoneNum);
	 
	}

	@Then("User validate the page title is {string}")
	public void user_validate_the_page_title_is(String ExpectedTitle) {
		regPage.verifyPageTitle(ExpectedTitle);
	
	}
	

}
