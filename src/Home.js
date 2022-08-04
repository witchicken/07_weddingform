import React, { useState } from "react";
import "./Home.scss";

import { Link } from "react-router-dom";

function Home() {
  const [marriage_man, setMarriage_man] = useState("");
  const [marriage_woman, setMarriage_woman] = useState("");
  const [marriage_date, setMarriage_date] = useState("");
  const [description_location, setDescription_location] = useState("");
  const [phone_man, setPhone_man] = useState("");
  const [phone_woman, setPhone_woman] = useState("");
  const [message_invite, setMessage_invite] = useState("");
  const [man_account, setMan_account] = useState("");
  const [woman_account, setWoman_account] = useState("");
  const [isCheckedDate, setIsCheckedData] = useState(false);

  let data = {
    marriage_man,
    marriage_woman,
    marriage_date,
    description_location,
    phone_man,
    phone_woman,
    message_invite,
    man_account,
    woman_account,
  };
  return (
    <div className="Home">
      <div className="Home_inner">
        <h2>신청서 폼</h2>
        <div>
          <div>
            신랑 이름:{" "}
            <input
              type="text"
              name="marriage_man"
              size="10"
              onChange={(e) => setMarriage_man(e.target.value)}
            />
          </div>
          <div>
            신부 이름:{" "}
            <input
              type="text"
              name="marirage_woman"
              size="10"
              onChange={(e) => setMarriage_woman(e.target.value)}
            />
          </div>
          <div>
            메인 이미지: <input type="file" name="top_image" />
          </div>
          <div>
            결혼 날짜{" "}
            <input
              type="date"
              name="marriage_date"
              onChange={(e) => {
                setMarriage_date(e.target.value);
                setIsCheckedData(true);
                console.log(isCheckedDate);
              }}
            />
          </div>
          <div>
            결혼 장소:{" "}
            <input
              type="text"
              name="description_location"
              onChange={(e) => setDescription_location(e.target.value)}
            />
          </div>
          <div>
            신랑 전화번호:{" "}
            <input
              type="text"
              name="phone_man"
              size="20"
              onChange={(e) => setPhone_man(e.target.value)}
            />
          </div>
          <div>
            신부 전화번호:{" "}
            <input
              type="text"
              name="phone_woman"
              size="20"
              onChange={(e) => setPhone_woman(e.target.value)}
            />
          </div>
          <div>
            초대 메시지:{" "}
            <input
              type="text"
              name="message_invite"
              size="50"
              onChange={(e) => setMessage_invite(e.target.value)}
            />
          </div>

          <div>
            신랑측 계좌번호:{" "}
            <input
              type="text"
              name="man_account"
              size="50"
              onChange={(e) => setMan_account(e.target.value)}
            />
          </div>
          <div>
            신부측 계좌번호:{" "}
            <input
              type="text"
              name="woman_account"
              size="50"
              onChange={(e) => setWoman_account(e.target.value)}
            />
          </div>

          {isCheckedDate ? (
            <div>
              <Link to={"/formview"} state={data}>
                <button>미리보기</button>
              </Link>
            </div>
          ) : (
            <div>미리보기 위해 빈칸을 입력해 주세요.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
