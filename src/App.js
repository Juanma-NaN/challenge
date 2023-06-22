import "./App.css";
import Header from "./components/Header";
import Image1 from "./assets/images/illustration-intro.png";
import Image2 from "./assets/images/illustration-stay-productive.png";
import Button from "./components/Button";
import Item from "./components/Item";
import { items, testimonies } from "./assets/utils";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Arrow from "./assets/images/icon-arrow.svg";

function App() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col items-center px-6 py-8 md:px-16 md:py-16 w-full h-full bg-darkblue1">
        <Header />
      </div>
      <div className="flex flex-col items-center px-6 py-8 md:px-16 md:py-16 bg-darkblue1 bg-curvy-mobile md:bg-curvy-desktop bg-bottom bg-no-repeat">
        <div className="flex flex-col items-center md:max-w-[720px]">
          <img alt="Building" className="block my-14 md:my-12" src={Image1} />
          <p className="text-4xl md:text-7xl text-center text-white w-full break-words font-bold">
            All your files in one secure location, accesible anywhere.
          </p>
          <p className="text-white text-center my-8 max-w-[290px] md:max-w-[520px] text-base md:text-2xl">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
        </div>
        <Button text="Get Started" />
      </div>
      <div className="flex flex-col items-center px-6 py-8 md:px-16 md:py-16 bg-darkblue2">
        <div className="flex max-w-[80%] flex-wrap items-center my-[8rem] justify-center gap-24">
          {items.map((item, index) => (
            <Item
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
        <div className="flex items-center justify-center flex-wrap gap-10 md:gap-6">
          <img alt="Productive" className="block" src={Image2} />
          <div className="flex flex-col justify-center">
            <p className="text-2xl md:text-4xl md:text-7xl text-white md:max-w-[300px] break-words font-bold">
              Stay productive, wherever you are
            </p>
            <p className="font text-white my-2 md:max-w-[290px] md:max-w-[500px] text-base font-body">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-white my-2 max-w-[290px] md:max-w-[520px] text-base font-body">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <div className="flex w-fit items-end gap-2 border-b-[1px] border-cyan pb-1">
              <a
                href="google.com"
                className="flex text-sm md:font-body mt-2 text-cyan"
              >
                See how Fylo works
                <img alt="Arrow" className="pl-1 object-none" src={Arrow} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-[8rem] md:px-2 pt-8 gap-10 flex-wrap bg-quotes bg-left-top bg-no-repeat">
          {testimonies.map((testimony, index) => (
            <Card
              key={index}
              name={testimony.name}
              title={testimony.title}
              text={testimony.text}
              image={testimony.image}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center px-6 md:px-20 bg-gradient-to-b from-darkblue2 from-50% to-darkblue-footer to-50% from">
        <div className="flex flex-col items-center bg-darkblue1 py-8 md:py-12 px-8 md:px-[6rem] rounded-lg drop-shadow-2xl md:w-[950px]">
          <p className="text-white text-center text-2xl md:text-6xl font-bold">
            Get early access today
          </p>
          <p className="text-white text-center mt-6 max-w-[290px] md:max-w-[620px] text-base font-body">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div className="flex flex-col w-full mt-10 justify-center items-center md:flex-row gap-4">
            <input
              className="text-sm w-full md:w-[90%] h-12 rounded-full px-8"
              placeholder="
            email@example.com"
            />
            <Button text="Get Started For Free" full={true} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
