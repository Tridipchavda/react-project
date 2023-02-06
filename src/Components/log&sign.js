import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

function EnterComponent() {

    return (
    <div className="enterComponent flex justify-center align-center h-screen place-items-center">
        <Link to="/ReaderLogin">
        <div class="max-w-sm rounded-xl overflow-hidden h-3/6 bg-blue-50 mx-4 cursor-pointer">
            
            <div class="px-6 py-10">
            <p class="text-blue-700 text-3xl">
                Log In
            </p>
            </div>
            <center>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFeklEQVR4nO2cWYgcVRRAa9z3H9c//RGMirggIiKJS0Qw0+/1kBb9UT9kflx+BEURWoMJTN/XGUcTNSBKFLfxI+4ER4griIogBpRx6t6OKKLRqGRRnIwlt8ZmGq1b1dVdPdXddQ88GKrr3Xr9Tr2t6vV4nqIoiqIoiqIoiqIoiqIoiqIog8Bq+OHYkqMLDPijZaAbOPHffGxN9ftj8i5fIQgFOKpZwM+NwwXrKIhK4WfhOVQzNTo/73IPF0EwUqpR2QJ9KglISsbRJ8aR5Vie0jmjG3edYx2916mI/4kBetdO0gp10gHW4bgBPJCVjCUpeMA4/1aV0i5BMBKOExmLiOjGpqrV4BAVk9wyNqeuYKDdYUov5VEVEoNxdF9yJYazqxkL/u1jE3NnXjs1e2QzP//Nx4zDOyzgO3EzMbsU726VEkGpTlcYwIMJLWE7T33brcDyRONCA/R2wphy0NZxpUppoVL/9mgD6MsVh/N813c3QaC/YlrJ3M1VOkqlLFVYNW5WxK2n28oqQ+PK2Fkb4P0qZLHfP8E63CNU0t/W0Y1ZVVQJ/LX/xowS/0tp4qvjCy8lHIBjpqbLOYsru8ZthRciPhIB/NVu+O5EqYJ4DVGuY8UATRtHX4YJaJpbQdz6Yo37+iTj6DdBysdxQnicG6D0fOqba/Rh/1S5C6EHpHyVGp1mAT+KGaQ/5HOk/BZondRFVqZmTxbzdbgIzSfhjtRCLOD1UsASNM6OysP9PLeGNgr1BT+ij4pRhrlz5ev6awssRLpT6Rspj3G4od1CGcCHxDgQPc2Oa5nDL8Thc9FCcFvU+ZXp4NA0j0gM0E+cJ1osvSLkebawQozDN4RgmyMrZJJWpC3YmKOzIq8N+Jgg5PXCCgmfSUW3kPXiYO5wPE2SBncLuF74MjPphaBLW66sEt9AWQp5OfouxU1ejzFSC3H0UlohBmiVlxM85mUnBOgJ4Uu+5vUYI3SXxuHjhRVSBrwzusui3T19/x0EI/yoJO1qvQBC/IvFfrlGl/bkG3ieN1ZrXCaPB7suKqyQ8S2fHS5OYwGf7sk38MKucqswfvy4srrjsMIKCQM6mhICzkur9e53suC8cM2NcXmHfpbVfIwR86r1/bg7Ni0cywB9IAzmC0lbhGQh/Zg6FMLw6jgm8GTHgf9boUCPiNcB2pqYvzBCJukMA7RXCs7bgrqadQXByGK3IsQH2jsGeHpSmMIIYYyjW+IuwH1l3KNxiTLMnWIB34yLXarjTe3EKpSQxS+MTyVcZI8FureyaedxSbH4HD43fNEVH/PJ9stXMCE86FqgV5MuZhz+HLefij/jcxILDbgtzaRh6N8YRsHbcSzQi21UJkkx+LM2pL7QuslOSRqEgdbF7jzsUIhxuGAcPag/TegAfnxiHM1mJoSP13WXYm9mXx0I4VheFxRuUI9ChZAKkcj/rh+gFtI65ZMeHmqXtYxC2rlrVEgGqBAazC4rzxZigO4q1fyr80jW0TMqxA3xG8MhaSGrvJzoYyEtrzWFB4sqpCALQ6MtRIX0fZdlAO9pJuk3iz1ch2xpvf5yJnF/dJEHdduXSYUE+UtQIUH+Fa9CgvwrW4WE5F/JgyVkppmMwz96NKjPDE5C5w37wlBRIf2HtpA+Q4UMiBD+tVPUzkM+xp/pGNIjYnfFA21v/U9wlerOI/gXvNL5OqhnQNLPFJpSkmSokIwYrfnnWYf74isa3+KUsFDax7E8pXvKzl8tLfbaSZyXY6iLrKV08q/Hgf4sQ+O6LMuidCpFZfSRFJXRR1JURh9JURn5YWt4jXW4v2Vqu5+P5VgkxUz4l1ug33mdYVzjKq2RPqAEeAmnvMuhKIqiKIqiKIqiKIqiKIqiKN6y8Q8/l70RksOiKQAAAABJRU5ErkJggg=="></img>
            </center>
            <div class="pt-8">
            <span class="flex bg-blue-300 px-5 py-5 text-bg font-semibold text-gray-700 ">
                You can log in here and send ,share and make Post . So, Connect to society outreach now .
            </span>
            </div>
        </div>
        </Link>

        <Link to="/Signin">
        <div class="max-w-sm rounded-xl overflow-hidden  h-3/6 bg-blue-50 mx-4 cursor-pointer">
            
            <div class="px-6 py-10">
            <p class="text-blue-700 text-3xl">
                Sign In
            </p>
            </div>
            <center>
            <img src="data:image/png;base64,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"></img>
            </center>
            <div class="pt-8">
            <span class="flex bg-blue-300 px-5 py-5 text-bg font-semibold text-gray-700 ">
                If you haven't done registration yet Please click here for using PostWall Application.
            </span>
            </div>
        </div>
        </Link>

      </div>
    );
  }
  
  export default EnterComponent;