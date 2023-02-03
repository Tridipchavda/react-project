import logo from '../background.jpg';
import share from '../share.svg';

function PostFeed() {
    return (
        <div className="allOver my-2">
            <div className="allFeeds">
                <div class="card feed my-3">
                    <img src={logo} class="card-img-top" alt="..." />
                    <div class="card-body text-start">
                        <h5 class="card-title">What if famous brand had regular fonts? Meet regularBoards</h5>
                        <p class="card-text">
                            What if famous brand had regular fonts? Meet regularBoards
                            What if famous brand had regular fonts? Meet regularBoards
                            What if famous brand had regular fonts? Meet regularBoards
                            What if famous brand had regular fonts? Meet regularBoards
                        </p>
                        <div className="feedInfo">
                            <img className="rounded-circle mx-3" src={logo} width="30px" height="30px"></img>
                            <p className="InfoName">Tridip Chavda</p>
                            <p className=" mx-3">3.4 Views</p>
                            <button className="btn mx-3 border border-dark"><img src={share} width="25px" height="25px" /></button>
                        </div>

                    </div>

                </div>
                <div class="card feed my-3">
                    <img src={logo} class="card-img-top" alt="..." />
                    <div class="card-body text-start">
                        <h5 class="card-title">What if famous brand had regular fonts? Meet regularBoards</h5>
                        <p class="card-text">
                            What if famous brand had regular fonts? Meet regularBoards
                            What if famous brand had regular fonts? Meet regularBoards
                            What if famous brand had regular fonts? Meet regularBoards
                            What if famous brand had regular fonts? Meet regularBoards
                        </p>
                        <div className="feedInfo">
                            <img className="rounded-circle mx-3" src={logo} width="30px" height="30px"></img>
                            <p className="InfoName">Tridip Chavda</p>
                            <p className=" mx-3">3.4 Views</p>
                            <button className="btn mx-3 border border-dark"><img src={share} width="25px" height="25px" /></button>
                        </div>

                    </div>
                </div>
            </div>
            <div class="locationForm mx-5 my-4">
                <center>
                    <div class="input-group flex-nowrap ">
                        <input type="text" class="form-control" placeholder="Enter Location" aria-label="Username" aria-describedby="addon-wrapping" />
                        <span class="input-group-text" id="addon-wrapping">🔍</span>
                    </div>
                    <h5 className="my-4">Recommended Groups</h5>
                    <div className="connections my-2">
                        <img className="rounded-circle" src={logo} width="30px" height="30px" />
                        <p className="mx-3 ">Your Name</p>
                        <button className="followBtn">Follow</button>
                    </div>
                    <div className="connections my-2">
                        <img className="rounded-circle" src={logo} width="30px" height="30px" />
                        <p className="mx-3 ">Your Name</p>
                        <button className="followBtn">Follow</button>
                    </div>
                    <div className="connections my-2">
                        <img className="rounded-circle" src={logo} width="30px" height="30px" />
                        <p className="mx-3 ">Your Name </p>
                        <button className="followBtn">Follow</button>
                    </div>
                    <div className="connections my-2">
                        <img className="rounded-circle" src={logo} width="30px" height="30px" />
                        <p className="mx-3 ">Your Name </p>
                        <button className="followBtn">Follow</button>
                    </div>
                    <div className="connections my-2">
                        <img className="rounded-circle" src={logo} width="30px" height="30px" />
                        <p className="mx-3 ">Your Name </p>
                        <button className="followBtn">Follow</button>
                    </div>

                    <div className="connections my-4">
                        <a href="#">See More...</a>
                    </div>

                </center>
            </div>

        </div>
    );
}

export default PostFeed;