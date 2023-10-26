"use strict";var darkRadioButton=document.getElementById("dark"),lightRadioButton=document.getElementById("light"),getColorMode=function(){console.log("Get Color Mode"),console.log(localStorage.getItem("colorMode")),"dark"===localStorage.getItem("colorMode")?(setDarkMode(),darkRadioButton.click()):"light"===localStorage.getItem("colorMode")&&(setLightMode(),lightRadioButton.click())},setDarkMode=function(){console.log("Set Dark Mode"),document.querySelector("body").classList="dark"},setLightMode=function(){console.log("Set Light Mode"),document.querySelector("body").classList="light"},getSystemPrefColorMode=function(){console.log(window.matchMedia("(prefers-color-scheme: dark)").matches),console.log(window.matchMedia("(prefers-color-scheme: light)").matches);null===localStorage.getItem("colorMode")&&(window.matchMedia("(prefers-color-scheme: dark)").matches?darkRadioButton.click():window.matchMedia("(prefers-colors-scheme: light)").matches&&lightRadioButton.click())},checkSystemPrefThemeChanges=function(){console.log("Check System Changes"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){getSystemPrefColorMode()}))};getColorMode(),getSystemPrefColorMode(),checkSystemPrefThemeChanges();for(var radioButtons=document.querySelectorAll(".toggle__wrapper input"),_loop=function(e){radioButtons[e].addEventListener("click",(function(o){console.log("Radio Button Clicked"),console.log(e),darkRadioButton.checked?(localStorage.setItem("colorMode","dark"),setDarkMode()):(localStorage.setItem("colorMode","light"),setLightMode())}))},i=0;i<radioButtons.length;i++)_loop(i);
//# sourceMappingURL=script.js.map