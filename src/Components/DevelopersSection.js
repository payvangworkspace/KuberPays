// import React, { useEffect, useState } from 'react';
// import Navbar from './Navbar';
// import { DeveloperBanner } from './DeveloperBanner';
// // import IntegrationSection from './IntegrationSection';
// // import BusinessCreateAccount from './BusinessCreateAccount';
// import Footer from './Footer';
// import Loader from './Loader'; // Assuming Loader component is available

// export const DeveloperSection = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     document.title = "KivaPays - Developers";

//     // Simulating a small delay before showing content
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000); // 1 second delay (adjust as needed)
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <Loader /> // Show loader while content is loading
//       ) : (
//         <>
//           <Navbar />
//           <DeveloperBanner />
//           <IntegrationSection />
//           <BusinessCreateAccount />
//           <Footer />
//         </>
//       )}
//     </>
//   );
// };
