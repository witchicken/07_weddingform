import React, { useState } from "react";

import { Link } from "react-router-dom";

function Home(props) {
  const [marriage_man, setMarriage_man] = useState("");
  const [marriage_woman, setMarriage_woman] = useState("");
  const [marriage_date, setMarriage_date] = useState("");
  const [description_location, setDescription_location] = useState("");
  const [phone_man, setPhone_man] = useState("");
  const [phone_woman, setPhone_woman] = useState("");
  const [message_invite, setMessage_invite] = useState("");
  const [visitok, setVisitok] = useState("");
  let data = {
    marriage_man,
    marriage_woman,
    marriage_date,
    description_location,
    phone_man,
    phone_woman,
    message_invite,
    visitok,
  };
  return (
    <div className="App">
      <h2>신청서 폼</h2>
      <div>
        신랑 이름:{" "}
        <input
          type="text"
          name="marriage_man"
          size="10"
          onChange={(e) => setMarriage_man(e.target.value)}
        />
        신부 이름:{" "}
        <input
          type="text"
          name="marirage_woman"
          size="10"
          onChange={(e) => setMarriage_woman(e.target.value)}
        />
        메인 이미지: <input type="file" name="top_image" />
        결혼 날짜{" "}
        <input
          type="date"
          name="marriage_date"
          onChange={(e) => setMarriage_date(e.target.value)}
        />
        결혼 장소:{" "}
        <input
          type="text"
          name="description_location"
          onChange={(e) => setDescription_location(e.target.value)}
        />
        신랑 전화번호:{" "}
        <input
          type="text"
          name="phone_man"
          size="20"
          onChange={(e) => setPhone_man(e.target.value)}
        />
        신부 전화번호:{" "}
        <input
          type="text"
          name="phone_woman"
          size="20"
          onChange={(e) => setPhone_woman(e.target.value)}
        />
        초대 메시지:{" "}
        <input
          type="text"
          name="message_invite"
          size="500"
          onChange={(e) => setMessage_invite(e.target.value)}
        />
        참석 여부:{" "}
        <input
          type="radio"
          name="visitok"
          value="1"
          defaultChecked
          onChange={(e) => setVisitok(e.target.value)}
        />
        <input type="radio" name="visitok" value="0" />
        <Link to={"/formview"} state={data}>
          <button>미리보기</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
