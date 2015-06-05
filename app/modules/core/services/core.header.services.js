export default (ngModule) => {
    ngModule
        .service('Sidebar', function() {
            var sidebarIsShown = false;

            function toggleSidebar() {
                sidebarIsShown = !sidebarIsShown;
            }

            return {
                isSidebarShown: function() {
                    return sidebarIsShown;
                },
                toggleSidebar: toggleSidebar
            };
        });
};