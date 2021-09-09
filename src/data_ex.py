import json
import time
from datetime import datetime

inf_loop = "true"

while inf_loop == "true":
      m_det = 0;
      f_det = 0;
      t_det_ind = 0;
#Open text file of model data and calculate male, female and total detections
      txt_in = open("demofile2.txt", "r")
      for x in txt_in:
          if "Male" in x:
              m_det = m_det + 1;
          if "Female" in x:
              f_det = f_det + 1;
          print(x)
      total_det = m_det + f_det;
      txt_in.close()

#Check current month and return as number
      curr_month = datetime.now().month
      print("Month: ", curr_month)

#Open json file of chart data and find the month by index of array
#change chart data values
      json_in = open("age_det.json")
      data = json.load(json_in)
      for i in data:
          t_det_ind = t_det_ind + 1;
          if t_det_ind == curr_month:
              i['detections'] = total_det
              i['male'] = m_det
              i['female'] = f_det
          print(i)
      json_in.close()

#dump new chart data into json file
      json_in = open("age_det.json", "w")
      json.dump(data, json_in, indent = 6)
      json_in.close()

      print("Male: ", m_det);
      print("Female: ", f_det);
      print("Total", total_det);
      
      time.sleep(60)
