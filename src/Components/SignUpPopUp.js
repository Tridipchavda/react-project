import logo from '../background.jpg';
import back from '../back.svg';


function SignUpPopUp(params) {
    return (
        <>
            <div className="modal fade signUpDialog" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <h4 className="create">Create Account</h4>
                                    <div className="modal-body">
                                        <form>

                                            <input type="text" className="form-control px-2 py-2 my-2" id="recipient-name" placeholder="Enter Name" />
                                            <input type="text" className="form-control px-2 py-2 my-2" id="recipient-name" placeholder="Email" />
                                            <input type="password" className="form-control px-2 py-2 my-2" id="recipient-name" placeholder="Password" />
                                            <input type="password" className="form-control px-2 py-2 my-2" id="recipient-name" placeholder="Confirm Password" />

                                            <br></br>
                                            <div class="d-grid gap-2">
                                            <button type="submit" className="btn btn-primary rounded-pill "> Create Account</button>
                                            </div>
                                            <br></br>
                                            
                                            <div class="d-grid gap-2 my-2">
                                            <button type="submit" className="btn rounded-rounded border border-1"> Sign up With Facebook</button>
                                            </div>
                                           
                                            <div class="d-grid gap-2 my-2">
                                            <button type="submit" className="btn rounded-rounded border border-1"> Sign up with Google</button>
                                            </div>

                                            <div class="hidden d-grid gap-2 my-4">
                                                <p>Already had an Account &nbsp;
                                                <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@mdo"> Log In</a>
                                                </p>
                                            
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="partition2">
                                    <center>
                                        <p>Already had an Account? 
                                            <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@mdo"> Log In</a>
                                        </p>
                                        <img src={back} className="popUpImg"width="350px" height="300px"/>

                                        <p className="my-5 fw-light">By signing up, you agree to our Terms & Conditions , Privacy Polices</p>
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

export default SignUpPopUp;