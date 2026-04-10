"use client";
import React from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { WorkSection } from "@/components/workPage/workSection";

const projectsData = [
  {
    title: (
      <>
        SmartExam <br />AI
      </>
    ),
    description: "ASP.NET Core 8 + React — AI-powered examination platform",
    link: "https://github.com/ahmedosamaexe/Smart-Exam-AI",
    imageLink: "/img/projects/smartexam.png",
  },
  {
    title: (
      <>
        Task Manager <br />API
      </>
    ),
    description: "ASP.NET Core 10 — RESTful API with Clean Architecture",
    link: "https://github.com/ahmedosamaexe/task-manager-api",
    imageLink: "/img/projects/taskmanager.png",
  },
];
//test
export default function WorkPage() {
  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <FullpageProviderWork>
        <div id="fullpage">
          <div className="background">
            PROJECTS
            <br />
            PROJECTS
          </div>

          {projectsData.map((item, index) => (
            <WorkSection
              key={index}
              item={item}
              index={index}
              length={projectsData.length}
              color={index % 2 !== 0 ? "Light" : "Dark"}
            />
          ))}
        </div>
      </FullpageProviderWork>
    </>
  );
}
