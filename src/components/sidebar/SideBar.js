import { NavLink, useLocation } from 'react-router-dom';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

function SideBar(props) {

  const { pathname } = useLocation();
  return (
    <CDBSidebar>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Contrast</CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <NavLink to="/" active='true'>
            <CDBSidebarMenuItem icon="th-large" active={pathname === "/"}>Dashboard
            </CDBSidebarMenuItem>
          </NavLink>
          <NavLink to="/management" active='true'>
            <CDBSidebarMenuItem icon="sticky-note" active={pathname === "/management"}>Management</CDBSidebarMenuItem >
          </NavLink>
          <NavLink to="/statistics">
            <CDBSidebarMenuItem icon="chart-line" active={pathname === "/statistics"} iconType="solid">Statistics</CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{ padding: '20px 5px' }}
        >
          Sidebar Footer
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
}

export default SideBar;
