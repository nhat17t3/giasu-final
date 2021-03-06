import React, { useEffect, useState } from "react";
import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../../components/Layout";
import {
  changeAvatar,
  changeInformation,
  getInformation,
} from "../../actions/Admin/settings.actions";

UpdateTutor.propTypes = {};

function UpdateTutor(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState([]);
  const [grade, setGrade] = useState([]);
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [qualification, setQualification] = useState("");
  const [description, setDescription] = useState("");

  const [sang_2, setSang_2] = useState(false);
  const [chieu_2, setChieu_2] = useState(false);
  const [toi_2, setToi_2] = useState(false);
  const [sang_3, setSang_3] = useState(false);
  const [chieu_3, setChieu_3] = useState(false);
  const [toi_3, setToi_3] = useState(false);
  const [sang_4, setSang_4] = useState(false);
  const [chieu_4, setChieu_4] = useState(false);
  const [toi_4, setToi_4] = useState(false);
  const [sang_5, setSang_5] = useState(false);
  const [chieu_5, setChieu_5] = useState(false);
  const [toi_5, setToi_5] = useState(false);
  const [sang_6, setSang_6] = useState(false);
  const [chieu_6, setChieu_6] = useState(false);
  const [toi_6, setToi_6] = useState(false);
  const [sang_7, setSang_7] = useState(false);
  const [chieu_7, setChieu_7] = useState(false);
  const [toi_7, setToi_7] = useState(false);
  const [sang_8, setSang_8] = useState(false);
  const [chieu_8, setChieu_8] = useState(false);
  const [toi_8, setToi_8] = useState(false);

  const [a, setA] = useState(false);

  useEffect(() => {
    // GetProfile(dispatch);
    // dispatch(getInformation());
  }, [a]);
  const editedTutor = useSelector((state) => {
    const getTutor = state.auth.user;
    return getTutor;
  });
  console.log("edit tutor:", editedTutor);

  useEffect(() => {
    if (editedTutor.schedules != null) {
      let b = [];
      for (let a of editedTutor.subject) {
        let c = { label: a, value: a };
        b.push(c);
      }
      let i = [];
      for (let j of editedTutor.grade) {
        let k = { label: j, value: j };
        i.push(k);
      }
      console.log("vvvvv", editedTutor);
      setAvatar(editedTutor.avatar);
      setName(editedTutor.name);
      setAge(editedTutor.age);
      setGender(editedTutor.gender);
      setSubject(b);
      setGrade(i);
      setPhonenumber(editedTutor.phonenumber);
      setAddress(editedTutor.address);
      setQualification(editedTutor.qualification);
      setDescription(editedTutor.description);

      setSang_2(editedTutor.schedules.sang_2);
      setChieu_2(editedTutor.schedules.chieu_2);
      setToi_2(editedTutor.schedules.toi_2);
      setSang_3(editedTutor.schedules.sang_3);
      setChieu_3(editedTutor.schedules.chieu_3);
      setToi_3(editedTutor.schedules.toi_3);
      setSang_4(editedTutor.schedules.sang_4);
      setChieu_4(editedTutor.schedules.chieu_4);
      setToi_4(editedTutor.schedules.toi_4);
      setSang_5(editedTutor.schedules.sang_5);
      setChieu_5(editedTutor.schedules.chieu_5);
      setToi_5(editedTutor.schedules.toi_5);
      setSang_6(editedTutor.schedules.sang_6);
      setChieu_6(editedTutor.schedules.chieu_6);
      setToi_6(editedTutor.schedules.toi_6);
      setSang_7(editedTutor.schedules.sang_7);
      setChieu_7(editedTutor.schedules.chieu_7);
      setToi_7(editedTutor.schedules.toi_7);
      setSang_8(editedTutor.schedules.sang_8);
      setChieu_8(editedTutor.schedules.chieu_8);
      setToi_8(editedTutor.schedules.toi_8);
    }
  }, [editedTutor, a]);

  // const [avatar, setAvatar] = useState(editedTutor.avatar);
  // const [name, setName] = useState(editedTutor.name);
  // const [age, setAge] = useState(editedTutor.age);
  // const [subject, setSubject] = useState(editedTutor.subject[0]);
  // const [grade, setGrade] = useState(editedTutor.grade[0]);
  // const [phonenumber, setPhonenumber] = useState(editedTutor.phonenumber);
  // const [address, setAddress] = useState(editedTutor.address);
  // const [qualification, setQualification] = useState(editedTutor.qualification);
  // const [description, setDescription] = useState(editedTutor.description);

  // const [sang_2, setSang_2] = useState(editedTutor.schedules.sang_2);
  // const [chieu_2, setChieu_2] = useState(editedTutor.schedules.chieu_2);
  // const [toi_2, setToi_2] = useState(editedTutor.schedules.toi_2);
  // const [sang_3, setSang_3] = useState(editedTutor.schedules.sang_3);
  // const [chieu_3, setChieu_3] = useState(editedTutor.schedules.chieu_3);
  // const [toi_3, setToi_3] = useState(editedTutor.schedules.toi_3);
  // const [sang_4, setSang_4] = useState(editedTutor.schedules.sang_4);
  // const [chieu_4, setChieu_4] = useState(editedTutor.schedules.chieu_4);
  // const [toi_4, setToi_4] = useState(editedTutor.schedules.toi_4);
  // const [sang_5, setSang_5] = useState(editedTutor.schedules.sang_5);
  // const [chieu_5, setChieu_5] = useState(editedTutor.schedules.chieu_5);
  // const [toi_5, setToi_5] = useState(editedTutor.schedules.toi_5);
  // const [sang_6, setSang_6] = useState(editedTutor.schedules.sang_6);
  // const [chieu_6, setChieu_6] = useState(editedTutor.schedules.chieu_6);
  // const [toi_6, setToi_6] = useState(editedTutor.schedules.toi_6);
  // const [sang_7, setSang_7] = useState(editedTutor.schedules.sang_7);
  // const [chieu_7, setChieu_7] = useState(editedTutor.schedules.chieu_7);
  // const [toi_7, setToi_7] = useState(editedTutor.schedules.toi_7);
  // const [sang_8, setSang_8] = useState(editedTutor.schedules.sang_8);
  // const [chieu_8, setChieu_8] = useState(editedTutor.schedules.chieu_8);
  // const [toi_8, setToi_8] = useState(editedTutor.schedules.toi_8);

  const optionAddress = (
    <>
      <option value="" hidden>
        ?????a ch???
      </option>
      <option value={"Li??n Chi???u"}>Li??n Chi???u</option>
      <option value={"Ng?? H??nh S??n"}>Ng?? H??nh S??n</option>
      <option value={"S??n Tr??"}>S??n Tr??</option>
      <option value={"Thanh Kh??"}>Thanh Kh??</option>
      <option value={"Ho?? Vang"}>Ho?? Vang</option>
      <option value={"H???i Ch??u"}>H???i Ch??u</option>
    </>
  );

  // const optionSubject = (
  //   <>
  //     <option value={"To??n"}>To??n</option>
  //     <option value={"L??"}>L??</option>
  //     <option value={"H??a"}>H??a</option>
  //     <option value={"Ti???ng Anh"}>Ti???ng Anh</option>
  //     <option value={"Ng??? V??n"}>V??n</option>
  //     <option value={"Ti???ng Vi???t"}>Ti???ng Vi???t</option>
  //     <option value={"L???ch s???"}>L???ch s???</option>
  //     <option value={"?????a l??"}>?????a l??</option>
  //     <option value={"Sinh"}>Sinh</option>
  //   </>
  // );

  // const optionGrade = (
  //   <>
  //     <option value={"L???p 1"}>l???p 1</option>
  //     <option value={"L???p 2"}>l???p 2</option>
  //     <option value={"L???p 3"}>l???p 3</option>
  //     <option value={"L???p 4"}>l???p 4</option>
  //     <option value={"L???p 5"}>l???p 5</option>
  //     <option value={"L???p 6"}>l???p 6</option>
  //     <option value={"L???p 7"}>l???p 7</option>
  //     <option value={"L???p 8"}>l???p 8</option>
  //     <option value={"L???p 9"}>l???p 9</option>
  //     <option value={"L???p 10"}>l???p 10</option>
  //     <option value={"L???p 11"}>l???p 11</option>
  //     <option value={"L???p 12"}>l???p 12</option>
  //   </>
  // );
  const optionSubject = [
    { label: "To??n ", value: "To??n" },
    { label: "L?? ", value: "L??" },
    { label: "H??a", value: "H??a" },
    { label: "Ti???ng Anh", value: "Ti???ng Anh" },
    { label: "Ng??? V??n", value: "Ng??? V??n" },
    { label: "Ti???ng Vi???t", value: "Ti???ng Vi???t" },
    { label: "L???ch S???", value: "L???ch S???" },
  ];
  const optionGrade = [
    { label: "L???p 1", value: "L???p 1" },
    { label: "L???p 2", value: "L???p 2" },
    { label: "L???p 3", value: "L???p 3" },
    { label: "L???p 4", value: "L???p 4" },
    { label: "L???p 5", value: "L???p 5" },
    { label: "L???p 6", value: "L???p 6" },
    { label: "L???p 7", value: "L???p 7" },
    { label: "L???p 8", value: "L???p 8" },
    { label: "L???p 9", value: "L???p 9" },
    { label: "L???p 10", value: "L???p 10" },
    { label: "L???p 11", value: "L???p 11" },
    { label: "L???p 12", value: "L???p 12" },
  ];

  const edittutor = async (e) => {
    let listSubject = [];
    for (const a of subject) {
      listSubject.push(a.value);
    }
    let listGrade = [];
    for (const a of grade) {
      listGrade.push(a.value);
    }
    e.preventDefault();
    const k = {
      name,
      age,
      gender: Number(gender),
      grade: listGrade,
      subject: listSubject,
      phonenumber,
      address,
      qualification,
      description,
      schedules: {
        sang_2,
        chieu_2,
        toi_2,
        sang_3,
        chieu_3,
        toi_3,
        sang_4,
        chieu_4,
        toi_4,
        sang_5,
        chieu_5,
        toi_5,
        sang_6,
        chieu_6,
        toi_6,
        sang_7,
        chieu_7,
        toi_7,
        sang_8,
        chieu_8,
        toi_8,
      },
    };
    console.log(k);
    // alert(JSON.stringify(k));

    await dispatch(changeInformation(k));
    setA(!a);
    history.push("/updatetutor");
  };

  const update_avatar = async () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "file",
      avatar
      // avatar.name,
    );
    // Details of the uploaded file
    console.log("update avatar", avatar);
    await dispatch(changeAvatar(formData));
    setA(!a);
    // history.push("/updatetutor");
  };

  //  const  imageHandler = (e) => {
  //     const reader = new FileReader();
  //     reader.onload = () =>{
  //       if(reader.readyState === 2){
  //         setAvatar(reader.result )
  //       }
  //     }
  //     reader.readAsDataURL(e.target.files[0])

  //   };

  return !editedTutor ? (
    <div className="loader"></div>
  ) : (
    <>
      <ToastContainer />
      <Layout>
        <form className="app__container" onSubmit={edittutor}>
          <div className="grid">
            <h2 className="addpost__heading">C???P NH???T TH??NG TIN GIA S??</h2>
            <div className="addpost__separate" />
            <div className="addpost__content">
              <div className>
                <div className="grid__row">
                  <div className="grid__column-6">
                    <div className="tutor-avatar">
                      <span>???nh ?????i di???n ( ch???p m???t m??nh,nh??n r?? m???t )</span>
                      <div className="tutor-container ">
                        <img
                          src={
                            avatar !== null
                              ? avatar
                              : "../../../../assets/img/avatar.jpg"
                          }
                          // preview="$avatar"
                          alt="Avatar"
                          className="tutor-info-image"
                        />
                        <label>
                          <i className="fa fa-camera hidden" />
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            id="avatar"
                            name="avatar"
                            file-upload
                            // onChange={imageHandler}
                            onChange={(e) => setAvatar(e.target.files[0])}
                          />
                        </label>
                        
                      </div>
                      <button
                          className="btn notify-item__accept-link "
                          onClick={update_avatar}
                          style={{ marginLeft: "200px" }}
                        >
                          C???p nh???t avatar
                        </button>
                    </div>
                  </div>
                  <div className="grid__column-6">
                    <div className="form__group">
                      <div className="form__lable">H??? v?? t??n</div>
                      <input
                        type="text"
                        name="name"
                        className="form__input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <div className="form__lable">Tu???i</div>
                      <input
                        type="number"
                        name="age"
                        className="form__input"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <div className="form__lable">Gi???i t??nh</div>
                      <select
                        name="gender"
                        id
                        className="form__input"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                      >
                        <option value="" hidden>
                          Gi???i t??nh
                        </option>
                        <option value="0">Nam</option>
                        <option value="1">N???</option>
                        <option value="2">kh??c</option>
                      </select>
                    </div>
                    <div className="form__group">
                      <div className="form__lable">S??? ??i???n tho???i</div>
                      <input
                        type="number"
                        name="phonenumber"
                        className="form__input"
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid__column-6">
                    <div className="form__group">
                      <div className="form__lable">M??n h???c</div>
                      {/* <select
                        name="subject"
                        id
                        className="form__input"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      >
                        <option value selected hidden>
                          M??n
                        </option>
                        {optionSubject}
                      </select> */}
                      <MultiSelect
                        options={optionSubject}
                        value={subject}
                        onChange={setSubject}
                        className="form__input-select"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid__column-6">
                    <div className="form__group">
                      <div className="form__lable">L???p</div>
                      {/* <select
                        name="grade"
                        id
                        className="form__input"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        required
                      >
                        <option value selected hidden>
                          L???p
                        </option>
                        {optionGrade}
                      </select> */}
                      <MultiSelect
                        options={optionGrade}
                        value={grade}
                        onChange={setGrade}
                        className="form__input-select"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid__column-6">
                    <div className="form__group">
                      <div className="form__lable">?????a ch???</div>
                      <select
                        name="address"
                        id
                        className="form__input"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      >
                        {optionAddress}
                      </select>
                    </div>
                  </div>
                  <div className="grid__column-6">
                    <div className="form__group">
                      <div className="form__lable">B???n ??ang l??m ngh??? g??</div>
                      <input
                        type="qualification"
                        name="price"
                        className="form__input"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid__column-12">
                    <div className="form__group">
                      <div className="form__lable">M?? t??? b???n th??n</div>
                      <textarea
                        name="description"
                        cols={30}
                        rows={6}
                        className="form__input"
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        value={description}
                      >
                        {description}
                      </textarea>
                    </div>
                  </div>
                  <div className="grid__column-12">
                    <div className="form__group">
                      <div className="form__lable">Th???i gian c?? th??? d???y</div>
                      <div className="calendar-commment">
                        ( M??u XANH hi???n th??? nh???ng l???ch c?? th??? d???y )
                      </div>

                      <div className="calender">
                        <div className="calendar__row">
                          <h3 className="calendar__heading">Th??? 2</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_2
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_2"
                                  value={sang_2}
                                  onChange={() => setSang_2(!sang_2)}
                                />
                                S??ng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_2
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_2"
                                  onChange={() => setChieu_2(!chieu_2)}
                                />
                                Chi???u
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_2
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_2"
                                  onChange={() => setToi_2(!toi_2)}
                                />
                                T???i
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Th??? 3</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_3
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_3"
                                  onChange={() => setSang_3(!sang_3)}
                                />
                                S??ng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_3
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_3"
                                  onChange={() => setChieu_3(!chieu_3)}
                                />
                                Chi???u
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_3
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_3"
                                  onChange={() => setToi_3(!toi_3)}
                                />
                                T???i
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Th??? 4</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_4
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_4"
                                  onChange={() => setSang_4(!sang_4)}
                                  defaultValue="sang_4"
                                />
                                S??ng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_4
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_4"
                                  defaultValue="chieu_4"
                                  onChange={() => setChieu_4(!chieu_4)}
                                />
                                Chi???u
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_4
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_4"
                                  defaultValue="toi_4"
                                  onChange={() => setToi_4(!toi_4)}
                                />
                                T???i
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Th??? 5</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_5
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_5"
                                  defaultValue="sang_5"
                                  onChange={() => setSang_5(!sang_5)}
                                />
                                S??ng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_5
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_5"
                                  defaultValue="chieu_5"
                                  onChange={() => setChieu_5(!chieu_5)}
                                />
                                Chi???u
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_5
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_5"
                                  defaultValue="toi_5"
                                  onChange={() => setToi_5(!toi_5)}
                                />
                                T???i
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Th??? 6</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_6
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_6"
                                  defaultValue="sang_6"
                                  onChange={() => setSang_6(!sang_6)}
                                />
                                S??ng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_6
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_6"
                                  defaultValue="chieu_6"
                                  onChange={() => setChieu_6(!chieu_6)}
                                />
                                Chi???u
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_6
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_6"
                                  defaultValue="toi_6"
                                  onChange={() => setToi_6(!toi_6)}
                                />
                                T???i
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Th??? 7</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_7
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_7"
                                  defaultValue="sang_7"
                                  onChange={() => setSang_7(!sang_7)}
                                />
                                S??ng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_7
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_7"
                                  defaultValue="chieu_7"
                                  onChange={() => setChieu_7(!chieu_7)}
                                />
                                Chi???u
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_7
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_7"
                                  defaultValue="toi_7"
                                  onChange={() => setToi_7(!toi_7)}
                                />
                                T???i
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Ch??? nh???t</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_8
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_8"
                                  defaultValue="sang_8"
                                  onChange={() => setSang_8(!sang_8)}
                                />
                                S??ng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_8
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_8"
                                  defaultValue="chieu_8"
                                  onChange={() => setChieu_8(!chieu_8)}
                                />
                                Chi???u
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_8
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_8"
                                  defaultValue="toi_8"
                                  onChange={() => setToi_8(!toi_8)}
                                />
                                T???i
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn--primary addpost-submit"
                    type="submit"
                  >
                    C???p nh???t
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Layout>
    </>
  );
}

export default UpdateTutor;
