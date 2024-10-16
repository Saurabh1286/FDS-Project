import base64
import io
from flask import Flask, jsonify, render_template, request
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
path = r"C:\Users\user\Desktop\Project"

MonthWise = pd.read_csv(rf"{path}/datasets/New/2020_All_MonthWise.csv")
Collision = pd.read_csv(rf"{path}/datasets/New/2020_Accidents_Collision.csv")
Helmet = pd.read_csv(rf"{path}/datasets/New/2020_Accidents_Helmet.csv")
Licence = pd.read_csv(rf"{path}/datasets/New/2020_Accidents_Licence.csv")
LoadCondition = pd.read_csv(rf"{path}/datasets/New/2020_Accidents_LoadCondition.csv")
SeatBelt = pd.read_csv(rf"{path}/datasets/New/2020_Accidents_SeatBelt.csv")
Time = pd.read_csv(rf"{path}/datasets/New/2020_Accidents_Time.csv")
TrafficControl = pd.read_csv(rf"{path}/datasets/New/2020_Accidents_TrafficControl.csv")
TrafficViolation = pd.read_csv(rf"{path}/datasets/New/2020_Accidents_TrafficViolation.csv")
Type = pd.read_csv(rf"{path}/datasets/New/2020_Accidents_Type.csv")
Weather = pd.read_csv(rf"{path}/datasets/New/2020_Accidents_Weather.csv")
Age_Sex = pd.read_csv(rf"{path}/datasets/New/2020_Deaths_Age_Sex.csv")
RoadUser = pd.read_csv(rf"{path}/datasets/New/2020_Deaths_RoadUser_Sex.csv")
Accidents = pd.read_csv(rf"{path}/datasets/New/2017-2020_Accidents_Total.csv")
Fatal_Accidents = pd.read_csv(rf"{path}/datasets/New/2017-2020_Fatal_Accidents.csv")
Deaths = pd.read_csv(rf"{path}/datasets/New/2017-2020_Deaths_Total.csv")
Injured = pd.read_csv(rf"{path}/datasets/New/2017-2020_Injured_Total.csv")
Total_Accidents = pd.read_csv(rf"{path}/datasets/New/1970-2020_Total.csv")
statelist = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal', 'Andaman and Nicobar Is.', 'Chandigarh', 'Dadra and Nagar Haveli', 'Delhi ', 'Lakshadweep', 'Puducherry', 'Total']

app = Flask(__name__,)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/your-flask-endpoint', methods=['POST'])
def handle_data():
    data = request.get_json()
    print(data) 
    plt.figure(figsize=(12,5))
    stateindex = [statelist.index(i) for i in data["states"]]
    temp = globals()[data["category"]].iloc[stateindex]
    df = pd.melt(temp, id_vars="States/UTs", value_vars=data["cols"], var_name="Columns", value_name="values")
    sns.barplot(data=df, x="States/UTs", y="values", hue="Columns")
    plt.xticks(rotation=0)
    plt.ylabel("Number of Accidents/Deaths")
    img = io.BytesIO()
    plt.savefig(img, format='png')
    plt.close()
    img.seek(0)
    plot_url = base64.b64encode(img.getvalue()).decode()
    
    return jsonify({"plot_url": f"data:image/png;base64,{plot_url}"}), 200

if __name__ == '__main__':
    app.run(debug=True)