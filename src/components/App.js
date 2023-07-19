import React from "react";
import blogData from "../data/blog";
import Header  from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
// import logo from "../assets/logo"

console.log(blogData);
// console.log(logo);

function App() {

  // const blogName = "Overreacted";
  

  return (
    <div className="App">
      <Header blogName={blogData.name} logo={blogData.image}/>
      <About aboutText={blogData.about}/>
      <ArticleList articles={blogData.posts} />
    </div>
  );
}

export default App;
