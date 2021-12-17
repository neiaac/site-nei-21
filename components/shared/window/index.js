import styles from "./window.module.scss";

export default function Window({ img }) {
  return (
    <div className={styles.window}>
      <div className={styles.tab}>
        <div></div>
        <div></div>
        <div></div> 
      </div>
      <div className={styles.content}>
        <img src={img + ".png"} alt="" />
      </div>
    </div> 
  )
}