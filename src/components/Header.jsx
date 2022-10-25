import axios from "axios";
import React, { useState } from "react";

const Header = () => {
  const [images, setImages] = useState("");
  const [clientId, setClientId] = useState(
    "SSbutV8EKQvfTLVRWIY-df6e_mweo_rtjT38M647jp4"
  );
  const [results, setResults] = useState([]);
  const searchInput = (e) => {
    setImages(e.target.value);
  };

  const click = () => {
    const url =
      "https://api.unsplash.com/search/photos?page=1&query= " +
      images +
      "&client_id=" +
      clientId;

    axios.get(url).then((res) => {
      console.log(res);

      setResults(res.data.results);
    });
  };

  return (
    <>
      <div className="head">
        <input
          onChange={searchInput}
          type="text"
          placeholder="search your Image"
          name="images"
        />
        <button onClick={click} type="submit">
          Search
        </button>
      </div>

      <div className="image">
        {results.map((images) => (
          <img src={images.urls.small} />
        ))}
      </div>
    </>
  );
};

export default Header;
