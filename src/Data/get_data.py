import json
from datetime import datetime, timedelta
import pandas as pd


# pd.set_option('display.max_columns', None)
# pd.set_option('display.max_rows', None)

gap = timedelta(hours=3)
now = datetime.now() + gap

columnss = ["Term Code", "Subject", "Catalog Nbr", "Component Code", "Component Descr", "Course Title", "Class Status",
            "Location Code", "Instruction Mode code", "Instruction Mode Descr",
            "Meeting Pattern Nbr", "Room Code", "Building Code", "Room", "Class Start Time", "Class End Time",
            "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun", "Start Date (DD/MM/YYYY)", "End Date (DD/MM/YYYY)"]
columns = ["Class Start Time", "Class End Time", "Building Code", "Room",
           "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]


# loading data with required columns
df = pd.read_csv("data/fall2021.csv", usecols=columns)
current_time = now.strftime("%H:%M:%S")


# get data of specific building, room & day
def get_data_info(building_letter, room_number, day_of_week):
    return df[(df["Building Code"] == building_letter) & (df["Room"] == room_number) & (df[day_of_week] == "Y")]


# compute when a room is available for one day
def get_break_times(df_day):
    if not df_day.empty:
        break_start_time, school_close_time = "07.00.00", "23.00.00"
        df_day = df_day.sort_values(by=["Class Start Time"])
        df_day = df_day.drop_duplicates(subset="Class Start Time", keep="last")
        times = []
        for index, row in df_day.iterrows():
            # print(row["Class Start Time"], row["Class End Time"])
            times.append([break_start_time, row["Class Start Time"]])
            break_start_time = row["Class End Time"]

        times.append([break_start_time, school_close_time])
        return times


# compute when a room is available for weekdays
def get_room_breaks(building_letter, room_number):
    if not df[(df["Building Code"] == building_letter) & (df["Room"] == room_number)].empty:
        monday_break_times = get_break_times(get_data_info(building_letter, room_number, "Mon"))
        tuesday_break_times = get_break_times(get_data_info(building_letter, room_number, "Tues"))
        wednesday_break_times = get_break_times(get_data_info(building_letter, room_number, "Wed"))
        thursday_break_times = get_break_times(get_data_info(building_letter, room_number, "Thurs"))
        friday_break_times = get_break_times(get_data_info(building_letter, room_number, "Fri"))

        # print(monday_break_times)
        # print(tuesday_break_times)
        # print(wednesday_break_times)
        # print(thursday_break_times)
        # print(friday_break_times)

        room = {
            "monday": monday_break_times,
            "tuesday": tuesday_break_times,
            "wednesday": wednesday_break_times,
            "thursday": thursday_break_times,
            "friday": friday_break_times
        }

        return room


# get data of all rooms in a building
# note that for the classes in range 1-1000, they are stored in a string of length 3, for 1000+ , in a string of length 4
def get_building_data(building_letter):
    building = {building_letter: {}}

    for room_num in range(1000):
        room_str = format(room_num, '03d')
        if not df[(df["Building Code"] == building_letter) & (df["Room"] == room_str)].empty:
            building[building_letter][room_str] = (get_room_breaks(building_letter, room_str))

    for room_num in range(1000, 1500):
        room_str = format(room_num, '04d')
        if not df[(df["Building Code"] == building_letter) & (df["Room"] == room_str)].empty:
            building[building_letter][room_str] = (get_room_breaks(building_letter, room_str))

    return building


# getting the data for H building and saving it in a json file

buildingH = get_building_data("H")
buildingHJSON = json.dumps(get_building_data("H"), indent=4)

print(buildingHJSON)

buildingHJson = json.loads(buildingHJSON)

with open("sample2.json", "w") as outfile:
    json.dump(buildingHJSON, outfile)


