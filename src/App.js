import Header from "./Components/Header";
import { OuterLayout } from "./styles/Layouts";
import CardSection from "./Components/CardSection";
import ChartSection from "./Components/ChartSection";
import MessaginSection from "./Components/MessagingSection";
import PaymentSection from "./Components/PaymentSection";
import FAQSection from "./Components/FAQSection";
import Footer from "./Components/Footer";
import { Fade } from "react-reveal";

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <Fade left>
          <CardSection />
        </Fade>

        <ChartSection />
        <MessaginSection />
        <PaymentSection />
        <FAQSection />
      </OuterLayout>
      <Footer />
    </div>
  );
}

export default App;
