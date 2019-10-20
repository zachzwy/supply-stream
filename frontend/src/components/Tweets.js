import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MyContext from "../context";

const Tweets = () => {
  const { state, dispatch } = useContext(MyContext);

  useEffect(() => {
    axios
      .get("/api/tweets")
      .then(json =>
        dispatch({
          type: "FETCH_TWEETS",
          tweets: json.data
        })
      )
      .catch(err => console.log(err));
  }, []);

  return (
    <ul>
      {state.tweets.map(tweet => (
        <li key={tweet._id}>{tweet.text}</li>
      ))}
    </ul>
  );
};

export default Tweets;
