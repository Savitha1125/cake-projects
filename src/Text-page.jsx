import React from 'react'
import { Link } from 'react-router-dom';

export default function TextPage() {
  return (
      <div>
            <h5 className='fw-normal text-center mt-5'>Winni - India’s No. 1 Brand for Online Delivery of Cakes, Flowers, And Gifts</h5>
            <p className='ms-5 ms-sm-5 ms-md-5 ms-lg-12 ms-xl-7'>Winni is India’s Number 1 gifting brand with unique gifts for all occasions and relations. An e-commerce company that helps you celebrate relations and special occasions like birthdays and anniversaries by sending {""}
             <span style={{ color: "DodgerBlue", cursor: "pointer" }}>
            <Link to="/cake" style={{ color: "blue", textDecoration: "none" }}>birthday cake
            </Link></span> , anniversary flowers, Valentine chocolates, wedding gifts plus cakes for your sweet tooth and cake cravings. Winni operates irrespective of geographical barriers to mark your special days - birthdays, anniversaries, festivals such as Diwali, Holi, Christmas, Rakhi occasions like mothers day, valentine day and fathers day in style. You can send your love and wishes to your dear ones miles away as we stand as a shining light for celebrations and heartfelt gestures.</p>
      </div>
   
  )
}
