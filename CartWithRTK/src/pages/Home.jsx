import { Header } from "../components/Header";
const Home = () => {
  return (
    <>
    <Header/>
    <div className="home-hero">
      <div className="hero-content">
        <h3 className="small-text">BUILD AN ECOMMERCE WEBSITE</h3>
        <h1 className="main-headline">Start selling immediately.<br />Grow without limits.</h1>
        <p className="sub-text">
          Get everything you need to build, run and scale your business—on one unified platform.
        </p>
        <button className="cta-btn">Create Your Store</button>
      </div>
    </div>
    </>
  );
};

export default Home;
