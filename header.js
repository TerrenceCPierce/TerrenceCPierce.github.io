let appHeader = `
<header>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="nav-bar-container">
<a id = "home-btn" href="https://TerrencePierce.com/">

    <button class="btn"><i class="fa fa-home"></i></button> </a>

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
                                        href="https://TerrencePierce.com/#Tubaldi">Tubaldi Lab</a>
                                </li>
                                <li role="menuitem">
                                    <a class="dropdown-link"
                                        href="https://TerrencePierce.com/#ThermaHive">ThermaHive</a>
                                </li>
                                <li role="menuitem">
                                    <a class="dropdown-link"
                                        href="https://TerrencePierce.com/#NIST">NIST</a>
                                </li>
                                <li role="menuitem">
                                    <a class="dropdown-link"
                                        href="https://TerrencePierce.com/#AERT">AERT</a>
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
                            </ul>
                            <ul role="menu">
                                <li>
                                    <span
                                        class="dropdown-link-title">Leadership Experience</span>
                                </li>
                                <li role="menuitem">
                                    <a class="dropdown-link"
                                        href="https://terrencepierce.com/#ENES100">ENES100 TF</a>
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

                    <input type="checkbox" id ="myCheck"/>
                    
                    <span></span>
                    <span></span>
                    <span></span>
            </button>
        </div>
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