
function SideNavbar() {
    return (
        <center>
            <nav class="navbar navbar-expand-lg navbar-light sideNavbar">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">All Posts(32)</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Article</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Event</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Education</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Job</a>
                            </li>
                        </ul>

                        <form class="d-flex">
                            <div class="dropdown">
                                <a class="btn btn-secondary dropdown-toggle dropbtn" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Write a Post
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Write a Post</a></li>
                                    
                                </ul>
                            </div>
                            <button class="btn btn-primary mx-3" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Join Group
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </center>
    );

}
export default SideNavbar;
