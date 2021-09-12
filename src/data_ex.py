import json
import time
from datetime import datetime

def update_tot_det(total_det, m_det, f_det):
    t_det_ind = 0

    curr_month = datetime.now().month
    print("Month: ", curr_month)

    #Open json file of chart data and find the month by index of array
    #change chart data values
    json_total = open('total_det.json')
    total_data = json.load(json_total)
    for i in total_data:
        t_det_ind = t_det_ind + 1
        if t_det_ind == curr_month:
            i['detections'] = total_det
            i['male'] = m_det
            i['female'] = f_det
        print(i)
    json_total.close()

    #dump new chart data into json file
    json_total = open('total_det.json', 'w')
    json.dump(total_data, json_total, indent = 6)
    json_total.close()

def update_gen_det(m_det, f_det):
    #Open json file of chart data and find the month by index of array
    #change chart data values
    gen_idx = 1

    json_gen = open('gender_det.json')
    gender_data = json.load(json_gen)
    for i in gender_data:
        if gen_idx == 1:
            i['male'] = m_det
            gen_idx = gen_idx + 1
        if gen_idx == 2:
            i['female'] = f_det
    json_gen.close()

    #dump new chart data into json file
    json_gen = open('gender_det.json', 'w')
    json.dump(gender_data, json_gen, indent = 6)
    json_gen.close()

def update_age_demo(age_demo):
    age_ind = 0
    age_sum = 0
    age_sum_list = [0] * 6

    for x in age_demo:
        age_sum = age_sum + x
        age_ind = age_ind + 1

        if(age_ind == 10):
            age_sum_list[0] = age_sum
            age_sum = 0
        if(age_ind == 20):
            age_sum_list[1] = age_sum
            age_sum = 0
        if(age_ind == 40):
            age_sum_list[2] = age_sum
            age_sum = 0
        if(age_ind == 60):
            age_sum_list[3] = age_sum
            age_sum = 0
        if(age_ind == 70):
            age_sum_list[4] = age_sum
            age_sum = 0
        if(age_ind == 200):
            age_sum_list[5] = age_sum

    age_ind = 0
    json_age = open('age_det.json')
    age_data = json.load(json_age)
    for i in age_data:
        i['detections'] = age_sum_list[age_ind]
        age_ind = age_ind + 1
    json_age.close()

    #dump new chart data into json file
    json_age = open('age_det.json', 'w')
    json.dump(age_data, json_age, indent = 6)
    json_age.close()


#Open text file of model data and calculate male, female and total detections
def model_data_parse():
    m_det = 0
    f_det = 0
    age_demo = [0] * 200

    txt_in = open("demofile2.txt", 'r')
    for x in txt_in:
        model_rec = x.split(',')
        age_demo[int(model_rec[1])] = age_demo[int(model_rec[1])] + 1
        if "Male" in x:
            m_det = m_det + 1;
        if "Female" in x:
            f_det = f_det + 1;
        print(x)
    total_det = m_det + f_det;
    txt_in.close()

    print("Male: ", m_det);
    print("Female: ", f_det);
    print("Total", total_det);

    update_tot_det(total_det, m_det, f_det)
    update_gen_det(m_det, f_det)
    update_age_demo(age_demo)

def main():
    inf_loop = "true"

    while inf_loop == "true":
          model_data_parse()
          time.sleep(60)

if __name__ == '__main__':
    main()
