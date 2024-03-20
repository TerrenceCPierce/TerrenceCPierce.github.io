let appHeader = `
<header>
    <div class="container">
        <div class="nav-start">
            <nav class="menu">
                <ul class="menu-bar">
                    <!--
                    <li>
                        <button class="nav-link dropdown-btn"
                            data-dropdown="dropdown1"
                            aria-haspopup="true" aria-expanded="false"
                            aria-label="Research Projects">
                            Research Projects
                            <i class="bx bx-chevron-down"
                                aria-hidden="true"></i>
                        </button>
                        <div id="dropdown1" class="dropdown">
                            <ul role="menu">
                                <li role="menuitem">
                                    <a class="dropdown-link"
                                        href="Research Projects/AERT.html">
                                        <div>
                                            <span
                                                class="dropdown-link-title">AERT</span>
                                        </div>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a class="dropdown-link"
                                        href="Research Projects/Vaisala.html">
                                        <div>
                                            <span
                                                class="dropdown-link-title">Vaisala</span>
                                        </div>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a class="dropdown-link"
                                        href="Research Projects/SPPL.html">
                                        <div>
                                            <span
                                                class="dropdown-link-title">SPPL</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </li>
                    -->
                    <li>
                        <button class="nav-link dropdown-btn"
                            data-dropdown="dropdown2"
                            aria-haspopup="true" aria-expanded="false"
                            aria-label="experience">
                            Experience
                            <i class="bx bx-chevron-down"
                                aria-hidden="true"></i>
                        </button>
                        <div id="dropdown2" class="dropdown">
                            <ul role="menu">
                                <li>
                                    <span
                                        class="dropdown-link-title">Research Experience</span>
                                </li>
                                <li role="menuitem">
                                    <a class="dropdown-link"
                                        href="https://terrencepierce.com/#AERT">AERT</a>
                                </li>
                                <li role="menuitem">
                                    <a class="dropdown-link"
                                        href="https://terrencepierce.com/#Vaisala">Vaisala</a>
                                </li>
                                <li role="menuitem">
                                    <a class="dropdown-link"
                                        href="https://terrencepierce.com/#SPPL">SPPL</a>
                                </li>
                                <li role="menuitem">
                                    <a class="dropdown-link"
                                        href="https://terrencepierce.com/#VIP">VIP Fluids Project</a>
                                </li>
                                <li role="menuitem">
                                    <a class="dropdown-link"
                                        href="https://terrencepierce.com/#XPrize">XPrize</a>
                                </li>
                            </ul>
                            <ul role="menu">
                                <li>
                                    <span
                                        class="dropdown-link-title">Leadership Experience</span>
                                </li>
                                <li role="menuitem">
                                    <a class="dropdown-link"
                                        href="https://terrencepierce.com/#ENES100 TF">ENES100 TF</a>
                                </li>
                                <li role="menuitem">
                                    <a class="dropdown-link"
                                        href="https://terrencepierce.com/#AMP">CHEM135 AMP</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li><a class="nav-link" href="https://terrencepierce.com/about">About</a></li>
                </ul>
            </nav>
        </div>

        <div class="nav-end">
            <button id="hamburger" aria-label="hamburger"
                aria-haspopup="true" aria-expanded="false">
                <!-- <i class="bx bx-menu" aria-hidden="true"></i> -->
                <div id="menuToggle">

                    <input type="checkbox" />
                    
                    <span></span>
                    <span></span>
                    <span></span>
            </button>
        </div>
    </div>
</header>

<div class="div-header">
<h1>Terrence Pierce</h1>
<p>Engineer | Researcher | Scientist</p>
<img class="headshot" src="Images/Terrence-Pierce-Headshot.JPG"
    alt="Headshot">
</div>

`;
document.getElementById("app-header").innerHTML = appHeader;