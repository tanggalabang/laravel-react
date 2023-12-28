import { Outlet, Navigate } from "react-router-dom";
import { sessionToken } from "../constant/localStorage";
import { routeDashboard, routeHome } from "../constant/routeName";
import '../assets/css/style.css?version=4.1'
import client from "../utils/client";

export default function Layout () {

    const token = localStorage.getItem(sessionToken)

    const handleSignout = (e) => {
        e.preventDefault()

        client.post('signout', token).then(() => {
            
            localStorage.clear()
            window.location.reload()
        })
    }

    return (
        <div>
       
            <div>
                <div class="modal fade" id="ModalApplyJobForm" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content apply-job-form">
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="modal-body pl-30 pr-30 pt-50">
                        <div class="text-center">
                        <p class="font-sm text-brand-2">Job Application </p>
                        <h2 class="mt-10 mb-5 text-brand-1 text-capitalize">Start your career today</h2>
                        <p class="font-sm text-muted mb-30">Please fill in your information and send it to the employer.                   </p>
                        </div>
                        <form class="login-register text-start mt-20 pb-30" action="#">
                        <div class="form-group">
                            <label class="form-label" for="input-1">Full Name *</label>
                            <input class="form-control" id="input-1" type="text" required="" name="fullname" placeholder="Steven Job"/>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="input-2">Email *</label>
                            <input class="form-control" id="input-2" type="email" required="" name="emailaddress" placeholder="stevenjob@gmail.com"/>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="number">Contact Number *</label>
                            <input class="form-control" id="number" type="text" required="" name="phone" placeholder="(+01) 234 567 89"/>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="des">Description</label>
                            <input class="form-control" id="des" type="text" required="" name="Description" placeholder="Your description..."/>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="file">Upload Resume</label>
                            <input class="form-control" id="file" name="resume" type="file" />
                        </div>
                        <div class="login_footer form-group d-flex justify-content-between">
                            <label class="cb-container">
                            <input type="checkbox" /><span class="text-small">Agree our terms and policy</span><span class="checkmark" ></span>
                            </label><a class="text-muted" href="page-contact.html">Lean more</a>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-default hover-up w-100" type="submit" name="login">Apply Job</button>
                        </div>
                        <div class="text-muted text-center">Do you need support? <a href="page-contact.html">Contact Us</a></div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
                <header class="header sticky-bar">
                <div class="container">
                    <div class="main-header">
                    {/* <div class="header-left">
                        <div class="header-logo"><a class="d-flex" href="index.html"><img alt="jobBox" src="assets/imgs/template/jobhub-logo.svg" /></a></div>
                    </div>
                    <div class="header-nav">
                        <nav class="nav-main-menu">
                        <ul class="main-menu">
                            <li class="has-children"><a class="active" href="index.html">Home</a>
                            <ul class="sub-menu">
                                <li><a href="index.html">Home 1</a></li>
                                <li><a href="index-2.html">Home 2</a></li>
                                <li><a href="index-3.html">Home 3</a></li>
                                <li><a href="index-4.html">Home 4</a></li>
                                <li><a href="index-5.html">Home 5</a></li>
                                <li><a href="index-6.html">Home 6</a></li>
                            </ul>
                            </li>
                            <li class="has-children"><a href="jobs-grid.html">Find a Job</a>
                            <ul class="sub-menu">
                                <li><a href="jobs-grid.html">Jobs Grid</a></li>
                                <li><a href="jobs-list.html">Jobs List</a></li>
                                <li><a href="job-details.html">Jobs Details  </a></li>
                                <li><a href="job-details-2.html">Jobs Details 2              </a></li>
                            </ul>
                            </li>
                            <li class="has-children"><a href="companies-grid.html">Recruiters</a>
                            <ul class="sub-menu">
                                <li><a href="companies-grid.html">Recruiters</a></li>
                                <li><a href="company-details.html">Company Details</a></li>
                            </ul>
                            </li>
                            <li class="has-children"><a href="candidates-grid.html">Candidates</a>
                            <ul class="sub-menu">
                                <li><a href="candidates-grid.html">Candidates Grid</a></li>
                                <li><a href="candidate-details.html">Candidate Details</a></li>
                                <li><a href="candidate-profile.html">Candidate Profile</a></li>
                            </ul>
                            </li>
                            <li class="has-children"><a href="blog-grid.html">Pages</a>
                            <ul class="sub-menu">
                                <li><a href="page-about.html">About Us</a></li>
                                <li><a href="page-pricing.html">Pricing Plan</a></li>
                                <li><a href="page-contact.html">Contact Us</a></li>
                                <li><a href="page-register.html">Register</a></li>
                                <li><a href="page-signin.html">Signin</a></li>
                                <li><a href="page-reset-password.html">Reset Password</a></li>
                                <li><a href="page-content-protected.html">Content Protected</a></li>
                            </ul>
                            </li>
                            <li class="has-children"><a href="blog-grid.html">Blog</a>
                            <ul class="sub-menu">
                                <li><a href="blog-grid.html">Blog Grid</a></li>
                                <li><a href="blog-grid-2.html">Blog Grid 2</a></li>
                                <li><a href="blog-details.html">Blog Single</a></li>
                            </ul>
                            </li>
                            <li class="dashboard"><a href="http://wp.alithemes.com/html/jobbox/demos/dashboard" target="_blank">Dashboard</a></li>
                        </ul>
                        </nav>
                        <div class="burger-icon burger-icon-white"><span class="burger-icon-top"></span><span class="burger-icon-mid"></span><span class="burger-icon-bottom"></span></div>
                    </div> */}
                    <div class="header-right">
                        {token ?
                        <div class="block-signin">
                            <button class="btn btn-default btn-shadow ml-40 hover-up" onClick={handleSignout}>Sign Out</button>
                            </div>
                        : <div class="block-signin">
                            <a class="btn btn-default btn-shadow ml-40 hover-up" href="auth/signin">Sign in</a>
                            </div>}
                    </div>
                    </div>
                </div>
                </header>
         
            </div>         
            <Outlet />

            {/* <footer class="footer mt-50">
                <div class="container">
                    <div class="row">
                    <div class="footer-col-1 col-md-3 col-sm-12"><a href="index.html"><img alt="jobBox" src="assets/imgs/template/jobhub-logo.svg" /></a>
                        <div class="mt-20 mb-20 font-xs color-text-paragraph-2">JobBox is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.</div>
                        <div class="footer-social"><a class="icon-socials icon-facebook" href="#"></a><a class="icon-socials icon-twitter" href="#"></a><a class="icon-socials icon-linkedin" href="#"></a></div>
                    </div>
                    <div class="footer-col-2 col-md-2 col-xs-6">
                        <h6 class="mb-20">Resources</h6>
                        <ul class="menu-footer">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-col-3 col-md-2 col-xs-6">
                        <h6 class="mb-20">Community</h6>
                        <ul class="menu-footer">
                        <li><a href="#">Feature</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Credit</a></li>
                        <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div class="footer-col-4 col-md-2 col-xs-6">
                        <h6 class="mb-20">Quick links</h6>
                        <ul class="menu-footer">
                        <li><a href="#">iOS</a></li>
                        <li><a href="#">Android</a></li>
                        <li><a href="#">Microsoft</a></li>
                        <li><a href="#">Desktop</a></li>
                        </ul>
                    </div>
                    <div class="footer-col-5 col-md-2 col-xs-6">
                        <h6 class="mb-20">More</h6>
                        <ul class="menu-footer">
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div class="footer-col-6 col-md-3 col-sm-12">
                        <h6 class="mb-20">Download App</h6>
                        <p class="color-text-paragraph-2 font-xs">Download our Apps and get extra 15% Discount on your first Order&mldr;!</p>
                        <div class="mt-15"><a class="mr-5" href="#"><img src="assets/imgs/template/icons/app-store.png" alt="joxBox" /></a><a href="#"><img src="assets/imgs/template/icons/android.png" alt="joxBox" /></a></div>
                    </div>
                    </div>
                    <div class="footer-bottom mt-50">
                    <div class="row">
                        <div class="col-md-6"><span class="font-xs color-text-paragraph">Copyright &copy; 2022. JobBox all right reserved</span></div>
                        <div class="col-md-6 text-md-end text-start">
                        <div class="footer-social"><a class="font-xs color-text-paragraph" href="#">Privacy Policy</a><a class="font-xs color-text-paragraph mr-30 ml-30" href="#">Terms &amp; Conditions</a><a class="font-xs color-text-paragraph" href="#">Security</a></div>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>             */}
        </div>
    )
}