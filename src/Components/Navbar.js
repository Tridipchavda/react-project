import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light header">
                <div class="container-fluid">
                    <a class="navbar-brand brand mx-3" href="#">ATG WORLD</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <form class="d-flex searchInput rounded-pill">
                        <input class="search" type="search" placeholder="Search for your Favourite group in ATG" aria-label="Search"></input>
                        <FontAwesomeIcon icon="fa-solid fa-search" />
                    </form>

                    <div class="navbar createAcc">
                        <p>Create Account
                        <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"> It's Free</a>
                        </p>
                    </div>

                </div>
            </nav>

            <nav class="navbar navbar-light bg-light mNav">
                <a class="navbar-brand ahref" href="#">
                    <p>ATG WORLD</p> 
                    <button className="btn btn-primary">
                        <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"> Create Account</a>
                    </button>
 
                </a>
                
            </nav>
        </>
    );

}
export default Navbar;
