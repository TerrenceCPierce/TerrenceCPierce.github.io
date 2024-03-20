let appFooter = `
<p>Contact: 
                <ul>
                <li><a href="#" class="crypted"
                data-name="tpierce2"
                data-domain="terpmail.umd"
                data-tld="edu"
                onclick="window.location.href = 'mailto:' + this.dataset.name + '@' + this.dataset.domain + '.' + this.dataset.tld; return false;"></a></li>

                <li><a href="#" class="crypted"
                data-name="terrencecpierce"
                data-domain="gmail"
                data-tld="com"
                onclick="window.location.href = 'mailto:' + this.dataset.name + '@' + this.dataset.domain + '.' + this.dataset.tld; return false;"></a></li>
            </ul>
             </p>

`;
document.getElementById("app-footer").innerHTML = appFooter;