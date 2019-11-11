//Action for toggling side menu
export function toggleSideMenu(drawerStatus) {
    return  {
      type: "SIDEMENU",
      payload: drawerStatus
    };
};