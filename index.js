import styles from '../styles/Home.module.css'

export default function Home() {
  const handleRegisterClick = () => {
    window.location.href = 'https://forms.gle/6MkVna5VHxhDJwyg9'  // Replace with your URL
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BASELIAN GRIP<br />BATTLE</h1>

      <div className={styles.logo}></div>

      <p className={styles.subtitle}>ONLY THE STRONG HOLD THE CROWN.</p>

      <button className={styles.registerBtn} onClick={handleRegisterClick}>
        REGISTER NOW
      </button>
    </div>
  )
}
