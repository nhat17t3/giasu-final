import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getListPost, getListPostRecommend } from "../../../actions";
import Layout from "../../../components/Layout";
import Pagination from "../../../components/Pagination";
import PostItemShare from "./PostItemShare";

ListPostShare.propTypes = {};

function ListPostShare(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const role = localStorage.getItem("role");

  const [subject, setSubject] = useState("All");
  const [grade, setGrade] = useState("All");
  const [address, setAddress] = useState("All");
  const [listpost, setListpost] = useState([]);
  const [searchField, setSearchField] = useState("");

  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    role === "ROLE_TUTOR" ?
    dispatch(getListPostRecommend()):dispatch(getListPost());
  }, []);



  let posts = useSelector((state) => state.posts.listPost);

  useEffect(() => {
    setListpost(posts);
  }, [posts]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = listpost.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // filter
  const checkfilter = (subject, grade, address, post) => {
    let checka = false;
    let checkb = false;
    let checkc = false;
    if (subject == "All") checka = true;
    else checka = post.subject.includes(subject);
    if (grade == "All") checkb = true;
    else checkb = post.grade === grade;
    if (address == "All") checkc = true;
    else checkc = post.address.toLowerCase().includes(address.toLowerCase());
    return checka && checkb && checkc;
  };
  const handlefillter = (e) => {
    console.log(subject, grade, address);
    const listfillter = posts.filter((post) =>
      checkfilter(subject, grade, address, post)
    );
    console.log(listfillter);
    setListpost(listfillter);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const listHandleSearch = posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    setListpost(listHandleSearch);
  };

  const handlePostViewClick = (post) => {
    console.log("View: ", post);
    const viewPostUrl = `/postview/${post.id}`;
    history.push(viewPostUrl);
  };

  const optionAddress = (
    <>
      <option value={"Li??n Chi???u"}>Li??n Chi???u</option>
      <option value={"Ng?? H??nh S??n"}>Ng?? H??nh S??n</option>
      <option value={"S??n Tr??"}>S??n Tr??</option>
      <option value={"Thanh Kh??"}>Thanh Kh??</option>
      <option value={"Ho?? Vang"}>Ho?? Vang</option>
      <option value={"H???i Ch??u"}>H???i Ch??u</option>
    </>
  );

  const optionSubject = (
    <>
      <option value={"To??n"}>To??n</option>
      <option value={"L??"}>L??</option>
      <option value={"H??a"}>H??a</option>
      <option value={"Ti???ng Anh"}>Ti???ng Anh</option>
      <option value={"Ng??? V??n"}>Ng??? V??n</option>
      <option value={"Ti???ng Vi???t"}>Ti???ng Vi???t</option>
      <option value={"L???ch S???"}>L???ch S???</option>
    </>
  );

  const optionGrade = (
    <>
      <option value={"L???p 1"}>l???p 1</option>
      <option value={"L???p 2"}>l???p 2</option>
      <option value={"L???p 3"}>l???p 3</option>
      <option value={"L???p 4"}>l???p 4</option>
      <option value={"L???p 5"}>l???p 5</option>
      <option value={"L???p 6"}>l???p 6</option>
      <option value={"L???p 7"}>l???p 7</option>
      <option value={"L???p 8"}>l???p 8</option>
      <option value={"L???p 9"}>l???p 9</option>
      <option value={"L???p 10"}>l???p 10</option>
      <option value={"L???p 11"}>l???p 11</option>
      <option value={"L???p 12"}>l???p 12</option>
    </>
  );

  return (
    <>
      <ToastContainer />
      <Layout>
        <div className="app__container">
          <div className="grid">
            <div className="grid__row app__content">
              <div className="grid__column-12">
                <div className="home-filter">
                  <span className="home-filter__lable">L???c theo:</span>
                  <select
                    name="address"
                    id
                    className="select-filter"
                    onChange={(e) => setAddress(e.target.value)}
                  >
                    <option value="All" selected="selected" defaultValue="All">
                      - Ch???n ?????a ??i???m -
                    </option>
                    {optionAddress}
                  </select>
                  <select
                    name="subject"
                    id
                    className="select-filter"
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option value="All" selected="selected">
                      - Ch???n m??n h???c -
                    </option>
                    {optionSubject}
                  </select>
                  <select
                    name="grade"
                    id
                    className="select-filter"
                    onChange={(e) => setGrade(e.target.value)}
                  >
                    <option value="All" selected="selected">
                      -Ch???n L???p-
                    </option>
                    {optionGrade}
                  </select>
                  <button
                    className="home-filter__btn btn btn--primary"
                    onClick={handlefillter}
                  >
                    ??p d???ng
                  </button>
                  <div className="home-filter__page">
                    {/* <div className="home-filter__page-num">
                      <span className="home-filter__page-current">1</span>/ 14
                    </div>
                    <div className="home-filter__page-control">
                      <a href=" " className="home-filter__page-btn">
                        <i className="fas fa-angle-left" />
                      </a>
                      <div className="home-filter__page-control-seperate" />
                      <a href className="home-filter__page-btn">
                        <i className="fas fa-angle-right" />
                      </a>
                    </div> */}
                    <form className="header__search1" onSubmit={handleSearch}>
                      <input
                        type="text"
                        className="header__search-input"
                        placeholder="T??m ki???m b??i ????ng"
                        value={searchField}
                        onChange={(e) => setSearchField(e.target.value)}
                      />
                      <button type="submit" className="header__search-btn">
                        <i className="header__search-btn-icon fas fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="post">
                  <div className="grid__row">
                    <div className="grid__column-2 post-header__item ">
                      Ng?????i ????ng
                    </div>
                    <div className="grid__column-6 post-header__item">
                      N???i dung l???p t??m gia s??
                    </div>
                    <div className="grid__column-2 post-header__item">
                      H???c ph?? ????? ngh???
                    </div>
                    <div className="grid__column-2 post-header__item">
                      Nh???n l???p ngay
                    </div>
                  </div>
                  {currentPosts.map((post) => (
                    <div key={post.id}>
                      <PostItemShare
                        post={post}
                        onViewClick={handlePostViewClick}
                      />
                    </div>
                  ))}
                </div>
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={listpost.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ListPostShare;
