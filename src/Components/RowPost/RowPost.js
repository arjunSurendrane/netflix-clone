import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constants/constants";
import axios from "../../axios";
import "./RowPost.css";
import Modal from "./Modal";
function RowPost(props) {
  const [trending, setTrending] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [movid, setMovid] = useState();
  const [movieDetail, setMovieDetail] = useState()
  useEffect(() => {
    axios.get(props.url).then((Response) => {
      setTrending(Response.data.results);
    });
  });

  const handleChange = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      setMovid(response.data.results[0].key)
    })
    const data = trending.filter(item => item.id === id)
    setMovieDetail(data)
    setIsModal(true);
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {trending.map((mov) => (
          <img
            onClick={() => handleChange(mov.id)}
            className="poster"
            alt="poster"
            src={`${imageUrl + mov.backdrop_path}`}
          />
        ))}
      </div>
      {movid && <Modal open={isModal} onClose={() => setIsModal(false)} ytubeid={movid} movieDetail={movieDetail} />}
    </div>
  );
}

export default RowPost;
