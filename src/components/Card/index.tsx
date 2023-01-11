import Link from 'next/link';
import styles from './styles.module.css'

import Image from 'next/image';

interface CardProps {
    pokemon: {
        id: number;
        name: string;
    };
}
export default function Card({ pokemon }: CardProps) {
    return (
        <div className={styles.card}>
            <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width={120}
                height={120}
                alt={pokemon.name}
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link legacyBehavior href={`/pokemon/${pokemon.id}`}><a className={styles.btn}>Detalhes</a></Link>
        </div>
    )
}