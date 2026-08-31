import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HomeLayout({children}){
    return(
            <div className="min-h-screen bg-paper-white font-inter text-true-black selection:bg-mint-green selection:text-paper-white overflow-x-hidden">
                <Header/>
                {children}
                <Footer/>
            </div>
    )
}