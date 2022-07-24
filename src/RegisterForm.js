function RegisterForm() {
  return (
    <div className="App">
      <h2>신청서 폼</h2>
      <form action="/api/marriageform" method="post">
        신랑 이름: <input type="text" name="marriage_man" size="10" />
        신부 이름: <input type="text" name="marirage_woman" size="10" />
        메인 이미지: <input type="file" name="top_image" />
        결혼 날짜 <input type="date" name="marriage_date" />
        결혼 장소: <input type="text" name="desciption_location" />
        신랑 전화번호: <input type="text" name="phone_man" size="20" />
        신부 전화번호: <input type="text" name="phone_woman" size="20" />
        초대 메시지: <input type="text" name="message_invite" size="500" />
        참석 여부:{" "}
        <input type="radio" name="visitok" value="1" defaultChecked />
        <input type="radio" name="visitok" value="0" />
        <input type="submit" value="제출" />
      </form>
    </div>
  );
}

export default RegisterForm;
