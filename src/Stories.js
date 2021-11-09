import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { loading, hits } = useGlobalContext();
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {hits.map((story) => {
        console.log(story);
        const { objectID, title, num_comments, url, points, author } = story;
        return (
          <article key={story.objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span>
              {num_comments} comments
            </p>
            <div>
              <a href={url} className="read-link" target="_blank">
                read more
              </a>
              <button className="remove-btn">delete</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
