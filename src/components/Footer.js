import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {AiFillLinkedin,AiFillGithub,AiFillInstagram,} from "react-icons/ai"
import {BsTwitch} from "react-icons/bs"

const Footer = () => {
  return (
    <>
    <footer className='aa22'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          

        </div>
      </div>
    </footer>
    <footer className='aa22'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
          <h5 className='text-white marginB4'>Help & Contact</h5>
          <div className='footer-links d-flex flex-column'>
            <Link className="tw paddingtb marginB1">Delivery and Returns</Link>
            <Link className="tw paddingtb marginB1">Contact us</Link>
            <Link className="tw paddingtb marginB1">Privacy Policy</Link>
            <Link className="tw paddingtb marginB1">FAQs</Link>
            
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
          <h5 className='tw marginB4'>About Us</h5>
          <div className='footer-links d-flex flex-column'>

          <Link to = "./buildprocess" className="tw paddingtb marginB1">Keyboard Guide</Link>
          <Link className="tw paddingtb marginB1">Modern Slavery Statement</Link>
          <Link className="tw paddingtb marginB1">Sustainability</Link>
          </div>
          </div>
          <div className='col-3'>
          <h5 className='tw marginB4'>Quick Links</h5>
          <div className='footer-links d-flex flex-column'>
          <Link to = "./Filter/keyboards" className="tw paddingtb marginB1">Keyboards</Link>
            <Link to = "./Filter/keycaps"className="tw paddingtb marginB1">Keycaps</Link>
            <Link to = "./Filter/switches"className="tw paddingtb marginB1">Switches</Link>
            <Link to = "./Filter/Accessories"className="tw paddingtb marginB1">Accessories</Link>
          </div>
          </div>
          <div className='col-2'>
          <h5 className='tw marginB4'>Payment & Services</h5>
          <div className='footer-links d-flex flex-column'>
            <Link className="tw paddingtb marginB1">Payment types</Link>
            <Link className="tw paddingtb marginB1">Gift cards</Link>
            <Link className="tw paddingtb marginB1">Voucher Codes</Link>
          </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-6'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <p className='text-center mb-0 tw'> Mohammed Sadhak  </p>
        </div>
      </div>
    </div>
    </footer>

    
    </>
  )
}

export default Footer