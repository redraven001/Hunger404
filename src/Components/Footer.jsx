import React from 'react'
import '../Styles/footer.css'
export default function () {
  return (
    <div id='footer-container'>
        <div id="get-app">
            <span>Get the App on:</span>
                <a href='' className='mx-2'>PlayStore</a>
                <a href=''>AppStore</a>
        </div>
        <div className='d-flex flex-row justify-content-evenly'>
            <div className='heading-item'>Hunger404 Pvt Ltd. Copyright 2026</div>
            <div>
                <span className='heading-item'>Contact us</span>
                <div>Email: hunger404@hungry.com</div>
                <div>Phone: +1234567890</div>
            </div>
            <div>
                <span className='heading-item'>Follow us on</span>
                <div className='d-flex flex-column'>
                    <a href="">Facebook</a>
                    <a href="">Instagram</a>
                    <a href="">Twitter</a>
                    <a href="">Youtube</a>
                </div>
            </div>

        </div>
    </div>
  )
}
