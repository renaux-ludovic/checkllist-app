// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Menu from "./pages/menu";
// import List1 from "./pages/list1";
// import List2 from "./pages/list2";
// import List3 from "./pages/list3";
// import List4 from "./pages/list4";

// function App() {
//   const [buttonVisible, setButtonVisible] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const handleInstallClick = () => {
//     if (window.deferredPrompt) {
//       window.deferredPrompt.prompt();
//       window.deferredPrompt.userChoice.then((choiceResult) => {
//         if (choiceResult.outcome === "accepted") {
//           console.log("L'utilisateur a accepté l'installation.");
//         } else {
//           console.log("L'utilisateur a refusé l'installation.");
//         }
//         window.deferredPrompt = null;
//         setButtonVisible(false);
//       });
//     }
//   };

//   useEffect(() => {
//     const handleBeforeInstallPrompt = (e) => {
//       e.preventDefault();
//       window.deferredPrompt = e;
//       setTimeout(() => {
//         setButtonVisible(true);
//         setLoading(false);
//       }, 2000);
//     };

//     window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);

//     return () => {
//       window.removeEventListener(
//         "beforeinstallprompt",
//         handleBeforeInstallPrompt
//       );
//     };
//   }, []);

//   return (
//     <div className="App">
//       {loading ? (
//         <p>Chargement en cours...</p>
//       ) : buttonVisible ? (
//         <button onClick={handleInstallClick}>Installer</button>
//       ) : window.deferredPrompt ? null : (
//         <Router>
//           <Routes>
//             <Route path="/checklist-test/*" element={<Menu />} />
//             <Route path="/checklist-test/list-1" element={<List1 />} />
//             <Route path="/checklist-test/list-2" element={<List2 />} />
//             <Route path="/checklist-test/list-3" element={<List3 />} />
//             <Route path="/checklist-test/list-4" element={<List4 />} />
//           </Routes>
//         </Router>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./pages/menu/menu";
import List1 from "./pages/lists/list1";
import List2 from "./pages/lists/list2";
import List3 from "./pages/lists/list3";
import List4 from "./pages/lists/list4";

function App() {
  const [buttonVisible, setButtonVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleInstallClick = () => {
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt();
      window.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("L'utilisateur a accepté l'installation.");
        } else {
          console.log("L'utilisateur a refusé l'installation.");
        }
        window.deferredPrompt = null;
        setButtonVisible(false);
      });
    }
  };

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      window.deferredPrompt = e;
      setTimeout(() => {
        setButtonVisible(true);
        setLoading(false);
      }, 2000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  return (
    <div className="App">
      {loading ? (
        <>
          <div className="home-container">
            <p>Chargement en cours...</p>
          </div>
        </>
      ) : buttonVisible ? (
        <>
          <div className="home-container">
            <button onClick={handleInstallClick} className="button">
              INSTALLER L' APPLICATION
            </button>
          </div>
        </>
      ) : window.deferredPrompt ? null : (
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/list-1" element={<List1 />} />
          <Route path="/list-2" element={<List2 />} />
          <Route path="/list-3" element={<List3 />} />
          <Route path="/list-4" element={<List4 />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
