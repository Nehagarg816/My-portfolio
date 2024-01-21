/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/background.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Financial Sentiment Analysis",
    description:
      "A Machine Learning Project to predict the sentiments (positive, negative, or neutral) on real-time financial news headlines through unsupervised textual data of big tech companies using NLTK, K-Means Clustering Algorithm, and LSTM RNN and thus performing the mismatch or divergence between both the models.",
    github: "https://github.com/Nehagarg816/Financial-Sentiment-Analysis-ML",
    website: "https://nehagarg.streamlit.app/",
  },
  {
    title: "Spotify Clone",
    description:
      "This is a music website frontend very similar to Spotify where we can listen to a variety of new and old songs, along with we can explore podcasts and other various gens. Technology used: HTML, CSS.",
    github: "https://github.com/Nehagarg816/Streamify",
    website: "https://nehagarg816.github.io/Streamify/",
  },
  {
    title: "Company Bankruptcy Prediction",
    description:
      "The project focuses on predicting the likelihood of a company going bankrupt using a Machine Learning ALgorithm. The data set is fetched from Kaggle including various observed data of past years, and the goal was to predict the same with the highest possible accuracy.",
    github: "https://github.com/Nehagarg816/Company-Bankruptcy-Prediction",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
