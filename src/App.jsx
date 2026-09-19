import { useState } from "react";
import "./App.css";
import couple1 from "./assets/images/couple1.jpeg";
import couple2 from "./assets/images/couple2.jpeg";

function App() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.trim().toLowerCase() === "nanna") {
      setPage(1);
      setError("");
    } else {
      setError("That's not it... try again ❤️");
      setPassword("");
    }
  };

  const nextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  // PAGE 0 — PASSWORD
  if (page === 0) {
    return (
      <main className="page password-screen">
        <div className="stars"></div>
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>

        <div className="password-container">
          <div className="moon">☾</div>

          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Enter password"
              autoComplete="off"
            />

            <p className="hint">
              Hint: <span>The name I'll call you.</span>
            </p>

            {error && <p className="error">{error}</p>}

            <button type="submit" className="unlock-button">
              Enter
            </button>
          </form>
        </div>
      </main>
    );
  }

  // PAGE 1 — BIRTHDAY REVEAL
  if (page === 1) {
    return (
      <main className="page birthday-page">
        <div className="stars"></div>
        <div className="moon-large">☾</div>

        <div className="page-content reveal-content">
          <h1>
            Happy Birthday
            <span>Nanna ❤️</span>
          </h1>

          <button className="main-button" onClick={nextPage}>
            Come with me <span>→</span>
          </button>
        </div>
      </main>
    );
  }

  // PAGE 2 — SPECIAL MOMENTS
  if (page === 2) {
    return (
      <main className="page memories-page">
        <div className="stars"></div>

        <div className="page-content memories-content">
          <p className="section-label">For you, Nanna</p>

          <h2>
            The little things
            <span>mean the most.</span>
          </h2>

          <div className="memory-list">
            <div className="memory-item">
              <span>01</span>
              <p>
                Manam bayatiki vellina prathi sari every minute every second naku chala special.
              </p>
            </div>

            <div className="memory-item">
              <span>02</span>
              <p>
                Prathi situation ni chala clear ga explain chesthav, future lo ela undalo chepthav,
                Chala mature ga alochisthav I love that😘.
              </p>
            </div>

            <div className="memory-item">
              <span>03</span>
              <p>I love the way you care.</p>
            </div>

            <div className="memory-item">
              <span>04</span>
              <p>I love the way you look at me.</p>
            </div>

            <div className="memory-item">
              <span>05</span>
              <p>
                Nuv Navvithe chala baguntav Abhayi,
                Eppudu ala navvuthune undu.
              </p>
            </div>
          </div>

          <button className="main-button" onClick={nextPage}>
            There's more <span>↓</span>
          </button>
        </div>
      </main>
    );
  }

  // PAGE 3 — LETTER PAGE 1
  if (page === 3) {
    return (
      <main className="page letter-page">
        <div className="stars"></div>

        <div className="letter-content">
          <p className="section-label">A letter for you</p>

          <div className="letter-lines">
            <p className="letter-line line-1">Nanna,</p>

            <p className="letter-line line-2">
              Maybe I won't be with you for my entire life.
            </p>

            <p className="letter-line line-3">
              But for every day that I am in your life,
              <br />
              I don't want to lose you.
            </p>

            <p className="letter-line line-4">
              Nuvvu sarigga naatho matladakapothe ne nenu thattukolenu,
              Nanna.
            </p>

            <p className="letter-line line-5">
              Nijam cheppali ante...
              <br />
              ninnu ishtapadinantha ga nenu inthavaraku
              <br />
              evarini ishtapadaledhu.
            </p>
          </div>

          <button className="main-button letter-button" onClick={nextPage}>
            Continue <span>→</span>
          </button>
        </div>
      </main>
    );
  }

  // PAGE 4 — LETTER PAGE 2 + COUPLE PHOTO 1
  if (page === 4) {
    return (
      <main className="page letter-page">
        <div className="stars"></div>

        <div className="letter-content">
          <p className="section-label">A little more</p>

          <div className="letter-lines">
            <p className="letter-line line-1">
              Neeku naa prema lo konchame telusu.
            </p>

            <p className="letter-line line-2">
              Parichayam ayina kothalo alane untadhi ani nuvvu anukuntavemo...
              <br />
              but I know what I feel inside.
            </p>

            <p className="letter-line line-3">
              Na feelings ento naaku telusu.
            </p>

            {/* COUPLE PHOTO 1 */}
            <div className="letter-photo photo-one">
              <img src={couple1} alt="A special memory of us" />
            </div>

            <p className="letter-line line-4">
              Nuvvu naatho life long undalevu ani naaku telusu.
              <br />
              Manam eppati varaku kalisi untamo,
              <br />
              appati varaku nenu untanu, Nanna.
            </p>

            <p className="letter-line line-5">
              And when you leave,
              <br />
              Germanu vellipoyi akkade settle ayipothanu,
              <br />
              and maybe never come back to India.
            </p>
          </div>

          <button className="main-button letter-button" onClick={nextPage}>
            Continue <span>→</span>
          </button>
        </div>
      </main>
    );
  }

  // PAGE 5 — LETTER PAGE 3 + COUPLE PHOTO 2
  if (page === 5) {
    return (
      <main className="page letter-page">
        <div className="stars"></div>

        <div className="letter-content">
          <p className="section-label">One thing I want to say</p>

          <div className="letter-lines">
            <p className="letter-line line-1">
              But there is one thing I really want to say.
            </p>

            <p className="letter-line line-2">
              Monna nenu cheppina abaddham intentional ga cheppindhi kaadhu,
              Nanna.
            </p>

            <p className="letter-line line-3">
              Nenu ippati varaku neeku abaddham cheppaledhu.
              <br />
              Aa situation lo ala cheppesa.
            </p>

            <p className="letter-line line-4">
              I'm really, really sorry for that.
            </p>

            <p className="letter-line line-5">
              Adi naa life motham regret feel ayye vishayam.
            </p>

            {/* COUPLE PHOTO 2 */}
            <div className="letter-photo photo-two">
              <img src={couple2} alt="Another special memory of us" />
            </div>

            <p className="letter-line line-6">Anyways...</p>

            <p className="letter-line line-7">
              I know I'll miss you in the future.
            </p>

            <p className="letter-line line-8">Anyways I love you</p>

            <p className="letter-line line-9">
              Nenu nee nunchi "love you too" expect cheyyatledhu.
            </p>

            <p className="letter-line line-10">But vidipoyelopu...</p>

            <p className="letter-line special-line">
              okkasari ayina chepthe vinalani undhi🥺
              ippude kadhu le manam vidipoyelopu chepthe vinalani undhi neek istam ayithene cheppu.
            </p>

            <p className="letter-line line-12">That's all.</p>
          </div>

          <button className="main-button letter-button" onClick={nextPage}>
            One last thing <span>↓</span>
          </button>
        </div>
      </main>
    );
  }

  // PAGE 6 — FINAL BIRTHDAY WISH
  if (page === 6) {
    return (
      <main className="page wish-page">
        <div className="stars"></div>

        <div className="wish-content">
          <p className="section-label">My birthday wish for you</p>

          <h2>
            Happy Birthday,
            <span>Nanna ❤️</span>
          </h2>

          <div className="wish-lines">
            <p className="wish-line line-1">
              Nuvvu ilanti birthdays inka enno celebrate chesukovali💗
            </p>

            <p className="wish-line line-2">
              Next birthday ki nuvvu pedda hero vi ayipothav ani anukuntunna,
              Pakka avuthav. I know that🫂
            </p>

            <p className="wish-line line-3">
              Ee prapancham lo unna motham manchi antha neeke jaragalani
              korukuntunna, Nanna🥺
            </p>

            <p className="wish-line line-4">You know what?</p>

            <p className="wish-line line-5">
              Every time I pray to God...
              <br />
              my first prayer is about you.
              <br />
              I prayed for your happiness.
            </p>

            <p className="wish-line line-6">
              I prayed for your success.
            </p>

            <p className="wish-line line-7">
              I prayed that you would become everything you've dreamed of
              becoming.
            </p>

            <p className="wish-line line-8">And I still do☺️.</p>

            <p className="wish-line line-9">
              I want to see you become a big hero.
            </p>

            <p className="wish-line line-10">
              I want to see you achieve everything you've ever wanted.
              <br />
              And even if one day I am no longer beside you to see it...
            </p>

            <p className="wish-line line-11">
              I'll always be proud of the person you are💗
              <br />
              and even more proud of the person you're going to become.
            </p>

            <p className="wish-line line-12">
              And one day, when you look back at everything you've achieved...
            </p>

            <p className="wish-line line-13">
              I hope you remember that there was someone who genuinely
              believed in you from the beginning🥺.
            </p>

            <p className="wish-line line-14">
              And when that day comes...
              <br />
              you look back and remember that someone once prayed for you
              before she even prayed for herself.
            </p>

            <p className="wish-line final-birthday">
              Happy Birthday, Nanna. ❤️
            </p>

            <p className="wish-line line-16">
              May you get everything you've ever wished for🫂.
            </p>

            <p className="wish-line line-17">
              And may life always be kind to you.
            </p>
          </div>

          <button className="main-button letter-button" onClick={nextPage}>
            ❤️ <span>→</span>
          </button>
        </div>
      </main>
    );
  }

  // PAGE 7 — ENDING
  return (
    <main className="page ending-page">
      <div className="stars"></div>

      <div className="ending-content">
        <div className="ending-heart">❤️</div>

        <p>That's all...</p>

        <h2>
          Happy Birthday,
          <span>Nanna.</span>
        </h2>

        <div className="ending-line"></div>
      </div>
    </main>
  );
}

export default App;