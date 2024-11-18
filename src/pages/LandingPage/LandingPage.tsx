import MyFooter from "../../components/footer/MyFooter";
import MyChatBot from "../../components/chatbot/MyChatBot";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./LandingPage.css";
function LandingPage() {
  return (
    <>
      <MyNavbar />

      <div className="section1">
        <div className="text-container">
          <h1 className="title"> o</h1>
          <h2 className="subTitle">
            A student-driven platform by Ateneo de Zamboanga dedicated to
            connecting communities in crisis with volunteers and donors. When
            disasters like typhoons, earthquakes, or other emergencies strike,
            AteneoHelp is here to bridge the gap between those in need and those
            willing to help.
          </h2>
        </div>
        <div className="image-container"></div>
      </div>
      <div
        style={{
          position: "fixed",
          zIndex: 9999,
          right: "0",
          bottom: "0",
        }}
      >
        <MyChatBot />
      </div>
      <MyFooter />
    </>
  );
}

export default LandingPage;
