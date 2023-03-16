import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {AiFillLinkedin,AiFillGithub,AiFillInstagram,} from "react-icons/ai"
import {BsTwitch} from "react-icons/bs"

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          

        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
          <h5 className='text-white mb-4'>Help & Contact</h5>
          <div className='footer-links d-flex flex-column'>
            <Link className="text-white py-2 mb-1">Delivery and Returns</Link>
            <Link className="text-white py-2 mb-1">Contact us</Link>
            <Link className="text-white py-2 mb-1">Privacy Policy</Link>
            <Link className="text-white py-2 mb-1">FAQs</Link>
            
            <div className='social_icons d-flex align-items-center gap-30'>
              <a href=''>
              <AiFillLinkedin className='fs-4'/>
              </a>
              
              <a href=''>
              <AiFillGithub className='fs-4'/>
              </a>
              
              <a href=''>
              <AiFillInstagram className='fs-4'/>
              </a>
              
              <a href=''>
              <BsTwitch className='fs-4'/>
              </a>
            

            </div>

            
          </div>
          </div>
          <div className='col-3'>
          <h5 className='text-white mb-4'>About Us</h5>
          <div className='footer-links d-flex flex-column'>

          <Link className="text-white py-2 mb-1">Build Process</Link>
          <Link className="text-white py-2 mb-1">Modern Slavery Statement</Link>
          <Link className="text-white py-2 mb-1">Sustainability</Link>
          </div>
          </div>
          <div className='col-3'>
          <h5 className='text-white mb-4'>Quick Links</h5>
          <div className='footer-links d-flex flex-column'>
            <Link className="text-white py-2 mb-1">Prebuilt</Link>
            <Link className="text-white py-2 mb-1">Keycaps</Link>
            <Link className="text-white py-2 mb-1">Switches</Link>
            <Link className="text-white py-2 mb-1">Accessories</Link>
          </div>
          </div>
          <div className='col-2'>
          <h5 className='text-white mb-4'>Payment & Services</h5>
          <div className='footer-links d-flex flex-column'>
            <Link className="text-white py-2 mb-1">Payment types</Link>
            <Link className="text-white py-2 mb-1">Gift cards</Link>
            <Link className="text-white py-2 mb-1">Voucher Codes</Link>
          </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-6'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <p className='text-center mb-0 text-white'> Mohammed Sadhak  </p>
        </div>
      </div>
    </div>
    </footer>

    
    </>
  )
}

export default Footer