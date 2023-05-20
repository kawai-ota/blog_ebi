import Logo from "./logo";
import Nav from "components/nav";
import styles from "../styles/header.module.css";
import Container from "./container";

export default function Header() {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
