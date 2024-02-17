import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Designer from "./Pages/Designer";
import Dashboard from "./Pages/Panel/dashboard";
import NewArrival from "./Pages/Collections/NewArrival";
import Accessories from "./Pages/Collections/Accessories";
import CLothing from "./Pages/Collections/Clothing";
import DressGowns from "./Pages/Collections/DressGowns";
import DressKneeLength from "./Pages/Collections/DressKneeLength";
import DressMaxi from "./Pages/Collections/DressMaxi";
import DressMini from "./Pages/Collections/DressMini";
import DressMidi from "./Pages/Collections/DressMidi";
import Dresses from "./Pages/Collections/Dresses";
import JumpSuit from "./Pages/Collections/JumpSuit";
import OuterWear from "./Pages/Collections/OuterWear";
import Resale from "./Pages/Collections/Resale";
import Shirts from "./Pages/Collections/Shirts";
import Sweaters from "./Pages/Collections/Sweaters";
import Tops from "./Pages/Collections/Tops";
import Trousers from "./Pages/Collections/Trousers";
import Lending from "./Pages/Panel/Lending";
import Listing from "./Pages/Panel/Listing";
import Messege from "./Pages/Panel/Messege";
import Referral from "./Pages/Panel/Referral";
import Profile from "./Pages/Panel/Profile";
import Account from "./Pages/Panel/Account";
import Wishlist from "./Pages/Panel/Wishlist";
import CookiePolicy from "./Pages/CookiePolicy";
import TermsOfService from "./Pages/TermsOfService";
import Career from "./Pages/Career";
import Edits from "./Pages/Edits";
import HowToLend from "./Pages/HowToLend";
import HowToRent from "./Pages/HowToRent";
import Lender from "./Pages/Lender";
import ListStepOne from "./Pages/ListItems/ListStepOne";
import ListStepOneNext from "./Pages/ListItems/ListStepOneNext";
import ListStepTwo from "./Pages/ListItems/ListStepTwo";
import ListStepTwoNext from "./Pages/ListItems/ListStepTwoNext";
import ListStepThree from "./Pages/ListItems/ListStepThree";
import Membership from "./Pages/Membership";
import SellingOrRenting from "./Pages/SellingOrRenting";
import Sustainability from "./Pages/Sustainability";
import ProductDetail from "./Pages/ProductDetail";
import ListingNew from "./Pages/ListingNew";
import Renting from "./Pages/Panel/Renting";
import SkyEdits from "./Pages/Edits/Sky-Edits";
import NapEdits from "./Pages/Edits/Nap-Edits";
import NitWear from "./Pages/Edits/Nit-Wear";
import WorkwearSuiting from "./Pages/Edits/Workwear-Suiting";
import PartyEdits from "./Pages/Edits/Party-Edits";
import HotCircular from "./Pages/Edits/Hot-On-Circular";
import DayTimeParty from "./Pages/Edits/Day-Time-Party-Edit";
import BlackTie from "./Pages/Edits/Black-Tie-Edit";
import NextBirthday from "./Pages/Edits/Next-Birthday";
import BrideEdit from "./Pages/Edits/Bridal-Edit";
import BridesmaidEdit from "./Pages/Edits/Bridesmaid-Edit";
import MotherBride from "./Pages/Edits/Mother-Bride";
import Contact from "./Pages/Contact/Contact";
import Brands from "./Pages/Brands";
import Buyer from "./Pages/Panel/Buyer";
import Seller from "./Pages/Panel/Seller";
import Community from "./Pages/Community";
import ReferFriend from "./Pages/ReferFriend";
import Press from "./Pages/Press";
import FAQ from "./Pages/FAQ";
import Acler from "./Pages/Brands/Acler";
import Aje from "./Pages/Brands/Aje";
import Alighieri from "./Pages/Brands/Alighieri";
import AmandaUprichard from "./Pages/Brands/Amanda-Uprichard";
import Amur from "./Pages/Brands/Amur";
import Login from "./Pages/AdminPanel/Login";
import AdminMainPage from "./Pages/AdminPanel/AdminMainPage";
import AddProductsAdmin from "./Pages/AdminPanel/AddProductsAdmin";
import AdminPrice from "./Pages/AdminPanel/AdminPrice";
import CompleteAdmin from "./Pages/AdminPanel/CompleteAdmin";
import ViewAdminProducts from "./Pages/AdminPanel/ViewAdminProducts";
import AdminCategory from "./Pages/AdminPanel/AdminCategory";
import AddDesigner from "./Pages/AdminPanel/AddDesigner";
import ProductsType from "./Pages/AdminPanel/ProductsType";

