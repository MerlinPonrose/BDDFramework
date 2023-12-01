package com.bdd.runnerfile;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\neworkspace\\AprilWeekendBDD\\src\\test\\java\\com\\bdd\\feature",
				 glue="com.bdd.stepdefinition",
				 plugin= {"pretty","html:cucumberreport"},
				 monochrome=true,// to view console information in readable format
				 dryRun=false)// to check the unimplemented steps before execution
public class TestRunner {
	
	//tags= {"~@Regression"})
	//tags= {"@Regression","@Alert"})
	//tags= {"@Regression,@Alert"})
	//tags= {"@Regression"})

}
