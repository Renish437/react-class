import React from "react";
import HomePage from "./pages/HomePage";
import post, { data } from "./data/data";

const App = () => {
  console.log(data);

  console.log();
  return (
    <div>
      <HomePage />

      {/* {data.map((d, i) => {
        console.log(i);

        return <h1 key={i}>{d}</h1>;
      })}
      <br /> */}
      <br />
      {post.map((post, index) => {
        return (
          <div key={post.id}>
            <h1 className="text-2xl font-semibold">This title of website</h1>
            <p className="text-white bg-purple-500">{post.title}</p>
            <br />
            <h1 className="text-3xl font-semibold">This is Body part</h1>
            <p className="bg-indigo-500">{post.body}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default App;
