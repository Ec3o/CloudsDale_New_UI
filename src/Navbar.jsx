import React, { useState, useEffect } from "react";
import { ReactComponent as EarthIcon } from './SVGs/earth-svgrepo-com.svg';
import { ReactComponent as StarIcon } from './SVGs/star-svgrepo-com.svg';
import { ReactComponent as SpaceIcon} from './SVGs/space-svgrepo-com.svg';
import { ReactComponent as RocketIcon} from './SVGs/rocket-svgrepo-com.svg';
import { ReactComponent as SettingIcon} from './SVGs/setting-svgrepo-com.svg';
import { ReactComponent as FolderIcon} from './SVGs/folder-svgrepo-com.svg';
import { ReactComponent as BellIcon} from './SVGs/bell-svgrepo-com.svg';
import "./Navbar.css";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hovering, setHovering] = useState(false);

  const navItems = [
    { icon: <EarthIcon width="40" height="40" />, text: "Home" },
    { icon: <SpaceIcon width="40" height="40" />, text: "Races" },
    { icon: <StarIcon width="40" height="40" />, text: "Challenges" },
    { icon: <RocketIcon width="40" height="40" />, text: "Teams" },
    { icon: <SettingIcon width="40" height="40" />, text: "Settings" },
    { icon: <FolderIcon width="40" height="40" />, text: "Profile" },
    { icon: <BellIcon width="40" height="40" />, text: "Notifications" }
  ];

  // 处理导航项点击
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  // 控制悬停状态
  const handleMouseEnter = () => {
    setHovering(true);
    setIsCollapsed(false); // 当鼠标悬停时展开
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  // 5秒无操作后收起导航栏
  useEffect(() => {
    let timeout;
    if (!hovering) {
      timeout = setTimeout(() => {
        setIsCollapsed(true); // 超过5秒自动收缩
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [hovering]);

  return (
    <div
      className={`navbar ${isCollapsed ? "collapsed" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul>
        {/* 高亮圆圈 */}
        <div
          className="highlighter"
          style={{
            transform: `translateY(${activeIndex * 100}px)`,
          }}
        ></div>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => handleClick(index)}
          >
            <span className="icon">{item.icon}</span>
            <span className="text">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
