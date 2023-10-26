
// Creating Variables for Our Radio Inputs to Reuse & Avoid Code Duplication
const darkRadioButton = document.getElementById('dark');
const lightRadioButton = document.getElementById('light');




// getting the Local Storage Value(Function to get the ColorMode) On Page Refresh;
const getColorMode = () => {
    console.log('Get Color Mode');
    console.log(localStorage.getItem('colorMode'));
    if (localStorage.getItem('colorMode') === 'dark') {
        setDarkMode();
        darkRadioButton.click();
    }
    else if (localStorage.getItem('colorMode') === 'light') {
        setLightMode();
        lightRadioButton.click();
    }
}

const setDarkMode = () => {
    console.log("Set Dark Mode");
    document.querySelector('body').classList = 'dark';
}
const setLightMode = () => {
    console.log("Set Light Mode");
    document.querySelector('body').classList = 'light';
}


// Method For Detecting System Preference Color Theme & Position the Toggle Based on That
const getSystemPrefColorMode = () => {
    const query = console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
    const query1 = console.log(window.matchMedia("(prefers-color-scheme: light)").matches);
    if (localStorage.getItem('colorMode') === null) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            darkRadioButton.click();
        }
        else if (window.matchMedia("(prefers-colors-scheme: light)").matches) {
            lightRadioButton.click();
        }
    }
}

// Function to Check & Handle System Pref Theme Changes While Using Website
const checkSystemPrefThemeChanges = () => {
    console.log("Check System Changes");
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
        getSystemPrefColorMode();
    })
}
// Execute the Local Storage Function Upon Page Refresh
getColorMode();
// Function for identifying system preference color theme
getSystemPrefColorMode();
checkSystemPrefThemeChanges();




// Get the radiobutton inputs in my toggle wrapper class
const radioButtons = document.querySelectorAll('.toggle__wrapper input');
for (let i = 0; i < radioButtons.length; i++) {
    // Click event on the radio buttons
    // Triggering a Click event for each element 
    radioButtons[i].addEventListener('click', event => {
        console.log("Radio Button Clicked");
        console.log(i);
        // Handling JS Logic For Dark/Light Mode Switch
        // When dark theme is selected
        if (darkRadioButton.checked) {
            // Local Storage for saving the theme on Refresh of page
            localStorage.setItem('colorMode', 'dark');
            setDarkMode();

        }
        // When light theme is selected
        else {
            // Local Storage for saving the theme on Refresh of page
            localStorage.setItem('colorMode', 'light');
            setLightMode();

        }
    })
}
