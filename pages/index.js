import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
    // We are indexing the events off-chain and then read them from data-base.
    // Setup a server to listen for these events to be fired and then add them to a database.

    // Is it decentralized?
    // TheGraph -> does this decentralized.
    // Moralis -> does this centralized. (like etherscan or opensea)
    return <div className={styles.container}> HEY!</div>
}
