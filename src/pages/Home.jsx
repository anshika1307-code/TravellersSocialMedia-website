// import React, { useState } from 'react';
// import Card from '../components/Home/Card';
// import CardWithBg from '../components/Home/CardWithBg';
// import Footer from '../components/Home/Footer';
// import ImageDescriptionLayout from '../components/Home/ImageDescriptionLayout';
// import SignUpModal from '../components/SignUpModal';
// import SignInModal from '../components/SignInModal';
// function Home() {
//     const [isSignUpOpen, setIsSignUpOpen] = useState(false);
//     const [isSignInOpen, setIsSignInOpen] = useState(false);
//     const toggleSignUp = () => {
//         setIsSignUpOpen(!isSignUpOpen);
//         setIsSignInOpen(false);
//       };
//       const toggleSignIn = () => {
//         setIsSignInOpen(!isSignInOpen);
//         setIsSignUpOpen(false);
//       };
//     const teamMembers = [
//         { name: 'John Doe', role: 'Engineer', image: 'https://via.placeholder.com/150' },
//         { name: 'Jane Smith', role: 'Designer', image: 'https://via.placeholder.com/150' },
//         { name: 'Bob Johnson', role: 'Manager', image: 'https://via.placeholder.com/150' },
//         { name: 'John Doe', role: 'Engineer', image: 'https://via.placeholder.com/150' },
//         { name: 'Jane Smith', role: 'Designer', image: 'https://via.placeholder.com/150' },
//         // { name: 'Bob Johnson', role: 'Manager', image: 'https://via.placeholder.com/150' }
//         // Add more team members as needed
//       ];
    
//       const section3Data = [
//         { imageUrl: 'https://via.placeholder.com/500x300', description: 'Description 1' },
//         { imageUrl: 'https://via.placeholder.com/500x300', description: 'Description 2' },
//         { imageUrl: 'https://via.placeholder.com/500x300', description: 'Description 3' }
//         // Add more data as needed
//       ];
    
//   return (
//     <div className={`relative bg-gray-100 min-h-screen ${isSignUpOpen ? 'overflow-hidden' : ''}`}>
//         {/* nav */}
//         <div className="top-0 left-0 w-full  h-auto text-white p-3 flex justify-between absolute">
//             <div className="">Logo</div>
//             <div>  <button onClick={toggleSignUp}>Sign up</button>
//             <button onClick={toggleSignIn}>Sign In</button>
//             </div>

//         </div>

//         {/* hero */}
//         <div className="min-h-4xl bg-slate-500 shadow-lg overflow-hidden pt-9">
            
//            <div className="text-center px-6 py-8">
//             <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Website</h1>
//             <p className="mt-4 text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//             <button className='mt-4 px-4 py-1 rounded-l bg-slate-950 border text-white'>Click me!</button>
//           </div>
            
//         </div>

//         {/* top profiles */}
//         <div className="max-w-4xl mx-auto mt-12">
//           <h2 className="text-3xl font-bold text-center mb-8">Top  Ghumakkads this week</h2>
//           <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-3">
          
//           {teamMembers.map((member,index) => (
//             <div key={member.id} className={`${index < 3 ? 'block' : 'hidden'} md:block`}>
//               <Card name={member.name} role={member.role} image={member.image} />
//             </div>
//           ))}
//           </div>
//         </div>
         
//          {/* Sign Up Pop-up */}
//          <SignUpModal isOpen={isSignUpOpen} toggleSignUp={toggleSignUp} toggleSignIn={toggleSignIn}/>
//          <SignInModal isOpen={isSignInOpen} toggleSignIn={toggleSignIn}  toggleSignUp={toggleSignUp} />
      
//         {/* top places */}
//         <div className="max-w-6xl mx-auto mt-12">
//         <h2 className="text-3xl font-bold text-center mb-8">Section 2</h2>
//         <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
//           <div>
//             <CardWithBg name="Card 1" imageUrl="https://images.unsplash.com/photo-1483104879057-379b6c2fe5a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
//           </div>
//           <div>
//             <CardWithBg name="Card 2" imageUrl="https://via.placeholder.com/700x300" />
//           </div>
//           <div>
//             <CardWithBg name="Card 3" imageUrl="https://via.placeholder.com/700x300" />
//           </div>
//           <div>
//             <CardWithBg name="Card 3" imageUrl="https://via.placeholder.com/700x300" />
//           </div>
//         </div>
//         </div>

//         {/* Next section */}
//         <ImageDescriptionLayout images={section3Data} />
        
//         {/* footer */}
//         <Footer/>
//     </div>
//   )
// };

// export default Home;




// import React, { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
// import Card from '../components/Home/Card';
// import CardWithBg from '../components/Home/CardWithBg';
// import Footer from '../components/Home/Footer';
// import ImageDescriptionLayout from '../components/Home/ImageDescriptionLayout';
// import SignUpModal from '../components/SignUpModal';
// import SignInModal from '../components/SignInModal';