import ForgotPassword from "./Pages/ForgotPassword";
import Sigin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import RegisterWithEmail from "./Pages/RegisterWithEmail";
// Footer Pages
import Return from "./Pages/Return";
import RentalArguments from "./Pages/RentalArguments";
import ATDReward from "./Pages/ATDReward";
import MakeEnquiry from "./Pages/MakeEnquiry";
import PrrivacyAndPolicy from "./Pages/PrivacyAndPolicy";
import Sydney from "./Pages/Sydney";
import Melbourne from "./Pages/Melbourne";
import Brisbane from "./Pages/Brisbane";
import Adelaide from "./Pages/Adelaide";
import Perth from "./Pages/Perth";
import GoldCoast from "./Pages/GoldCoast";
import SiteMap from "./Pages/SiteMap";
import Alemais from "./Pages/Designers/Alemais";

// Header Pages
import Kids from "./Pages/Kids";

import InstaShop from "./Pages/InstaShop";



function ProjectRoutes() {
    return (
        <React.Suspense fallback={<>Loading...</>}>
            <Router>
                <Routes>
                    {/* <Route path="" element={<Home />} />   */}
                    <Route path="/" element={<Home />} />
                    <Route path="/Collections/NewArrival" element={<NewArrival />} />
                    <Route path="/Collections/Accessories" element={<Accessories />} />
                    <Route path="/Collections/Clothing" element={<CLothing />} />
                    <Route path="/Collections/DressGowns" element={<DressGowns />} />
                    <Route path="/Collections/DressKneeLength" element={<DressKneeLength />} />
                    <Route path="/Collections/DressMaxi" element={<DressMaxi />} />
                    <Route path="/Collections/DressMini" element={<DressMini />} />
                    <Route path="/Collections/DressMidi" element={<DressMidi />} />
                    <Route path="/Collections/Dresses" element={<Dresses />} />
                    <Route path="/Collections/JumpSuit" element={<JumpSuit />} />
                    <Route path="/Collections/OuterWear" element={<OuterWear />} />
                    <Route path="/Collections/Resale" element={<Resale />} />
                    <Route path="/Collections/Shirts" element={<Shirts />} />
                    <Route path="/Collections/Sweaters" element={<Sweaters />} />
                    <Route path="/Collections/Tops" element={<Tops />} />
                    <Route path="/Collections/Trousers" element={<Trousers />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Designer" element={<Designer />} />
                    <Route path="/Panel/Dashboard" element={<Dashboard />} />
                    <Route path="/Panel/Lending" element={<Lending />} />
                    <Route path="/Panel/Listing" element={<Listing />} />
                    <Route path="/Panel/Messege" element={<Messege />} />
                    <Route path="/Panel/Referral" element={<Referral />} />
                    <Route path="/Panel/Profile" element={<Profile />} />
                    <Route path="/Panel/Account" element={<Account />} />
                    <Route path="/Panel/Wishlist" element={<Wishlist />} />
                    <Route path="/CookiePolicy" element={<CookiePolicy />} />
                    <Route path="/TermsOfService" element={<TermsOfService />} />
                    <Route path="/Career" element={<Career />} />
                    <Route path="/Edits" element={<Edits />} />
                    <Route path="/HowToLend" element={<HowToLend />} />
                    <Route path="/HowToRent" element={<HowToRent />} />
                    <Route path="/Lender" element={<Lender />} />
                    <Route path="/ListItems/ListStepOne" element={<ListStepOne />} />
                    <Route path="/ListItems/ListStepOneNext" element={<ListStepOneNext />} />
                    <Route path="/ListItems/ListStepTwo" element={<ListStepTwo />} />
                    <Route path="/ListItems/ListStepTwoNext" element={<ListStepTwoNext />} />
                    <Route path="/ListItems/ListStepThree" element={<ListStepThree />} />
                    <Route path="/Membership" element={<Membership />} />
                    <Route path="/SellingorRenting" element={<SellingOrRenting />} />
                    <Route path="/Sustainability" element={<Sustainability />} />
                    <Route path="/ProductDetail" element={<ProductDetail />} />
                    <Route path="/ListingNew" element={<ListingNew />} />
                    <Route path="/Panel/Renting" element={<Renting />} />
                    <Route path="/Panel/Buyer" element={<Buyer />} />
                    <Route path="/Panel/Seller" element={<Seller />} />
                    <Route path="/Edits/Sky-Edits" element={<SkyEdits />} />
                    <Route path="/Edits/Nap-Edits" element={<NapEdits />} />
                    <Route path="/Edits/Nit-Wear" element={<NitWear />} />
                    <Route path="/Edits/Workwear-Suiting" element={<WorkwearSuiting />} />
                    <Route path="/Edits/Party-Edits" element={<PartyEdits />} />
                    <Route path="/Edits/Hot-On-Circular" element={<HotCircular />} />
                    <Route path="/Edits/Day-Time-Party-Edit" element={<DayTimeParty />} />
                    <Route path="/Edits/Black-Tie-Edit" element={<BlackTie />} />
                    <Route path="/Edits/Next-Birthday" element={<NextBirthday />} />
                    <Route path="/Edits/Bride-Edit" element={<BrideEdit />} />
                    <Route path="/Edits/Bridesmaid-Edit" element={<BridesmaidEdit />} />
                    <Route path="/Edits/Mother-Bride" element={<MotherBride />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Brands" element={<Brands />} />
                    <Route path="/Brands/Acler" element={<Acler />} />
                    <Route path="/Brands/Amur" element={<Amur />} />

                    <Route path="/Brands/Aje" element={<Aje />} />
                    <Route path="/Brands/Alighieri" element={<Alighieri />} />
                    <Route path="/Brands/Amanda-Uprichard" element={<AmandaUprichard />} />
                    <Route path="/Community" element={<Community />} />
                    <Route path="/Refer-a-Friend" element={<ReferFriend />} />
                    <Route path="/Press" element={<Press />} />
                    <Route path="/FAQ" element={<FAQ />} />
                    {/* Admin routes  */}
                    <Route path="/AdminPanel/Login" element={<Login />} />
                    <Route path="/AdminPanel/AdminMainPage" element={<AdminMainPage />} />
                    <Route path="/AdminPanel/AddProductsAdmin" element={<AddProductsAdmin />} />
                    <Route path="/AdminPanel/AdminPrice" element={<AdminPrice />} />
                    <Route path="/AdminPanel/CompleteAdmin" element={<CompleteAdmin />} />
                    <Route path="/AdminPanel/ViewAdminProducts" element={<ViewAdminProducts />} />
                    <Route path="/AdminPanel/AdminCategory" element={<AdminCategory />} />
                    <Route path="/AdminPanel/AddDesigner" element={<AddDesigner />} />
                    <Route path="/AdminPanel/Products-Type" element={<ProductsType />} />

                    <Route path="/Forgot-Password" element={<ForgotPassword />} />
                    <Route path="/Signin" element={<Sigin />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/Register-with-email" element={<RegisterWithEmail />} />
                    {/* footer pages */}
                    <Route path="/Return" element={<Return />} />
                    <Route path="/RentalArguments" element={<RentalArguments />} />
                    <Route path="/ATDReward" element={<ATDReward />} />
                    <Route path="/MakeEnquiry" element={<MakeEnquiry />} />
                    <Route path="/Privacy-policy" element={<PrrivacyAndPolicy />} />
                    <Route path="/Sydney" element={<Sydney />} />
                    <Route path="/Melbourne" element={<Melbourne />} />
                    <Route path="/Brisbane" element={<Brisbane />} />
                    <Route path="/Adelaide" element={<Adelaide />} />
                    <Route path="/Perth" element={<Perth />} />
                    <Route path="/GoldCoast" element={<GoldCoast />} />
                    <Route path="/SiteMap" element={<SiteMap />} />
                    <Route path="/Designers/Alemais" element={<Alemais />} />

                    <Route path="/Kids" element={<Kids />} />;
                    <Route path="/InstaShop" element={<InstaShop />} />
                    )



                </Routes >
            </Router >
        </React.Suspense >
    );
}
export default ProjectRoutes;
