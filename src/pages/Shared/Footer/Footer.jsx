
const Footer = () => {
    return (
        <footer className="footer p-10 bg-pink-200 shadow-2xl">
            <div>
                <img className="w-36" src="/logo.png" alt="" />
            </div>
            <div>
                <span className="footer-title">Contact</span>
                <a className="link link-hover">Email: info@example.com</a>
                <a className="link link-hover">Phone: +1-123-456-7890</a>
                <a className="link link-hover">Address: Mirpur 10, Dhaka, Bangladesh</a>
            </div>
            <div>
                @ copyright 2023, Rhythmax
            </div>
        </footer>
    );
};

export default Footer;