// import crousel1 from '../images/crousel1.png';

// function Home() {
//     const [isSignUpOpen, setIsSignUpOpen] = useState(false);
//     const [isSignInOpen, setIsSignInOpen] = useState(false);
//     const toggleSignUp = () => {
//         setIsSignUpOpen(!isSignUpOpen);
//         setIsSignInOpen(false);
//     };
//     const toggleSignIn = () => {
//         setIsSignInOpen(!isSignInOpen);
//         setIsSignUpOpen(false);
//     };

//     const teamMembers = [
//         { name: 'John Doe', role: 'Engineer', image: 'https://via.placeholder.com/150' },
//         { name: 'Jane Smith', role: 'Designer', image: 'https://via.placeholder.com/150' },
//         { name: 'Bob Johnson', role: 'Manager', image: 'https://via.placeholder.com/150' },
//         { name: 'John Doe', role: 'Engineer', image: 'https://via.placeholder.com/150' },
//         { name: 'Jane Smith', role: 'Designer', image: 'https://via.placeholder.com/150' },
//         // Add more team members as needed
//     ];

//     const section3Data = [
//         { imageUrl: 'https://via.placeholder.com/500x300', description: 'Description 1' },
//         { imageUrl: 'https://via.placeholder.com/500x300', description: 'Description 2' },
//         { imageUrl: 'https://via.placeholder.com/500x300', description: 'Description 3' }
//         // Add more data as needed
//     ];

//     const carouselImages = [
//         crousel1,
//         'https://via.placeholder.com/800x400',
//         'https://via.placeholder.com/800x400'
//     ];

//     return (
//         <div className={`relative bg-gray-100 min-h-screen ${isSignUpOpen ? 'overflow-hidden' : ''}`}>
//             {/* nav */}
//             <div className="top-0 left-0 w-full h-auto text-white p-3 flex justify-between absolute">
//                 <div className="">Logo</div>
//                 <div>
//                     <button onClick={toggleSignUp}>Sign up</button>
//                     <button onClick={toggleSignIn}>Sign In</button>
//                 </div>
//             </div>

//             {/* hero */}
//             <div className="min-h-4xl bg-slate-500 shadow-lg overflow-hidden pt-9">
//                 <Carousel showThumbs={false} autoPlay infiniteLoop>
//                     {carouselImages.map((src, index) => (
//                         <div key={index}>
//                             <img src={src} alt={`carousel-${index}`} />
//                         </div>
//                     ))}
//                 </Carousel>
//                 <div className="text-center px-6 py-8">
//                     <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Website</h1>
//                     <p className="mt-4 text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                     <button className='mt-4 px-4 py-1 rounded-l bg-slate-950 border text-white'>Click me!</button>
//                 </div>
//             </div>

//             {/* top profiles */}
//             <div className="max-w-4xl mx-auto mt-12">
//                 <h2 className="text-3xl font-bold text-center mb-8">Top Ghumakkads this week</h2>
//                 <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-3">
//                     {teamMembers.map((member, index) => (
//                         <div key={index} className={`${index < 3 ? 'block' : 'hidden'} md:block`}>
//                             <Card name={member.name} role={member.role} image={member.image} />
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Sign Up Pop-up */}
//             <SignUpModal isOpen={isSignUpOpen} toggleSignUp={toggleSignUp} toggleSignIn={toggleSignIn} />
//             <SignInModal isOpen={isSignInOpen} toggleSignIn={toggleSignIn} toggleSignUp={toggleSignUp} />

//             {/* top places */}
//             <div className="max-w-6xl mx-auto mt-12">
//                 <h2 className="text-3xl font-bold text-center mb-8">Section 2</h2>
//                 <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
//                     <div>
//                         <CardWithBg name="Card 1" imageUrl="https://images.unsplash.com/photo-1483104879057-379b6c2fe5a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
//                     </div>
//                     <div>
//                         <CardWithBg name="Card 2" imageUrl="https://via.placeholder.com/700x300" />
//                     </div>
//                     <div>
//                         <CardWithBg name="Card 3" imageUrl="https://via.placeholder.com/700x300" />
//                     </div>
//                     <div>
//                         <CardWithBg name="Card 3" imageUrl="https://via.placeholder.com/700x300" />
//                     </div>
//                 </div>
//             </div>

//             {/* Next section */}
//             <ImageDescriptionLayout images={section3Data} />

//             {/* footer */}
//             <Footer />
//         </div>
//     )
// };

// export default Home;






import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import Card from '../components/Home/Card';
import CardWithBg from '../components/Home/CardWithBg';
import Footer from '../components/Home/Footer';
import ImageDescriptionLayout from '../components/Home/ImageDescriptionLayout';
import SignUpModal from '../components/SignUpModal';
import SignInModal from '../components/SignInModal';

