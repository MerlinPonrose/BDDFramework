package com.bdd.stepdefinition;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;

import com.bdd.pages.RegisterPage;
import com.bdd.utility.Common;

public class TestExecutor {
	
	public static WebDriver driver;

	public static Common com = new Common();
	public static RegisterPage regPage = new RegisterPage();
	public static com.bdd.pages.Alert alert = new com.bdd.pages.Alert();
	
}
