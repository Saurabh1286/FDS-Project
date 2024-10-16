const categories = [
    "MonthWise", "Collision", "Helmet", "Licence", "LoadCondition",
    "SeatBelt", "Time", "TrafficControl", "TrafficViolation",
    "Type", "Weather", "Age_Sex", "RoadUser", "Accidents",
    "Fatal_Accidents", "Deaths", "Injured", "Total_Accidents"
];

const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
    "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
    "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Orissa", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", 
    "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", 
    "Chandigarh", "Dadra and Nagar Haveli", "Delhi", "Lakshadweep", 
    "Puducherry", "Total"
];

const subcategories = {
    'MonthWise': ['January - Fatal Accidents', 'January - Total Accidents', 'January - Persons Killed', 'January - Persons Injured - Greviously Injured', 'January - Persons Injured - Minor Injury', 'January - Persons Injured - Total Injured', 'February - Fatal Accidents', 'February - Total Accidents', 'February - Persons Killed', 'February - Persons Injured - Greviously Injured', 'February - Persons Injured - Minor Injury', 'February - Persons Injured - Total Injured', 'March - Fatal Accidents', 'March - Total Accidents', 'March - Persons Killed', 'March - Persons Injured - Greviously Injured', 'March - Persons Injured - Minor Injury', 'March - Persons Injured - Total Injured', 'April - Fatal Accidents', 'April - Total Accidents', 'April - Persons Killed', 'April - Persons Injured - Greviously Injured', 'April - Persons Injured - Minor Injury', 'April - Persons Injured - Total Injured', 'May - Fatal Accidents', 'May - Total Accidents', 'May - Persons Killed', 'May - Persons Injured - Greviously Injured', 'May - Persons Injured - Minor Injury', 'May - Persons Injured - Total Injured', 'June - Fatal Accidents', 'June - Total Accidents', 'June - Persons Killed', 'June - Persons Injured - Greviously Injured', 'June - Persons Injured - Minor Injury', 'June - Persons Injured - Total Injured', 'July - Fatal Accidents', 'July - Total Accidents', 'July - Persons Killed', 'July - Persons Injured - Greviously Injured', 'July - Persons Injured - Minor Injury', 'July - Persons Injured - Total Injured', 
        'August - Fatal Accidents', 'August - Total Accidents', 'August - Persons Killed', 'August - Persons Injured - Greviously Injured', 'August - Persons Injured - Minor Injury', 'August - Persons Injured - Total Injured', 'September - Fatal Accidents', 'September - Total Accidents', 'September - Persons Killed', 'September - Persons Injured - Greviously Injured', 'September - Persons Injured - Minor Injury', 'September - Persons Injured - Total Injured', 'October - Fatal Accidents', 'October - Total Accidents', 'October - Persons Killed', 'October - Persons Injured - Greviously Injured', 'October - Persons Injured - Minor Injury', 'October - Persons Injured - Total Injured', 'November - Fatal Accidents', 'November - Total Accidents', 'November - Persons Killed', 'November - Persons Injured - Greviously Injured', 'November - Persons Injured - Minor Injury', 'November - Persons Injured - Total Injured', 'December - Fatal Accidents', 'December - Total Accidents', 'December - Persons Killed', 'December - Persons Injured - Greviously Injured', 'December - Persons Injured - Minor Injury', 'December - Persons Injured - Total Injured', 'Total - Fatal Accidents', 'Total - Total Accidents', 'Total - Persons Killed', 'Total - Persons Injured - Greviously Injured', 'Total - Persons Injured - Minor Injury', 'Total - Persons Injured - Total Injured'], 
    'Collision': ['Hit and Run - Total Accdents', 'Hit and Run - Persons Killed', 'Hit and Run - Persons Injured - Greviously Injured', 'Hit and Run - Persons Injured - Minor Injury', 'With Parked Vehicle - Total Accdents', 'With Parked Vehicle - Persons Killed', 'With Parked Vehicle - Persons Injured - Greviously Injured', 'With Parked Vehicle - Persons Injured - Minor Injury', 'Hit from Back - Total Accdents', 'Hit from Back - Persons Killed', 'Hit from Back - Persons Injured - Greviously Injured', 'Hit from Back - Persons Injured - Minor Injury', 'Hit from side - Total Accdents', 'Hit from side - Persons Killed', 'Hit from side - Persons Injured - Greviously Injured', 'Hit from side - Persons Injured - Minor Injury', 'Run Off Road - Total Accdents', 'Run Off Road - Persons Killed', 'Run Off Road - Persons Injured - Greviously Injured', 'Run Off Road - Persons Injured - Minor Injury', 'Fixed Object - Total Accdents', 'Fixed Object - Persons Killed', 'Fixed Object - Persons Injured - Greviously Injured', 'Fixed Object - Persons Injured - Minor Injury', 'Vehicle Overturn - Total Accdents', 'Vehicle Overturn - Persons Killed', 'Vehicle Overturn - Persons Injured - Greviously Injured', 'Vehicle Overturn - Persons Injured - Minor Injury', 'Head on Collision - Total Accdents', 'Head on Collision - Persons Killed', 'Head on Collision - Persons Injured - Greviously Injured', 'Head on Collision - Persons Injured - Minor Injury', 'Others - Total Accidents', 'Others - Persons Killed', 'Others - Persons Injured - Greviously Injured', 'Others - Persons Injured - Minor Injury'], 
    'Helmet': ['Drivers - Persons Killed', 'Drivers - Persons Injured - Greviously Injured', 'Drivers - Persons Injured - Minor Injury', 'Drivers - Persons Injured - Total Injured', 'Passengers - Persons Killed', 'Passengers - Persons Injured - Greviously Injured', 'Passengers - Persons Injured - Minor Injury', 'Passengers - Persons Injured - Total Injured'], 
    'Licence': ['Valid Permanent License', "Learner's Licence", 'Without Licence', 'Others(Not known)', 'Total Accidents'], 
    'LoadCondition': ['Normally Loaded - No. of Accidents', 'Normally Loaded - No. of Persons - Killed', 'Normally Loaded - No. of Persons - Greviously Injured', 'Normally Loaded - No. of Persons - Minor Injured', 'Overloaded/Hanging - No. of Accidents', 'Overloaded/Hanging - No. of Persons - Killed', 'Overloaded/Hanging - No. of Persons - Greviously Injured', 'Overloaded/Hanging - No. of Persons - Minor Injured', 'Others - No. of Accidents', 'Others - No. of Persons - Killed', 'Others - No. of Persons - Greviously Injured', 'Others - No. of Persons - Minor Injured', 'Not Known - No. of Accidents', 'Not Known - No. of Persons - Killed', 'Not Known - No. of Persons - Greviously Injured', 'Not Known - No. of Persons - Minor Injured', 'Total all india - No. of Accidents', 'Total all india - No. of Persons - Killed', 'Total all india - No. of Persons - Greviously Injured', 'Total all india - No. of Persons - Minor Injured'], 
    'SeatBelt': ['Drivers - Persons Killed', 'Drivers - Persons Injured - Greviously Injured', 'Drivers - Persons Injured - Minor Injury', 'Drivers - Persons Injured - Total Injured', 'Passengers - Persons Killed', 'Passengers - Persons Injured - Greviously Injured', 'Passengers - Persons Injured - Minor Injury', 'Passengers - Persons Injured - Total Injured'], 
    'Time': ['06-900hrs - Day', '09-1200hrs - Day', '12-1500hrs - Day', '15-1800hrs - Day', '18-2100hrs - Night', '21-2400hrs - Night', '00-300hrs - Night', '03-600hrs - Night', 'Unknown Time', 'Total Accidents'], 
    'TrafficControl': ['Traffic Light Signal - Total number of Accidents', 'Traffic Light Signal - Persons Killed', 'Traffic Light Signal - Persons Injured - Greviously Injured', 'Traffic Light Signal - Persons Injured - Minor Injury', 'Traffic Light Signal - Persons Injured - Total Injured', 'Police Controlled - Total number of Accidents', 'Police Controlled - Persons Killed', 'Police Controlled - Persons Injured - Greviously Injured', 'Police Controlled - Persons Injured - Minor Injury', 'Police Controlled - Persons Injured - Total Injured', 'Stop Sign - Total number of Accidents', 'Stop Sign - Persons Killed', 'Stop Sign - Persons Injured - Greviously Injured', 'Stop Sign - Persons Injured - Minor Injury', 'Stop Sign - Persons Injured - Total Injured', 'Flashing Signal/Blinker - Total number of Accidents', 'Flashing Signal/Blinker - Persons Killed', 'Flashing Signal/Blinker - Persons Injured - Greviously Injured', 'Flashing Signal/Blinker - Persons Injured - Minor Injury', 'Flashing Signal/Blinker - Persons Injured - Total Injured', 'Uncontrolled - Total number of Accidents', 'Uncontrolled - Persons Killed', 'Uncontrolled - Persons Injured - Greviously Injured', 'Uncontrolled - Persons Injured - Minor Injury', 'Uncontrolled - Persons Injured - Total Injured', 'Others - Total number of Accidents', 'Others - Persons Killed', 'Others - Persons Injured - Greviously Injured', 'Others - Persons Injured - Minor Injury', 'Others - Persons Injured - Total Injured'], 
    'TrafficViolation': ['Over-Speeding - Number of Accidents', 'Over-Speeding - Persons Killed', 'Over-Speeding - Persons Injured - Greviously Injured', 'Over-Speeding - Persons Injured - Minor Injury', 'Over-Speeding - Persons Injured - Total Injured', 'Drunken Driving/ Consumption of alcohol and drug  - Number of Accidents', 'Drunken Driving/ Consumption of alcohol and drug  - Persons Killed', 'Drunken Driving/ Consumption of alcohol and drug  - Persons Injured - Greviously Injured', 'Drunken Driving/ Consumption of alcohol and drug  - Persons Injured - Minor Injury', 'Drunken Driving/ Consumption of alcohol and drug  - Persons Injured - Total Injured', 'Driving on Wrong side - Number of Accidents', 'Driving on Wrong side - Persons Killed', 'Driving on Wrong side - Persons Injured - Greviously Injured', 'Driving on Wrong side - Persons Injured - Minor Injury', 'Driving on Wrong side - Persons Injured - Total Injured', 'Jumping Red Light - Number of Accidents', 'Jumping Red Light - Persons Killed', 'Jumping Red Light - Persons Injured - Greviously Injured', 'Jumping Red Light - Persons Injured - Minor Injury', 'Jumping Red Light - Persons Injured - Total Injured', 'Use of Mobile Phone - Number of Accidents', 'Use of Mobile Phone - Persons Killed', 'Use of Mobile Phone - Persons Injured - Greviously Injured', 'Use of Mobile Phone - Persons Injured - Minor Injury', 'Use of Mobile Phone - Persons Injured - Total Injured', 'Others - Number of Accidents', 'Others - Persons Killed', 'Others - Persons Injured - Greviously Injured', 'Others - Persons Injured - Minor Injury', 'Others - Persons Injured - Total Injured'], 
    'Type': ['Fatal Accidents', 'Grievous Injury Accidents', 'Minor Injury Accidents', 'Non-Injury Accidents', 'Total Accidents'], 
    'Weather': ['Sunny/Clear - Total Accidents', 'Sunny/Clear - Persons Killed', 'Sunny/Clear - Persons Injured - Greviously Injured', 'Sunny/Clear - Persons Injured - Minor Injury', 'Sunny/Clear - Persons Injured - Total Injured ', 'Rainy - Total Accidents', 'Rainy - Persons Killed', 'Rainy - Persons Injured - Greviously Injured', 'Rainy - Persons Injured - Minor Injury', 'Rainy - Persons Injured - Total Injured ', 'Foggy and Misty - Total Accidents', 'Foggy and Misty - Persons Killed', 'Foggy and Misty - Persons Injured - Greviously Injured', 'Foggy and Misty - Persons Injured - Minor Injury', 'Foggy and Misty - Persons Injured - Total Injured ', 'Hail/Sleet - Total Accidents', 'Hail/Sleet - Persons Killed', 'Hail/Sleet - Persons Injured - Greviously Injured', 'Hail/Sleet - Persons Injured - Minor Injury', 'Hail/Sleet - Persons Injured - Total Injured ', 'Others - Total Accidents', 'Others - Persons Killed', 'Others - Persons Injured - Greviously Injured', 'Others - Persons Injured - Minor Injury', 'Others - Persons Injured - Total Injured '], 
    'Age_Sex': ['Less than 18 years - Male', 'Less than 18 years - Female', '18-25 Years - Male', '18-25 Years - Female', '25-35 Years - Male', '25-35 Years - Female', '35-45 Years - Male', '35-45 Years - Female', '45-60 Years - Male', '45-60 Years - Female', '60 and Above - Male', '60 and Above - Female', 'Age not known - Male', 'Age not known - Female', 'Total - Male', 'Total - Female'], 
    'RoadUser': ['Pedestrian - Male', 'Pedestrian - Female', 'Pedestrian - Total', 'Bicycles - Male', 'Bicycles - Female', 'Bicycles - Total', 'Two Wheelers - Male', 'Two Wheelers - Female', 'Two Wheelers - Total', 'Auto Rickshaws - Male', 'Auto Rickshaws - Female', 'Auto Rickshaws - Total', 'Cars, taxies Vans andLMV - Male', 'Cars, taxies Vans andLMV - Female', 'Cars, taxies Vans andLMV - Total', 'Trucks/Lorries - Male', 'Trucks/Lorries - Female', 'Trucks/Lorries - Total', 'Buses - Male', 'Buses - Female', 'Buses - Total', 'Other non  Motor vehicles(E-Rickshaw) - Male', 'Other non  Motor vehicles(E-Rickshaw) - Female', 'Other non  Motor vehicles(E-Rickshaw) - Total', 'Others - Male', 'Others - Female', 'Others - Total'], 
    'Accidents': ['Total Number of Road Accidents - 2017', 'Total Number of Road Accidents - 2018', 'Total Number of Road Accidents - 2019', 'Total Number of Road Accidents - 2020', 'Share of States/UTs in Total Number of Road Accidents - 2017', 'Share of States/UTs in Total Number of Road Accidents - 2018', 'Share of States/UTs in Total Number of Road Accidents - 2019', 'Share of States/UTs in Total Number of Road Accidents - 2020', 'Total Number of Accidents Per Lakh Population - 2017', 'Total Number of Accidents Per Lakh Population - 2018', 'Total Number of Accidents Per Lakh Population - 2019', 'Total Number of Accidents Per Lakh Population - 2020', 'Total Number of  Road Accidents per 10,000 Vehicles - 2017', 'Total Number of  Road Accidents per 10,000 Vehicles - 2018', 'Total Number of  Road Accidents per 10,000 Vehicles - 2019', 'Total Number of Road Accidents per 10,000 Vehicles - 2020', 'Total Number of  Road Accidents per 10,000 Km of Roads - 2017', 'Total Number of  Road Accidents per 10,000 Km of Roads - 2018', 'Total Number of Road Accidents per 10,000 Km of Roads - 2019', 'Total Number of Persons Killed in Road Accidents per 10,000 Km of Roads - 2020'], 
    'Fatal_Accidents': ['Number of Fatal Road Accidents in 2017', 'Number of Fatal Road Accidents in 2018', 'Number of Fatal Road Accidents in 2019', 'Number of Fatal Road Accidents in 2020'], 
    'Deaths': ['Total Number of Persons Killed in Road Accidents - 2017', 'Total Number of Persons Killed in Road Accidents - 2018', 'Total Number of Persons Killed in Road Accidents - 2019', 'Total Number of Persons Killed in Road Accidents - 2020', 'Share of States/UTs in Total Number of Persons Killed in Road Accidents - 2017', 'Share of States/UTs in Total Number of Persons Killed in Road Accidents - 2018', 'Share of States/UTs in Total Number of Persons Killed in Road Accidents - 2019', 'Share of States/UTs in Total Number of Persons Killed in Road Accidents - 2020', 'Total Number of Persons Killed in Road Accidents Per Lakh Population - 2017', 'Total Number of Persons Killed in Road Accidents Per Lakh Population - 2018', 'Total Number of Persons Killed in Road Accidents Per Lakh Population - 2019', 'Total Number of Persons Killed in Road Accidents Per Lakh Population - 2020', 'Total Number of Persons Killed in Road Accidents per 10,000 Vehicles - 2017', 'Total Number of Persons Killed in Road Accidents per 10,000 Vehicles - 2018', 'Total Number of Persons Killed in Road Accidents per 10,000 Vehicles - 2019', 'Total Number of Persons Killed in Road Accidents per 10,000 Vehicles - 2020', 'Total Number of Persons Killed in Road Accidents per 10,000 Km of Roads - 2017', 'Total Number of Persons Killed in Road Accidents per 10,000 Km of Roads - 2018', 'Total Number of Persons Killed in Road Accidents per 10,000 Km of Roads - 2019', 'Total Number of Persons Killed in Road Accidents per 10,000 Km of Roads - 2020'], 
    'Injured': ['Total Number of Persons Injured in Road Accidents - 2017', 'Total Number of Persons Injured in Road Accidents - 2018', 'Total Number of Persons Injured in Road Accidents - 2019', 'Total Number of Persons Injured in Road Accidents - 2020', 'Share of States/UTs in Total Number of Persons Injured in Road Accidents - 2017', 'Share of States/UTs in Total Number of Persons Injured in Road Accidents - 2018', 'Share of States/UTs in Total Number of Persons Injured in Road Accidents - 2019', 'Share of States/UTs in Total Number of Persons Injured in Road Accidents - 2020', 'Total Number of Persons Injured in Road Accidents Per Lakh Population - 2017', 'Total Number of Persons Injured in Road Accidents Per Lakh Population - 2018', 'Total Number of Persons Injured in Road Accidents Per Lakh Population - 2019', 'Total Number of Persons Injured in Road Accidents Per Lakh Population - 2020', 'Total Number of Persons injured in Road Accidents per 10,000 Vehicles - 2017', 'Total Number of Persons injured in Road Accidents per 10,000 Vehicles - 2018', 'Total Number of Persons injured in Road Accidents per 10,000 Vehicles - 2019', 'Total Number of Persons injured in Road Accidents per 10,000 Vehicles - 2020', 'Total Number of Persons injured in Road Accidents per 10,000 Km of Roads - 2017', 'Total Number of Persons injured in Road Accidents per 10,000 Km of Roads - 2018', 'Total Number of Persons injured in Road Accidents per 10,000 Km of Roads - 2019', 'Total Number of Persons injured in Road Accidents per 10,000 Km of Roads - 2020'], 
    'Total_Accidents': ['Total Number of Road Accidents (in numbers) ', 'Total Number of Persons Killed (in numbers) ', 'Total Number of Persons Injured (in numbers)', 'Population of India (in thousands)', 'Total Number of Registered Motor Vehicles (in thousands) ', 'Road Length (in kms)', 'Number of Accidents per Lakh Population', 'Number of Accidents per Ten Thousand Vehicles', 'Number of Accidents per Ten Thousand Kms of Roads ', 'Number of Persons Killed Per Lakh Population', 'Number of Persons Killed Per Ten Thousand Vehicles ', 'Number of Persons Killed per Ten Thousand Kms of Roads ', 'Number of Persons Injured per Lakh Population ', 'Number of Persons Injured Per Ten Thousand Vehicles', 'Number of Persons Injured Per Ten Thousand Kms of Roads ']};

