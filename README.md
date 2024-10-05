---
cover: .gitbook/assets/Screenshot_2.png
coverY: 0
layout:
  cover:
    visible: true
    size: full
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Documentation for Task Management Application

## Overview

This application is a task management tool built using React. It includes various components to manage tasks, such as adding, editing, deleting, and searching tasks. The application uses useState for state management and useContext for managing global state.

## Components

### App Component

* **Purpose:** Serves as the main component that includes all other components.
* **Usage:** Renders Header, HeroSection, TaskBoard, and Footer within a styled container.

```jsx
import { Fragment } from "react";
 import Header from "./components/Header"; 
import HeroSection from "./components/HeroSection"; 
import TaskBoard from "./components/Task/TaskBoard"; 
import Footer from "./components/Footer"; 
 
export default function App() { 
  return ( 
    <Fragment> 
      <div className="bg-[#191D26] font-[Inter] text-white"> 
        <Header /> 
        <HeroSection /> 
        <TaskBoard /> 
        <Footer /> 
      </div> 
    </Fragment> 
  ); 
}
```

### Header Component

* **Purpose:** Displays the application’s logo at the top of the page.
* **Usage:** Fixed at the top of the page with navigation.

```jsx
import { Fragment } from "react";
 import Logo from "../assets/lws-logo-en.svg"; 
 
export default function Header() { 
  return ( 
    <Fragment> 
      <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] 
z-50"> 
        <div className="container mx-auto flex items-center 
justify-between gap-x-6"> 
          {/* Logo  */} 
          <a href="/"> 
            <img 
              className="h-[45px]" 
              src={Logo} 
              alt="Lws Logo" 
            /> 
          </a> 
        </div> 
      </nav> 
    </Fragment> 
  ); 
} 
```



