import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, Battery, Cpu, Smartphone, ShoppingCart, LucideCircleArrowOutUpLeft, ArrowBigLeftDashIcon, ArrowUpLeftFromCircleIcon, ArrowRight, AlignRightIcon, CornerLeftDownIcon, IndianRupee } from 'lucide-react';

function Home() {
  return (
    <div>
      <div className="hero-section text-white d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-4 mb-4">Welcome to EasyBuy</h1>
          <p className="lead mb-4">
            Smart Shopping, Safer Transactions - Because You Deserve the Best!
            Your Perfect Shopping Destination!
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/customer-login" className="btn btn-primary btn-lg">
              Customer Portal
            </Link>
            <Link to="/dealer-login" className="btn btn-outline-light btn-lg">
              Dealer Portal
            </Link>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-5">Why To Choose EasyBuy?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <ShoppingCart size={48} className="mb-3 text-primary" />
                <h3 className="card-title">Immersive Shopping</h3>
                <p className="card-text">
                  AR/VR for real-time product exploration and experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <IndianRupee size={48} className="mb-3 text-primary" />
                <h3 className="card-title">Secure Payments</h3>
                <p className="card-text">
                  Safe, hassle-free transactions with advanced encryption.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <CornerLeftDownIcon size={48} className="mb-3 text-primary" />
                <h3 className="card-title">Seamless Convenience</h3>
                <p className="card-text">
                  Fast, user-friendly shopping with smart recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Join the EasyBuy </h2>
              <p className="lead">
              Shop Smart, Pay Securely, Experience the Future!
              Enjoy secure payments,and seamless convenience all in one place.
              Say goodbye to worries and hello to effortless online shopping! 
              Discover, try, and buy with confidence. 
              EasyBuy - Where Innovation Meets Trust! 🚀🛍 Shop now and redefine your shopping experience!

              </p>
              <Link to="/customer-login" className="btn btn-primary">
                Get Started Today
              </Link>
            </div>
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1550376026-33cbee34f79e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="E-waste recycling"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;