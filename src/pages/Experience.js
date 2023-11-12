import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import '../styles/Experience.css';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

export default function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="rgb(0, 40, 78)">
        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date="January - May 2022"
          iconStyle={{background: "#3e497", color: "#fff"}}
          icon={<SchoolIcon/>}
          > 
          <h3 classname="vertical-timeline-element-title">Cosumnes River College</h3>
          <p>Took my first programming course using Visual Basic.Net OOP for creating GUI desktop programs</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date="May 2022"
          iconStyle={{background: "#3e497", color: "#fff"}}
          icon={<SchoolIcon/>}
          > 
          <h3 classname="vertical-timeline-element-title">Cosumnes River College <SchoolIcon/></h3>
          <p>Graduated with my Associates Degree in Business Administration with a 
             concentration in Management Information Systems
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date="May - August 2022"
          iconStyle={{background: "#3e497", color: "#fff"}}
          icon={<SchoolIcon/>}
          > 
          <h3 classname="vertical-timeline-element-title">Cosumnes River College</h3>
          <p>Learned C++ through a summer course</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date="August 2022"
          iconStyle={{background: "#3e497", color: "#fff"}}
          icon={<SchoolIcon/>}
          > 
          <h3 classname="vertical-timeline-element-title">California State university, Sacramento</h3>
          <p>Started University and changed my major to Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date="August - December 2022"
          iconStyle={{background: "#3e497", color: "#fff"}}
          icon={<SchoolIcon/>}
          > 
          <h3 classname="vertical-timeline-element-title">California State university, Sacramento</h3>
          <p>Completed an Introduction to Java with OOP course</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date="January - May 2023"
          iconStyle={{background: "#3e497", color: "#fff"}}
          icon={<SchoolIcon/>}
          > 
          <h3 classname="vertical-timeline-element-title">California State university, Sacramento</h3>
          <p>Finished another Java course using OOP and learned simple data structures such as stacks, queues, and linked lists</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work" 
          date="May - August 2023"
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon={<WorkIcon />}
          > 
          <h3 classname="vertical-timeline-element-title">Centene Corporation - IT Automation Engineer Intern</h3>
          <p id="automation-part">Started my first internship at Centene Corporation under its management company. Here I: <br/>
            <ol>
              <li>
                ● Worked under Senior System Engineer mentor in the IT Linux/Middleware Team to provide and
                learn about various IT processes and functions.
              </li>
              <li>
                ● Created focused automation scripts using shell/bash in a Linux virtual machine
                (Putty/MobaXTerm) with Vim and became quite good with unix commands.
              </li>
              <li>
                ● Coded playbooks and saved them to Gitlab repository using Git and leveraged Red Hat Ansible
                Automation Platform to check and run jobs using those playbooks.
              </li>
              <li>
                ● Refactored existing playbooks and templates for better performance, understanding, and
                efficiency.
              </li>
              <li>
                ● Used SSH for logging into servers and solving problems such as copying files, disk space usage,
                log files, Java programs, etc..
              </li>
              <li>
                ● Used Jira to view the current sprint and create/track/update projects.
              </li>
              <li>
                ● Participated in daily team meetings with Scrum master to discuss project progress.
              </li>
            </ol>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date="August-current"
          iconStyle={{background: "#3e497", color: "#fff"}}
          icon={<SchoolIcon/>}
          > 
          <h3 classname="vertical-timeline-element-title">California State university, Sacramento</h3>
          <p id="automation-part">ExtraCurriculars:
            <ol>
              <li>● Codepath Web Development Course</li>
              <li>● Data Structures and Algorithms Club</li>
              <li>● Learning/Practicing DSA with LeetCode, CodeSignal, Hackerrank, NeedCode.io, Geeksforgeeks, Youtube, and through my college course</li>
              <li>● Learning Reactjs, Html, CSS, MySql, and Java Spring on the side by building projects</li>
            </ol>
          </p>
          <p id="automation-part">School Courses:
            <ol>
              <li>● Learning C and systems programming in Unix</li>
              <li>● Taking a Computer Software Engineering course and currently working on a client project</li>
              <li>● Learning Data Structures and Algorithms course</li>
              <li>● Taking an applied Linear Algebra course so I can later apply it to machine learning</li>
            </ol>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
