import React from 'react';
import total_det from '../../../src/total_det.json';
import age_det from '../../../src/age_det.json';
import gender_det from '../../../src/gender_det.json';
import res_data from '../../../src/res_data.json';
import './Dashboard.scss';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Sector,
  Cell,
  Legend,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from 'recharts';

//Get data for charts from text files
// Array data is to be changed later on when we are able to fetch tinker data // For now, all data below is currently fake-d.
const totaldetections = total_det;
const agedetections = age_det;
const genderdetections = gender_det;
const data = res_data;

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const Dashboard = () => {
  return (
    <div>
      <div class="dashboard">
        <div class="dashboard__title">
          <h3>Dashboard.</h3>
        </div>
        <div class="dashboard__graph">
          <div class="dashboard__graph__one__subheading">
            <p>Total Detections</p>
            <div class="dashboard__graph__one__buttons">
              <button class="dashboard__graph__one__buttons__daily">
                Daily
              </button>
              <button class="dashboard__graph__one__buttons__monthly">
                Monthly
              </button>
              <button class="dashboard__graph__one__buttons__yearly">
                Yearly
              </button>
            </div>
          </div>
          <div class="dashboard__graph__one__heading">
            <p>Detections</p>
          </div>
          <ResponsiveContainer width="100%" height="30%">
            <LineChart
              width={500}
              height={400}
              data={totaldetections}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid horizontal={false} stroke="#3E74FF" />
              <XAxis dataKey="month" strokeWidth={0} />
              <YAxis strokeWidth={0} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="detections"
                stroke="#5383FF"
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="male" stroke="#8884d8" />
              <Line type="monotone" dataKey="female" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>

          <div className="flex">
            <div className="container">
              <div class="dashboard__graph__two__subheading">
                <p>Detections per age group</p>
              </div>
              <div class="dashboard__graph__two__heading">
                <p>Age Demographic</p>
              </div>
              <ResponsiveContainer width={'100%'} height={285}>
                <LineChart
                  width={500}
                  height={400}
                  data={agedetections}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid horizontal={false} stroke="#3E74FF" />
                  <XAxis dataKey="agegroup" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="detections"
                    stroke="#5383FF"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="container">
              <div class="dashboard__graph__three__subheading">
                <p>Detections per gender group</p>
              </div>
              <div class="dashboard__graph__three__heading">
                <p>Gender Demographic</p>
              </div>
              <ResponsiveContainer width={'100%'} height={285}>
                <BarChart
                  width={500}
                  height={400}
                  data={genderdetections}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="gender" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="male" fill="#3E74FF" />
                  <Bar dataKey="female" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="container">
              <div class="dashboard__graph__four__subheading">
                <p>Tinker Edge R - Device 1</p>
              </div>
              <div class="dashboard__graph__four__heading">
                <p>System Performance</p>
              </div>
              <div className="dashboard__graph__four__grid">
                <ResponsiveContainer
                  width={'100%'}
                  height={285}
                  className="dashboard__graph__four__grid__left"
                >
                  <PieChart width={400} height={400}>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div class="dashboard__graph__four__grid__right">
                  <p>Usage</p>
                  <div class="dashboard__graph__four__performance__usage__CPU">
                    <div className="dashboard__graph__four__grid__right__flex">
                      <div class="square__one"></div>
                      <p>CPU</p>
                      <p>33% 1.5GHz</p>
                    </div>
                  </div>
                  <div class="dashboard__graph__four__performance__usage__GPU">
                    <div className="dashboard__graph__four__grid__right__flex">
                      <div class="square__two"></div>
                      <p>GPU</p>
                      <p>25% 40 C</p>
                    </div>
                  </div>
                  <div class="dashboard__graph__four__performance__usage__RAM">
                    <div className="dashboard__graph__four__grid__right__flex">
                      <div class="square__three"></div>
                      <p>RAM</p>
                      <p>25% 0.5/1GB</p>
                    </div>
                  </div>
                  <div class="dashboard__graph__four__performance__usage__HDD">
                    <div className="dashboard__graph__four__grid__right__flex">
                      <div class="square__four"></div>
                      <p>HDD</p>
                      <p>17% 400MB/s</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
