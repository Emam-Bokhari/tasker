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

### HeroSection Component

* Purpose: Displays the main hero section with a title and description.&#x20;
* Usage: Positioned below the header and includes an image and text content.

<pre class="language-jsx"><code class="lang-jsx">import { Fragment } from "react";
import Frame from "../assets/frame.png"; 

export default function HeroSection() { 
return ( 
  &#x3C;Fragment> 
    &#x3C;section className="pb-[114px] pt-20 md:mt-[100px]">
      &#x3C;div className="container lg:px-20"> 
        &#x3C;div className="grid items-center gap-6 md:grid-cols-2"> 
          &#x3C;div className="flex justify-center md:order-2"> 
            &#x3C;img 
              className="max-md:w-full" 
              src={Frame} 
              width="326" 
              height="290" 
              alt="frame" 
            /> 
          &#x3C;/div> 
          &#x3C;div> 
            &#x3C;h1 className="mb-1.5 text-[56px] font-bold leading
<strong>              none text-[#F5BF42] lg:text-[73px]"> 
</strong>                Tasker 
            &#x3C;/h1> 
            &#x3C;p className="text-lg my-2 opacity-60"> 
              Effortlessly Organize, Prioritize, and Conquer 
              Tasks with Tasker 
              - Your Personal Productivity Ally for Seamless Goal 
              Achievement 
              and Stress-Free Task Management. 
            &#x3C;/p> 
          &#x3C;/div> 
        &#x3C;/div> 
      &#x3C;/div> 
    &#x3C;/section> 
  &#x3C;/Fragment> 
); 
}
</code></pre>











