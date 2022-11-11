# healthyApp

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#working-time">Working Time</a></li>

  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

- This is a project to manage your healthy. It will record, analyze and give you suggest about what things you should do and eat to give you better health.
- Now we have 3 main screen
  - Top_Page: View your meal history and your body weight ( Show when you click to logo Healthy: /top_page)
    - Click to hexagon component to filter data list
    - Click to button '記録をもっと見る' to show more data
  - My_Record: View 3 main record ( Show when you click 自分の記録 on header: /my_record)
    - Body record
    - My Exercise
    - My Diary
  - Column_Page: (Show when you open Dropdown menu and choose 'コラム一覧': /column_page)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- ReactJS

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- yarn
  ```sh
  npm install yarn@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/AnTuY154/healthyApp.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Run project
   ```sh
   yarn serve
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Working Time

- My total working time: `Total: 11h`
- Folder structure: src/

  - api: Setup for call Api
  - assets: Include img,icon,font
  - common: Include common function
  - component: Include Atom,Molecule component: `Total: 6.5h`
    - chart: <span>`1h`</span>
    - header: <span>`1h`</span> (include router )
    - footer: <span>`1h`</span>
    - exercise_board: <span>`1.5h`</span>
    - 7 component left: <span>`2h`</span>
  - hook: Include custom hook
  - page: Include 3 main page: `Total: 3h`
    - Each component: About <span>`1h`</span>
  - redux-sage: Use to call api and handle side-effect: `Total: 0.5h`
  - router: using [https://reactrouter.com/en/main](https://reactrouter.com/en/main)

- Build base source with webpack: <span>`Total 1h`</span>
