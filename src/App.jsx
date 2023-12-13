import { RiMenuUnfoldLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { FaSitemap } from "react-icons/fa";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdCollectionsBookmark } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { FiClock } from "react-icons/fi";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { MdOutlineAvTimer } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import { IoMdInformationCircleOutline } from "react-icons/io";

import qorrectLogo from "./assets/images/qorrect-logo.png";
import bellIcon from "./assets/images/bell.png";
import userIcon from "./assets/images/user.png";
import "./App.css";

function App() {
  return (
    <>
      <section className="nav-menu">
        <div className="navbar">
          <div className="left">
            <img src={qorrectLogo} alt="Qorrect Logo" className="logo" />
            <RiMenuUnfoldLine className="menu-icon" />
          </div>
          <div className="center">
            <input
              type="text"
              placeholder="Search Courses, Items, Exams......."
            />
            <CiSearch className="search-icon" />
          </div>
          <div className="nav-right-side">
            <img src={bellIcon} alt="Bell Icon" className="bell-icon" />
            <img src={userIcon} alt="User Icon" className="user-icon" />
            <span className="user-name">Enyinnaya Chinedu</span>
            <FaChevronDown className="down-icon-1" />
            <span className="language">En</span>
            <FaChevronDown className="down-icon-2" />
          </div>
        </div>
      </section>

      <section className="side-menu">
        <div className="sub-menu s-m-1">
          <div className="side-menu-items smi-1">
            <MdSpaceDashboard className="icon" />
            <p>Dashboard</p>
          </div>
        </div>
        <div className="sub-menu">
          <p className="menu-heading">Test</p>
          <div className="side-menu-items ">
            <FaSitemap className="icon" />
            <p>Items</p>
            <span>12</span>
          </div>
          <div className="side-menu-items">
            <LuFileSpreadsheet className="icon" />
            <p>Exams</p>
          </div>
        </div>
        <div className="sub-menu">
          <p className="menu-heading">Organize</p>
          <div className="side-menu-items">
            <MdCollectionsBookmark className="icon" />
            <p>Courses</p>
          </div>
          <div className="side-menu-items">
            <FaMoneyCheckAlt className="icon" />
            <p>Course Subscription</p>
          </div>
          <div className="side-menu-items">
            <PiStudentFill className="icon" />
            <p>Students</p>
          </div>
          <div className="side-menu-items">
            <MdGroups2 className="icon" />
            <p>Private Group</p>
          </div>
        </div>
        <div className="sub-menu">
          <p className="menu-heading">Manage</p>
          <div className="side-menu-items">
            <FaUserAlt className="icon" />
            <p>User</p>
          </div>
          <div className="side-menu-items">
            <IoSettings className="icon" />
            <p>Configuration</p>
          </div>
        </div>
      </section>

      <section className="main-content">
        <div className="content">
          <div className="main-heading">
            <p className="heading">Exam Monitering</p>
            <div className="right-text">
              <RxUpdate className="icon" />
              <p>Last Update :</p>
              <p>7 mintues ago</p>
            </div>
          </div>

          <div className="center-content">
            <div className="main-exams-data">
              <div className="exams-data">
                <div className="left">
                  <div className="time-animation">
                    <p className="numbers">120 : 78</p>
                  </div>
                  <div className="exams-details">
                    <p className="chap-details">Exams: Unit 7 Final Exam</p>
                    <p>Course: English lv 9</p>
                    <p>20 Question: All in one exam</p>
                  </div>
                </div>

                <div className="right">
                  <div className="date">
                    <p>21 Oct 2020 9:00 AM ➔ 12:00 AM</p>
                  </div>
                  <div className="min-marks">
                    <div className="content">
                      <FiClock className="icon" />
                      <p>30 Min</p>
                    </div>
                    <div className="content">
                      <BsFileEarmarkSpreadsheet className="icon" />
                      <p>50 Marks</p>
                    </div>
                  </div>
                  <div className="delay">
                    <p>Allowed Delay : 10 Mintes</p>
                  </div>
                </div>
              </div>
              <div className="students-data">
                <div className="cards">
                  <div className="boxes">
                    <LuUser2 className="icon" />
                    <div className="details">
                      <p>Total Students</p>
                      <p className="number">400</p>
                    </div>
                  </div>
                  <div className="boxes b-2">
                    <HiOutlineLightBulb className="icon" />
                    <div className="details">
                      <p>Total Active Students</p>
                      <p className="number">278</p>
                    </div>
                  </div>
                  <div className="boxes b-3">
                    <HiOutlineExclamationCircle className="icon" />
                    <div className="details">
                      <p>Total Absent Students</p>
                      <p className="number">23</p>
                    </div>
                  </div>
                  <div className="boxes b-4">
                    <MdOutlineAvTimer className="icon" />
                    <div className="details">
                      <p>Total Pending Students</p>
                      <p className="number"></p>
                    </div>
                  </div>
                  <div className="boxes b-5">
                    <FaRegCheckCircle className="icon" />
                    <div className="details">
                      <p>Total Finished Students</p>
                      <p className="number">278</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="students-database">
            <div className="db-heading">
              <p className="students">Students</p>
              <span className="student-list-heading">Showing 7 Students</span>
            </div>

            <div className="db-filters">
              <div className="input-search">
                <input type="text" placeholder="Search name or e-mail" />
                <CiSearch className="search-icon icon" />
              </div>

              <div className="status">
                <p>Status : all</p>
                <FaChevronDown className="icon" />
              </div>

              <div className="status">
                <p>Start Time</p>
                <FaCalendarDays className="icon" />
              </div>

              <div className="status">
                <p>Submit Date</p>
                <FaCalendarDays className="icon" />
              </div>

              <div className="clear ">
                <TiDeleteOutline className="icon" />
                <p>clear</p>
              </div>
            </div>

            <div className="active-filters">
              <div className="name-filter filter">
                <p>Student name</p>
                <FaChevronDown className="icon " />
              </div>

              <div className="email-filter filter">
                <p>Email</p>
                <FaChevronDown className="icon" />
              </div>

              <div className="status-filter filter">
                <p>Status</p>
                <FaChevronDown className="icon" />
              </div>

              <div className="start-date-filter filter">
                <p>Start Date</p>
                <FaChevronDown className="icon " />
              </div>

              <div className="start-time-filter filter">
                <p>Start time</p>
                <FaChevronDown className="icon" />
              </div>
            </div>

            <div className="student-field">
              <div className="name-field">
                <img src={userIcon} />
                <p>Cannon Matusov</p>
              </div>

              <div className="email-field">
                <p>happin_rabbti@gmail.com</p>
              </div>

              <div className="status-field">
                <p>Finished</p>
                <IoMdInformationCircleOutline
                  title="I am happy"
                  className="icon"
                />
              </div>

              <div className="start-time-field">
                <p>09 Nov 2019, 9:00 AM</p>
              </div>

              <div className="submit-time-field">
                <p>23 July 2020, 12:20 AM</p>
              </div>
            </div>

            <div className="student-field sf2">
              <div className="name-field">
                <img src={userIcon} />
                <p>Cannon Matusov</p>
              </div>

              <div className="email-field">
                <p>happin_rabbti@gmail.com</p>
              </div>

              <div className="status-field">
                <p>Finished</p>
                <IoMdInformationCircleOutline
                  title="I am happy"
                  className="icon"
                />
              </div>

              <div className="start-time-field">
                <p>09 Nov 2019, 9:00 AM</p>
              </div>

              <div className="submit-time-field">
                <p>23 July 2020, 12:20 AM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
