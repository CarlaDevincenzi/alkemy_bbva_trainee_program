import '../css/footer.css';

function Footer() {
    return (
        <footer>
            <div className="fixed-bottom navbar navbar-dark navbar-expand-lg bg-dark text-light">
                <ul>
                    <li><a className="text-light" href="http://instagram.com" rel="noopenernoreferrer">Instagram</a></li>
                </ul>
                <p className="ms-5">Copyright Alkemy Challenge</p>
            </div>            
        </footer>
    );
}

export default Footer;