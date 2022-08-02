import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Formview.scss";
import {
  faPhone,
  faSquareEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from "react-calendar";
import moment from "moment";
import "./Calendar.css";
import axios from "axios";

//kakao map
const { kakao } = window;

function Formview() {
  const location = useLocation();
  /*const data = location.state;
  console.log(data);*/

  let data = {
    marriage_man: "김신랑",
    marriage_woman: "김신부",
    marriage_date: "2022-09-04",
    message_invite:
      "각자 서로 다른 길을 걸어온 저희가 이제 부부의 연으로 한 길을 걸어가고자 합니다.평생을 좋은 남편,좋은 아내로 살겠습니다.한 곳을 바라보며 첫발을 떼는 자리에 참석하시어 기쁨의 자리를 축복으로 더욱 빛내 주시길 바랍니다",
    description_location: "풍암동 동사무소",
    phone_man: "01066787789",
    phone_woman: "01022129910",
  };
  const splitDate = data.marriage_date.split("-");

  const [calData, setCalData] = useState(
    new Date(splitDate[0], splitDate[1] - 1, splitDate[2])
  );
  let interval;
  const eventDay = moment(data.marriage_date);

  // Convert to milisecond
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const [gapMarriageDateDay, setGapMarriageDateDay] = useState(0);
  const [gapMarriageDateHours, setGapMarriageDateHours] = useState(0);
  const [gapMarriageDateMinutes, setGapMarriageDateMinutes] = useState(0);
  const [gapMarriageDateSeconds, setGapMarriageDateSeconds] = useState(0);

  const countDownFn = () => {
    const today = moment();
    const timeSpan = eventDay.diff(today);

    if (timeSpan <= -today) {
      console.log("Unfortunately we have past the event day");
      clearInterval(interval);
      return;
    } else if (timeSpan <= 0) {
      console.log("Today is the event day");
      clearInterval(interval);
      return;
    } else {
      const days = Math.floor(timeSpan / day);
      const hours = Math.floor((timeSpan % day) / hour);
      const minutes = Math.floor((timeSpan % hour) / minute);
      const seconds = Math.floor((timeSpan % minute) / second);

      //set results
      setGapMarriageDateDay(days);
      setGapMarriageDateHours(hours);
      setGapMarriageDateMinutes(minutes);
      setGapMarriageDateSeconds(seconds);
    }
  };
  useEffect(() => {
    countDownFn();
  }, []);
  interval = setInterval(countDownFn, hour);

  //카카오맵

  const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    //작성중 axios
    const testAddress = "풍암동 동사무소";
    //주소로 검색
    //var url = `https://dapi.kakao.com/v2/local/search/address.json?query=${testAddress}`;
    //키워드로 장소 검색
    var url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${testAddress}`;
    const api_KEY = process.env.REACT_APP_KAKAO_API_KEY;
    axios
      .get(url, {
        headers: { Authorization: `KakaoAK ${api_KEY}` },
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data.documents[0].x));
        console.log(JSON.stringify(response.data.documents[0].y));
      });
    //맵
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);

  return (
    <div className="Formview">
      <main className="inner">
        <section className="Top">
          <div className="Top_name">
            <p>
              {data.marriage_man} & {data.marriage_woman}
            </p>
          </div>
          <div className="Top_image">image샘플</div>
          <div className="Top_location">
            <p>{data.marriage_date}</p>
            <span>{data.description_location}</span>
          </div>
          <div className="Top_phone">
            <p>
              <span>{data.marriage_man}</span>
              <div>
                <a href={"tel:" + data.phone_man} className="link_phone">
                  <FontAwesomeIcon icon={faPhone} color="green" />
                </a>
                <a href={"sms://" + data.phone_man}>
                  <FontAwesomeIcon icon={faSquareEnvelope} />
                </a>
              </div>
            </p>
            <p>
              <span>{data.marriage_woman}</span>
              <div>
                <a href={"tel:" + data.phone_woman} className="link_phone">
                  <FontAwesomeIcon icon={faPhone} color="green" />
                </a>
                <a href={"sms://" + data.phone_woman}>
                  <FontAwesomeIcon icon={faSquareEnvelope} />
                </a>
              </div>
            </p>
          </div>
        </section>
        <section className="middle">
          <div className="middle_invi">
            <p className="invi_title">invitation</p>
            <p claasName="invi_message">{data.message_invite}</p>
          </div>
          <div className="middle_calendar">
            <Calendar onChange={setCalData} value={calData} />
          </div>
          <div className="middle_countdown">
            {data.marriage_man}
            <FontAwesomeIcon icon={faHeart} color="pink" />
            {data.marriage_woman}
            님의 결혼식 <span>{gapMarriageDateDay}</span>일{" "}
            <span>{gapMarriageDateHours}</span>시간 전
          </div>
          <div
            id="map"
            style={{
              width: "350px",
              height: "300px",
              margin: "0 auto",
            }}
          ></div>
        </section>
      </main>
    </div>
  );
}

export default Formview;