import crousel1 from '../images/crousel1.png';
import crousel2 from '../images/crousel2.jpg';
import crousel3 from '../images/crousel3.jpg';
import topG1 from '../images/topG1.png';
import topG2 from '../images/topG2.png';
import topG3 from '../images/topG3.png';
import topL1 from '../images/topL1.png';
import topL2 from '../images/topL2.png';
import topL3 from '../images/topL3.png';
import H1 from '../images/H1.png';
import H2 from '../images/H2.png';
import H3 from '../images/H3.png';

import logo from '../assets/logo-white.png';

function Home() {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const toggleSignUp = () => {
        setIsSignUpOpen(!isSignUpOpen);
        setIsSignInOpen(false);
    };
    const toggleSignIn = () => {
        setIsSignInOpen(!isSignInOpen);
        setIsSignUpOpen(false);
    };

    const teamMembers = [
        { name: '', role: 'Engineer', image: topG1 },
        { name: 'Gaurav Taneja', image: topG2 },
        { name: 'Mumbiker Nikhil', image: topG3},
        { name: 'Mumbiker Nikhil', image: topG3 },
        { name: 'Flying Beast', image: topG2 },
        // Add more team members as needed
    ];

    const section3Data = [
        { imageUrl: H1, description: 'Get full insight of a persons trip - Their Travel cost, Transportation details , Places they stayed , Food details, overall experience and plan your next trip', heading: 'KNOW EVERYTHING ABOUT OTHERS TRIP' },
        { imageUrl: H2, description: 'Chat with your Fellow Ghumakkads - Ask them about their trips or plan your next trip with them ', heading: 'CONNECT WITH YOUR FELLOW GHUMAKKD' },
        { imageUrl: H3, description: 'Become a Ghumakkad and share your Travel stories with the world', heading: 'SHARE YOUR GHUMI GHUMI STORIES' }
        // Add more data as needed
    ];

    const carouselImages = [
         crousel1,
         crousel2,
         crousel3
    ];

    return (
        <div className={`relative min-h-screen ${isSignUpOpen ? 'overflow-hidden' : ''}`}>
            {/* nav */}
            <div className="absolute top-0 left-0 w-full h-auto text-white p-3 flex justify-between z-20">
                {/* <div className="">Logo</div> */}
                <div className="flex items-center flex-shrink-0 text-white mx-6">
                   {/* Logo */}
                  <img
                    className="w-36"
                    src={logo}
                    alt="Home"
                  />
         {/* <span className="font-semibold text-xl tracking-tight">Logo</span> */}
                </div>
                <div className="flex items-center flex-shrink-0 text-white mx-6">
                    <button>About us</button>
                    <button onClick={toggleSignUp} className='ml-3 cursor-pointer'>Sign up</button>
                    <button onClick={toggleSignIn} className='border border-white p-2 ml-3'>Sign In</button>
                </div>
            </div>

            {/* hero */}
            <div className="relative min-h-4xl shadow-lg overflow-hidden top-0 left-0 h-auto w-full">
                <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
                    {carouselImages.map((src, index) => (
                        <div key={index}>
                            <img src={src} style={{ height: '400px', objectFit: 'cover', filter: 'grayscale(50%) brightness(80%)' }} alt={``} />
                        </div>
                    ))}
                </Carousel>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-8 z-10">
                    <h1 className="text-4xl font-bold text-white">Welcome to Our Website</h1>
                    <p className="mt-4 text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='mt-4 px-4 py-1 rounded bg-slate-950 border text-white'>Click me!</button>
                </div>
            </div>

            {/* top profiles */}
            <div className="max-w-4xl mx-auto mt-12">
                <h2 className="text-3xl text-center mb-8">Top <span className='font-bold'>Ghumakkads</span> this week</h2>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-3">
                    {teamMembers.map((member, index) => (
                        <div key={index} className={`${index < 3 ? 'block' : 'hidden'} md:block`}>
                            <Card name={member.name} image={member.image} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Sign Up Pop-up */}
            <SignUpModal isOpen={isSignUpOpen} toggleSignUp={toggleSignUp} toggleSignIn={toggleSignIn} />
            <SignInModal isOpen={isSignInOpen} toggleSignIn={toggleSignIn} toggleSignUp={toggleSignUp} />

            {/* top places */}
            <div className="max-w-6xl mx-auto mt-12">
                <h2 className="text-3xl text-center mb-8">Most <span className='font-bold'>Visited Places</span> this week</h2>
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-8">
                    <div className='hidden lg:block'>
                        <CardWithBg name="Ladaak" imageUrl="https://images.unsplash.com/photo-1483104879057-379b6c2fe5a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                    <div>
                        <CardWithBg name="Rishikesh" imageUrl= {topL1} />
                    </div>
                    <div>
                        <CardWithBg name="Jaipur" imageUrl={topL2} />
                    </div>
                    <div>
                        <CardWithBg name="Spitivalley" imageUrl={topL3} />
                    </div>
                </div>
            </div>

            {/* Next section */}
            <ImageDescriptionLayout images={section3Data} />

            {/* footer */}
            <Footer />
        </div>
    )
}

export default Home;

