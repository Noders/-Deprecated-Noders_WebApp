export default (ngModule) => {
    ngModule
        .service('Sidebar', function() {
            var sidebarIsShown = false;

            function toggleSidebar() {
                sidebarIsShown = !sidebarIsShown;
            }

            function hideSideBar(){
                sidebarIsShown = false;
            }

            function showSideBar(){
                sidebarIsShown = true;
            }

            return {
                isSidebarShown: function() {
                    return sidebarIsShown;
                },
                hideSideBar: hideSideBar,
                showSideBar: showSideBar,
                toggleSidebar: toggleSidebar
            };
        });
};