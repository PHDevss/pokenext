import styles from '../../styles/About.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <div className={styles.about}>
        <h1>Sobre o projeto</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi inventore, ea perspiciatis repellat, tempore autem eaque quibusdam, fugit omnis libero nemo quos. Soluta officiis error optio! Numquam, delectus dolores! Dicta?</p>
        <Image src='/images/charizard.png' width={300} height={300} alt='pokemon'></Image>
    </div>
  )
}
