package com.bdd.stepdefinition;

import java.util.List;
import java.util.Map;

import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class Alerttt extends TestExecutor{
	
	
	
	@When("User click the alertbox button")
	public void user_click_the_alertbox_button() {
	   alert.clickAlertBox();
	}

	@When("User switches to alert and click ok")
	public void user_switches_to_alert_and_click_ok() {
		
		alert.ClickalertOkButton();
	   
	}

	@When("user click and enter value in Firstname")
	public void user_click_and_enter_value_in_Firstname(DataTable data) {
	//asList
		/*List<String> l1 = 	data.asList();
	for(int i=0;i<l1.size();i++)
	{
	regPage.enterFirstName(l1.get(i));
	}*/
		
		
	//asLists	
	/*List<List<String>> l2 =	data.asLists(String.class);
		
	regPage.enterFirstName(l2.get(0).get(0));
	regPage.enterLastName(l2.get(0).get(1));*/
		
		
		//asMap
		
	/*Map<String, String>	map1 =data.asMap(String.class, String.class);
	
	regPage.enterFirstName(map1.get("FirstName"));*/
		
		
		//asMaps
		List<Map<String, String>> map2 =		data.asMaps(String.class, String.class);
		regPage.enterFirstName(map2.get(1).get("FirstName"));
		
	regPage.enterLastName(map2.get(0).get("LastName"));
	}
	
		
}
