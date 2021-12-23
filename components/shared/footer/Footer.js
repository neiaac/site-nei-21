import Link from 'next/link';
import { footer, social } from './footer.module.scss';

const Footer = () => (
  <footer className={footer}>
    <div>
      <span>nei@academica.pt</span>
      <span>Made with ♥️ by NEI/AAC</span>
      <div className={social}>
        <Link href="https://www.facebook.com/neiaac">
          <a>
            <img src="/icons/facebook.svg" alt="Facebook's Icon" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/neiaac/">
          <a>
            <img src="/icons/instagram.svg" alt="Instagram's Icon" />
          </a>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
