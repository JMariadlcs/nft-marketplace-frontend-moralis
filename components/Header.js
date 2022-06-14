// This file is used to interact with web3uikit from moralis to interact with the front-end
// NOTICE: we are NOT USING MORALIS SERVER - just the tools

import { ConnectButton } from "web3uikit"
import Link from "next/link" // to navigate between pages

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row"> 
            <h1 className="py-4 px-4 font-bold text-3xl"> NFT Marketplace</h1>
            <nav>
                <Link href="/">
                    <a> NFT Marketplace</a>
                </Link>
                <Link href="/sell-nft">
                    <a> Sell NFTs</a>
                </Link>
                <ConnectButton moralisAuth={false}/>
                
            </nav>
        </nav> 
    )
}