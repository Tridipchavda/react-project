import logo from '../background.jpg';
import back from '../back.svg';


function LogInPopUp(params) {
    return (
        <>
            <div className="modal fade signUpDialog" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <button type="button" className="btn-close closeBtn" data-bs-dismiss="modal" aria-label="Close"></button>

                <div className="modal-dialog ">
                    <div className="modal-content mainDialog">
                        <div className="flexRow">
                            <div className="modal-header btn-success">
                                <p className="modal-title" id="exampleModalLabel">
                                    Let's learn, share & inspire each other with our passion for computer engineering. Sign up now.
                                </p>
                            </div>
                            <div className="acc">
                               
                                <div className="partition1">
                                    <h4 className="create">Sign In</h4>
                                    <center>
                                    <div className="modal-body my-3">
                                        <form>
                                            <input type="text" className="form-control px-2 py-2 my-2" id="recipient-name" placeholder="Email" />
                                            <input type="password" className="form-control px-2 py-2 my-2" id="recipient-name" placeholder="Password" />

                                            <div class="d-grid gap-2 my-3">
                                            <button type="submit" className="btn btn-primary rounded-pill "> Sign In</button>
                                            </div>
                                            
                                            <br></br>
                                            <div class="d-grid gap-2 my-2">
                                            <button type="submit" className="btn rounded-rounded border border-1"> Sign in With Facebook</button>
                                            </div>
                                           
                                            <div class="d-grid gap-2 my-2">
                                            <button type="submit" className="btn rounded-rounded border border-1"> Sign in with Google</button>
                                            </div>
                                        </form>

                                        <a href="#" className="py-5"> Forgot password?</a>
                                    </div>
                                    </center>
                                </div>

                                <div className="partition2">
                                    <center>
                                        <p>Already had an Account?
                                            <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"> Create new for free</a>
                                        </p>
                                        <img src={back} className="popUpImg"width="350px" height="300px"/>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LogInPopUp;