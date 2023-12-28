import { useEffect, useState } from "react";
import client from "../utils/client";

export default function Home() {
    const [datas, setDatas] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                client.get("university").then(({ data }) => {
                    setDatas(data.data);
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <main class="main">
                <div class="mt-100"></div>
                {/* <section class="section-box mt-80">
                    <div class="section-box wow animate__animated animate__fadeIn">
                        <div class="container">
                            <div class="text-center">
                                <h2 class="section-title mb-10 wow animate__animated animate__fadeInUp">
                                    Browse by category
                                </h2>
                                <p class="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                    Find the job that&rsquo;s perfect for you.
                                    about 800+ new jobs everyday
                                </p>
                            </div>
                            <div class="box-swiper mt-50">
                                <div class="swiper-container swiper-group-5 swiper">
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <a href="jobs-grid.html">
                                                <div class="item-logo">
                                                    <div class="image-left">
                                                        <img
                                                            alt="jobBox"
                                                            src="assets/imgs/page/homepage1/customer.svg"
                                                        />
                                                    </div>
                                                    <div class="text-info-right">
                                                        <h4>Customer Help</h4>
                                                        <p class="font-xs">
                                                            185
                                                            <span>
                                                                {" "}
                                                                Jobs Available
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <a href="jobs-grid.html">
                                                <div class="item-logo">
                                                    <div class="image-left">
                                                        <img
                                                            alt="jobBox"
                                                            src="assets/imgs/page/homepage1/customer.svg"
                                                        />
                                                    </div>
                                                    <div class="text-info-right">
                                                        <h4>Customer Help</h4>
                                                        <p class="font-xs">
                                                            185
                                                            <span>
                                                                {" "}
                                                                Jobs Available
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <a href="jobs-grid.html">
                                                <div class="item-logo">
                                                    <div class="image-left">
                                                        <img
                                                            alt="jobBox"
                                                            src="assets/imgs/page/homepage1/customer.svg"
                                                        />
                                                    </div>
                                                    <div class="text-info-right">
                                                        <h4>Customer Help</h4>
                                                        <p class="font-xs">
                                                            185
                                                            <span>
                                                                {" "}
                                                                Jobs Available
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <a href="jobs-grid.html">
                                                <div class="item-logo">
                                                    <div class="image-left">
                                                        <img
                                                            alt="jobBox"
                                                            src="assets/imgs/page/homepage1/customer.svg"
                                                        />
                                                    </div>
                                                    <div class="text-info-right">
                                                        <h4>Customer Help</h4>
                                                        <p class="font-xs">
                                                            185
                                                            <span>
                                                                {" "}
                                                                Jobs Available
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <a href="jobs-grid.html">
                                                <div class="item-logo">
                                                    <div class="image-left">
                                                        <img
                                                            alt="jobBox"
                                                            src="assets/imgs/page/homepage1/customer.svg"
                                                        />
                                                    </div>
                                                    <div class="text-info-right">
                                                        <h4>Customer Help</h4>
                                                        <p class="font-xs">
                                                            185
                                                            <span>
                                                                {" "}
                                                                Jobs Available
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <a href="jobs-grid.html">
                                                <div class="item-logo">
                                                    <div class="image-left">
                                                        <img
                                                            alt="jobBox"
                                                            src="assets/imgs/page/homepage1/customer.svg"
                                                        />
                                                    </div>
                                                    <div class="text-info-right">
                                                        <h4>Customer Help</h4>
                                                        <p class="font-xs">
                                                            185
                                                            <span>
                                                                {" "}
                                                                Jobs Available
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <a href="jobs-grid.html">
                                                <div class="item-logo">
                                                    <div class="image-left">
                                                        <img
                                                            alt="jobBox"
                                                            src="assets/imgs/page/homepage1/customer.svg"
                                                        />
                                                    </div>
                                                    <div class="text-info-right">
                                                        <h4>Customer Help</h4>
                                                        <p class="font-xs">
                                                            185
                                                            <span>
                                                                {" "}
                                                                Jobs Available
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <a href="jobs-grid.html">
                                                <div class="item-logo">
                                                    <div class="image-left">
                                                        <img
                                                            alt="jobBox"
                                                            src="assets/imgs/page/homepage1/customer.svg"
                                                        />
                                                    </div>
                                                    <div class="text-info-right">
                                                        <h4>Customer Help</h4>
                                                        <p class="font-xs">
                                                            185
                                                            <span>
                                                                {" "}
                                                                Jobs Available
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="mt-50"></div>
                                    <div class="text-center">
                                        <a
                                            class="btn btn-brand-1 btn-icon-load mt--30 hover-up"
                                            href="blog-grid.html"
                                        >
                                            Load More Posts
                                        </a>
                                    </div>
                                    <div class="mt-100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section class="section-box mt-50">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-title mb-10 wow animate__animated animate__fadeInUp">
                                Jobs of the day
                            </h2>
                            <p class="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                Search and connect with the right candidates
                                faster.{" "}
                            </p>
                        </div>
                        <div class="mt-70">
                            <div class="tab-content" id="myTabContent-1">
                                <div
                                    class="tab-pane fade show active"
                                    id="tab-job-1"
                                    role="tabpanel"
                                    aria-labelledby="tab-job-1"
                                >
                                    <div class="row">
                                        {datas?.map((data) => (
                                            <div
                                                class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"
                                                key={data.id}
                                            >
                                                <div class="card-grid-2 hover-up">
                                                    <div class="card-grid-2-image-left">
                                                        <span class="flash"></span>
                                                        <div class="image-box">
                                                            <img
                                                                src="assets/imgs/brands/brand-1.png"
                                                                alt="jobBox"
                                                            />
                                                        </div>
                                                        <div class="right-info">
                                                            <a
                                                                class="name-job"
                                                                href="company-details.html"
                                                            >
                                                                {data.name}
                                                            </a>
                                                            <span class="location-small">
                                                               {data.address}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="card-block-info">
                                                        <h6>
                                                            <a href="job-details.html">
                                                                UI / UX Designer
                                                                fulltime
                                                            </a>
                                                        </h6>
                                                        <div class="mt-5">
                                                            <span class="card-briefcase">
                                                                Fulltime
                                                            </span>
                                                            <span class="card-time">
                                                                4
                                                                <span>
                                                                    {" "}
                                                                    minutes ago
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <p class="font-sm color-text-paragraph mt-15">
                                                        {data.description}
                                                        </p>
                                                        <div class="mt-30">
                                                            <a
                                                                class="btn btn-grey-small mr-5"
                                                                href="jobs-grid.html"
                                                            >
                                                                Adobe XD
                                                            </a>
                                                            <a
                                                                class="btn btn-grey-small mr-5"
                                                                href="jobs-grid.html"
                                                            >
                                                                Figma
                                                            </a>
                                                            <a
                                                                class="btn btn-grey-small mr-5"
                                                                href="jobs-grid.html"
                                                            >
                                                                Photoshop
                                                            </a>
                                                        </div>
                                                        <div class="card-2-bottom mt-30">
                                                            <div class="row">
                                                                <div class="col-lg-7 col-7">
                                                                    <span class="card-text-price">
                                                                        $500
                                                                    </span>
                                                                    <span class="text-muted">
                                                                        /Hour
                                                                    </span>
                                                                </div>
                                                                <div class="col-lg-5 col-5 text-end">
                                                                    <div
                                                                        class="btn btn-apply-now"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#ModalApplyJobForm"
                                                                    >
                                                                        Apply
                                                                        now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div class="mt-50"></div>
                                <div class="text-center">
                                    <a
                                        class="btn btn-brand-1 btn-icon-load mt--30 hover-up"
                                        href="blog-grid.html"
                                    >
                                        Load More Posts
                                    </a>
                                </div>
                                <div class="mt-50"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <script src="assets/js/plugins/counterup.js"></script>
            </main>
        </div>
    );
}
