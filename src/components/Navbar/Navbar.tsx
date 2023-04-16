import { Link } from "@solidjs/router";
import styles from "./Navbar.module.scss";

function Navbar() {
    return (
        <div class={styles.des}>
            <ul class={styles.des}>
                <li><a href="/">Caculate</a></li>
                <li><a href="/records">Records</a></li>
                <li><a href="/about">About</a></li>

            </ul>
        </div>
    );
}

export default Navbar;
