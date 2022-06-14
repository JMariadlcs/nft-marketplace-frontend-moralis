import '../styles/globals.css'
import { MoralisProvider } from "react-moralis" // Import to use Moralis tools
import Header from "../components/Header"
import { NotificationProvider } from "web3uikit"

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount = {false}>
      <NotificationProvider>
        <Header/>
        <Component {...pageProps} />
      </NotificationProvider>
    </MoralisProvider>
  )};

export default MyApp;
