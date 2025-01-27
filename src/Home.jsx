import SectionDownload3 from "./Components/Section-Download-3/Section-Download-3";
import SectionPhone from "./Components/SectionPhone/SectionPhone";
import FrequentlyAsked from "./Components/Frequently-Asked/FrequentlyAsked";
import MoreInformation from "./Components/MoreInfomation/MoreInfomation";
import GlobalStyle from "./styled/GlobalStyled";
import Phone1 from './assets/images/phone-1.png';
import Blog1 from './assets/images/blog-1.jpg';
import Blog2 from './assets/images/blog-2.jpg';
import Blog3 from './assets/images/blog-3.jpg';
import { Section5,Section6, Section7,Titulos } from "./styled/styledSections";
import Navbar from "./Components/navbar/Navbar";


const Home = () =>{
    return(
        <>
            <GlobalStyle/>
            <>
            <nav>
                <Navbar/>
            </nav>
                <>
                <Titulos>
                <h2>Faqs</h2>
                <h1>Frequently Asked <br /> Questions</h1>
                </Titulos>
                </>
                <>
               <Section5>
                <FrequentlyAsked
                    titulo="01 . Unique and bold website design"
                    parrafo="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <FrequentlyAsked
                titulo="02 . We're are ready to start now" 
                parrafo="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                />
                <FrequentlyAsked
                titulo="03. We deliver the highest quality design"   
                />
                <FrequentlyAsked
                titulo="04. We deliver the highest quality design"    
                />
                </Section5>
                </>
            </>
        
            <Section6>
            <SectionDownload3
                titulo="Get the simple app for latest news"
                    parrafo="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold."
                    button="DOWNLOAD NOW"
            />
            <SectionPhone imgUrl={Phone1}/>
            </Section6>
            <>
                <Section7>
                <MoreInformation
                    imgUrl={Blog1}
                    parrafo="Can COVID-19 be caught from a person who has no symptoms?"
                    />
                    <MoreInformation
                    imgUrl={Blog2}
                    parrafo="What you need to know About Novel Corona Virus Covid 19"
                    />
                    <MoreInformation
                    imgUrl={Blog3}
                    parrafo="What can I do to protect myself and prevent the spread of disease?"
                    />
                </Section7>
                
            </>
        </>
    )
}




export default Home;
