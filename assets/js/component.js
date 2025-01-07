document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("site-header").innerHTML = `
            <div class="header-body">
                <div class="logo-container">
                    <a href="index.html"><img src="assets/icon/Logo.svg" alt="LOGO"></a>
                </div>
                <nav class="main-menu">
                    <ul>
                        <li id="main-home" class="main-menu-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li id="about-us" class="main-menu-item">
                            <a href="about-us.html">About Us</a>
                        </li>
                        <li id="aos" class="main-menu-item with-icon">
                            <a href="#">Area of Service<i class="fa-solid fa-chevron-down"></i></a>
                            <!-- Submenu -->
                            <ul class="submenu">
                                <li><a href="accounting-internal.html">Accounting and Internal Controls</a></li>
                                <li><a href="policy-process.html">Policy, Process and Documentation</a></li>
                                <li><a href="tax-vat-other.html">Tax, VAT, Tax Exemption Certificate and Other Legal Compliance</a></li>
                                <li><a href="diligence-valuation.html">Due Diligence, Forecast Reporting and Management Report</a></li>
                                <li><a href="forecast-management.html">Forecast Reporting and Management Report</a></li>
                                <li><a href="audit-service.html">Audit Service</a></li>
                            </ul>
                        </li>
                        <li id="contact" class="main-menu-item">
                            <a href="contact-us.html">Contact Us</a>
                        </li>
                        <li class="main-menu-item">
                            <img src="assets/img/whatsapp.png" alt="WA">
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=8801730273573">+8801730273573</a>
                        </li>
                    </ul>
                </nav>
            </div>
        `;
  document.getElementById("site-footer").innerHTML = `
            <section class="our-clients" id="our-clients-footer">
                <div class="footer-title">
                    <h2>Our <span>Clients</span></h2>
                </div>
                <ul class="body clients-body primary">
                    <li class="list-item">
                        <img src="assets/img/clients/client-1.png" alt="Client Icon">
                    </li>
                    <li class="list-item">
                        <img src="assets/img/clients/client-2.png" alt="Client Icon">
                    </li>
                    <li class="list-item">
                        <img src="assets/img/clients/client-3.png" alt="Client Icon">
                    </li>
                    <li class="list-item">
                        <img src="assets/img/clients/client-4.png" alt="Client Icon">
                    </li>
                    <li class="list-item">
                        <img src="assets/img/clients/client-5.png" alt="Client Icon">
                    </li>
                    <li class="list-item">
                        <img src="assets/img/clients/client-6.png" alt="Client Icon">
                    </li>
                    <li class="list-item">
                        <img src="assets/img/clients/client-7.png" alt="Client Icon">
                    </li>
                    <li class="list-item">
                        <img src="assets/img/clients/client-8.png" alt="Client Icon">
                    </li>
                    <li class="list-item">
                        <img src="assets/img/clients/client-1.png" alt="Client Icon">
                    </li>
                    <li class="list-item">
                        <img src="assets/img/clients/client-2.png" alt="Client Icon">
                    </li>
                </ul>
            </section>
            <section class="contact-us" id="contact-us-footer">
                <div class="contact-form">
                    <div class="form-header">
                        <span>Let’s connect</span>
                        <h2>We Are Here To <span>Help</span></h2>
                    </div>
                    <div class="form-body">
                        <form action="#">
                            <input name="name" type="text" placeholder="Your Full Name">
                            <input name="email" type="email" placeholder="Your Email">
                            <input name="contact" type="tel" placeholder="Your Contact No">
                            <input name="message" type="text" placeholder="Write your message Here">
                            <input name="submit" type="submit" value="Submit">
                        </form>
                    </div>
                </div>
                <img src="assets/img/logo-watermark.png" alt="Logo">
            </section>
            <div class="main-footer">
                <div class="logo">
                    <img src="assets/icon/Logo.svg" alt="LOGO">
                </div>
                <div class="informations">
                    <ul class="important-links">
                        <li class="company-info">
                            <div class="footer-title">
                                <strong>Address</strong>
                            </div>
                            <div class="details">
                                <p>18/10-A, Block F,Ring Road, Tekka Para,Mohammadpur, Dhaka-1207</p>
                            </div>
                        </li>
                        <li class="menu-links">
                            <div class="footer-title">
                                <strong>Menu</strong>
                            </div>
                            <ul class="menu">
                                <li class="menu-item"><a href="index.html">Home</a></li>
                                <li class="menu-item"><a href="#">Our People</a></li>
                                <li class="menu-item"><a href="contact-us.html">Contact Us</a></li>
                            </ul>
                        </li>
                        <li class="ao-service">
                            <div class="footer-title">
                                <strong>Area Of Service</strong>
                            </div>
                            <div class="menu">
                                <ul class="left service-item">
                                    <li class="menu-item">
                                        <div class="link"><a href="../accounting-internal.html">Accounting and Internal Controls</a></div>
                                        <span class="tooltip">Accounting and Internal Controls</span>
                                    </li>
                                    <li class="menu-item">
                                        <div class="link"><a href="../policy-process.html">Policy, Process and Documentation</a></div>
                                        <span class="tooltip">Policy, Process and Documentation</span>
                                    </li>
                                    <li class="menu-item">
                                        <div class="link"><a href="../tax-vat-other.html">Tax, VAT and Other Legal Compliance</a></div>
                                        <span class="tooltip">Tax, VAT and Other Legal Compliance</span>
                                    </li>
                                </ul>
                                <ul class="right service-item">
                                    <li class="menu-item">
                                        <div class="link"><a href="../diligence-valuation.html">Due Diligence, Forecast Reporting and Management Report</a></div>
                                        <span class="tooltip">Due Diligence, Forecast Reporting and Management Report</span>
                                    </li>
                                    <li class="menu-item">
                                        <div class="link"><a href="../audit-service.html">Audit Service</a></div>
                                        <span class="tooltip">Audit Service</span>
                                    </li>
                                    <li class="menu-item">
                                        <div class="link"><a href="../forecast-management.html">Forecast Reporting and Management Report</a></div>
                                        <span class="tooltip">Forecast Reporting and Management Report</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="contact-info">
                            <div class="footer-title">
                                <strong>Contact</strong>
                            </div>
                            <ul class="menu social-menu">
                                <li class="menu-item phone">
                                    <i class="fa-solid fa-phone"></i><a href="#">(+880) 1730273573</a>
                                </li>
                                <li class="menu-item email">
                                    <i class="fa-regular fa-envelope"></i><a href="#">contact@company.com</a>
                                </li>
                                <li class="menu-item social-icons">
                                    <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div class="foot-note">
                        <strong>&copy; 2023 SCASL | All Rights Reserved</strong>
                    </div>
                </div>
            </div>
        `;
});

$(document).ready(function () {
  // Add 'active' class to menu item based on the header class
  $(`#${$("#site-header").attr("class")}`).addClass("active");

  // Hide footer element based on the footer class
  if ($("#site-footer").hasClass("footer-contact-hide")) {
    $("#our-clients-footer").addClass("hide");
  }
});
