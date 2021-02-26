import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpExperience.module.css";

export function LevelUpExperience() {
    const { level, closeLeveUpExperience } = useContext(ChallengesContext);
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns!</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" onClick={closeLeveUpExperience} >
                    <img src="/icons/close.svg" alt="Fechar" />
                </button>
            </div>
        </div>
    );
}