function populateDropdowns() {
    const mainDropdown = document.getElementById('main-dropdown');
    const stateCheckboxes = document.getElementById('state-checkboxes');

    categories.forEach(category => {
        mainDropdown.innerHTML += `<option value="${category}">${category}</option>`;
    });

    states.forEach(state => {
        const checkbox = `<label><input type="checkbox" value="${state}">${state}</label>`;
        stateCheckboxes.innerHTML += checkbox;
    });
}

document.getElementById('main-dropdown').addEventListener('change', function() {
    const selected = this.value;
    const dropdownContainer = document.getElementById('dropdown-container');
    const saveButton = document.getElementById('save-button');

    if (selected) {
        dropdownContainer.style.display = 'flex'; 
        saveButton.style.display = 'block';
        const colsCheckboxes = document.getElementById('cols-checkboxes');
        colsCheckboxes.innerHTML = ''; 
        subcategories[selected].forEach(item => {
            const checkbox = `<label><input type="checkbox" value="${item}">${item}</label>`;
            colsCheckboxes.innerHTML += checkbox;
        });

    } else {
        dropdownContainer.style.display = 'none'; 
        saveButton.style.display = 'none'; 
    }
});

document.getElementById('save-button').addEventListener('click', function() {
    const selectedCategory = document.getElementById('main-dropdown').value;
    const selectedStates = Array.from(document.querySelectorAll('#state-checkboxes input:checked')).map(checkbox => checkbox.value);
    const selectedCols = Array.from(document.querySelectorAll('#cols-checkboxes input:checked')).map(checkbox => checkbox.value);

    const data = {
        category: selectedCategory,
        states: selectedStates,
        cols: selectedCols 
    };

    fetch('/your-flask-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        const plotImage = document.getElementById('plot-image');
        plotImage.src = data.plot_url; 
        plotImage.style.display = 'block'; 
        const output = document.getElementById('output');
        output.innerHTML = `<p>Data plotted!</p>`;
    })
    .catch((error) => {
        console.error('Error:', error);
        const output = document.getElementById('output');
        output.innerHTML = `<p>Error sending data!</p>`;
    });
});

populateDropdowns();
