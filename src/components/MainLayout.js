import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from "react-icons/ai";
import { RiCouponLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { RiVideoAddFill } from 'react-icons/ri';
import {BsCollectionFill } from 'react-icons/bs';
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { SiBrandfolder, SiLibrarything} from "react-icons/si";
import { BiCategoryAlt,BiBookAdd } from "react-icons/bi";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import {HiUsers,HiOutlineUserGroup, HiOutlineUserAdd} from 'react-icons/hi';
import {GiTeacher,GiButtonFinger} from 'react-icons/gi';
import { TbHandFinger } from 'react-icons/tb';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout /* onContextMenu={(e) => e.preventDefault()} */>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">Sage</span>
            <span className="lg-logo">Sage Training Institute</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
              
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineHome className="fs-4" />,
              label: "Dashboard",
              primaryColor: '#dcfd',
            },
            //student page start
            {
              key: "Students",
              icon: <HiOutlineUserGroup className="fs-4" />,
              label: "Students",
              children: [
                {
                  key: "student",
                  icon: <HiOutlineUserAdd className="fs-4" />,
                  label: "Add Student",
                },
                {
                  key: "list-student",
                  icon: <HiOutlineUserGroup className="fs-4" />,
                  label: "Students List",
                },
                
              ],
            },
            //student page end

            //Instructor start
           
            {
              key: "Instructors",
              icon: <GiTeacher className="fs-4" />,
              label: "Instructors",
              children: [
                {
                  key: "instructor",
                  icon: <GiTeacher className="fs-4" />,
                  label: "Add Instructor",
                },
                {
                  key: "list-instructor",
                  icon: <GiTeacher className="fs-4" />,
                  label: "Instructors List",
                },
                
              ],
            },
           
            //instructor end

            //staff start
            {
              key: "Staff",
              icon: <HiUsers className="fs-4" />,
              label: "Staff Users",
              children: [
                {
                  key: "stafs",
                  icon: <AiOutlineUser className="fs-4" />,
                  label: "Add Staffs",
                },

                {
                  key: "list-stafs",
                  icon: <AiOutlineUser className="fs-4" />,
                  label: "View Staffs",
                },

              ],
            },
            //staff end

            //course start

            {
              key: "Course",
              icon: <BiBookAdd className="fs-4" />,
              label: "Courses",
              children: [
                {
                  key: "Course",
                  icon: <BiBookAdd className="fs-4" />,
                  label: "Add Courses",
                },

                {
                  key: "View Courses",
                  icon: <BiBookAdd className="fs-4" />,
                  label: "View Courses",
                },

              ],
            },

            //course end

            //Attendance end

            {
              key: "Attendances",
              icon: <GiButtonFinger className="fs-4" />,
              label: "Attendances",
              children: [
                {
                  key: "student-attendance",
                  icon: <TbHandFinger className="fs-4" />,
                  label: "Student Attendance",
                },

                {
                  key: "instructor-attendance",
                  icon: <TbHandFinger className="fs-4" />,
                  label: "Instructor-attendance",
                },
                {
                  key: "staff-attendance",
                  icon: <TbHandFinger className="fs-4" />,
                  label: "Staff-attendance",
                },

              ],
            },

            //Attendance end

            //e-Library start

            {
              key: "E-Library",
              icon: <SiLibrarything className="fs-4" />,
              label: "E-Library",
              children: [
                {
                  key: "Add Book",
                  icon: <BiBookAdd className="fs-4" />,
                  label: "Add Books",
                },

                {
                  key: "View Book",
                  icon: <BiBookAdd className="fs-4" />,
                  label: "View Books",
                },

              ],
            },
            
            //e-Library end

            //E-learning start

            {
              key: "E-Learning",
              icon: <BsCollectionFill className="fs-4" />,
              label: "E-Learning",
              children: [
                {
                  key: "Add Video",
                  icon: <RiVideoAddFill className="fs-4" />,
                  label: "Add Videos",
                },

                {
                  key: "View Video",
                  icon: <RiVideoAddFill className="fs-4" />,
                  label: "View Videos",
                },

              ],
            },

            //e-learning end

            
            //catalog start
            {
              key: "Catalog",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "list-product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand",
                },
                {
                  key: "list-brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand List ",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category",
                },
                {
                  key: "list-category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color",
                },
                {
                  key: "list-color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color List",
                },
              ],
            },

            //end of catalog



            
            {
              key: "orders",
              icon: <FaClipboardList className="fs-4" />,
              label: "Orders",
            },
            {
              key: "marketing",
              icon: <RiCouponLine className="fs-4" />,
              label: "Marketing",
              children: [
                {
                  key: "coupon",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Coupon",
                },
                {
                  key: "coupon-list",
                  icon: <RiCouponLine className="fs-4" />,
                  label: "Coupon List",
                },
              ],
            },
            {
              key: "blogs",
              icon: <FaBloggerB className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaClipboardList className="fs-4" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>

            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Navdeep</h5>
                <p className="mb-0">navdeepdahiya753@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
