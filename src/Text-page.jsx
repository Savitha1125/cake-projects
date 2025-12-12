import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './textpage.css';


export default function TextPage() {
  const [expanded, setExpanded] = useState(false);

  const shortText = (
    <>
      <h4 className='fw-normal text-center mt-5 winni'>Winni - India’s No. 1 Brand for Online Delivery of Cakes, Flowers, And Gifts</h4>
      Winni is India’s Number 1 gifting brand with unique gifts for all occasions and relations.
      An e-commerce company that helps you celebrate relations and special occasions like birthdays
      and anniversaries by sending{" "}
      <Link to="/cake" style={{ color: "dodgerblue", textDecoration: "none" }}>
        birthday cake
      </Link>
      , anniversary flowers, Valentine chocolates, wedding gifts plus cakes for your sweet tooth and cake cravings. Winni operates irrespective of geographical barriers to mark your 
      special days - birthdays, anniversaries, festivals such as Diwali, Holi, Christmas, Rakhi occasions like mothers day, valentine day and fathers day in style. You can send your love and wishes 
      to your dear ones miles away as we stand as a shining light for celebrations and heartfelt gestures.
    </>
  );

  const fullText = (
    <>
      {shortText}
      <br /><br />
      Our strong online and offline presence along with our trusted delivery partners has made our service
      reach over 18,000 pin codes across India and more than 40 countries abroad. So far, our exclusive range
      of goodies and online {" "}
      <Link to="/cakes" style={{ color: "dodgerblue", textDecoration: "none" }}>
       Cake delivery
      </Link> services have satisfied over 20 million customers worldwide.
      <br /><br />
      <b className='fs-4 fw-normal'>Pick ‘n’ Mix From Extensive Variety</b><br />
      If you want to add a touch of sweetness to your celebrations, our precisely curated selection of cakes,
      blossoms, and gifts caters to every occasion and emotion.In addition, we are a great partner to remark 
      on special occasions like Valentine’s Day, Mother’s Day, Father’s Day, or Children’s Day.
      <br /><br />
      <b className='fw-normal fs-4'>Cakes - To Celebrate Moments</b><br />
      The party isn’t complete if everyone hasn’t stuffed their face with frosting. Cakes are slices of happiness
      that have the power to transform ordinary moments into extraordinary memories. Also, the world of cakes offers a delightful journey to be explored. Here’s what we dug out for you.
      <br /><br />
      <b className='fw-normal fs-4'>Cakes By Type</b><br/>
      The Winni bakehouse has all types of cake to make it the best centerpiece of your celebration. 
      From personalized Photo Cakes to surprise-filled Pinata Cakes, we have got it all. The Heart-Shaped Cakes are perfect for romantic celebrations. To give you an overview, other than photo cake, pinata
      cake and heart-shaped cake, we have fondant cakes, kids cakes, premium cakes,{" "} 
      <Link to="/cakes" style={{ color: "dodgerblue", textDecoration: "none" }}>
        eggless cakes
      </Link> , and pastries to satisfy your cravings. Winni has all the arrangements in place to {" "}
       <Link to="/cakes" style={{ color: "dodgerblue", textDecoration: "none" }}>
        deliver cakes in Bangalore,
      </Link> 
      Hyderabad, Mumbai, Pune, Delhi, Chennai, Kolkata or for that matter any city and town in india and abroad. <br/><br/>
      <b className='fw-normal fs-4'>Cakes By Flavour</b><br/>
      We boast all cake flavors, ensuring a delectable choice for every dessert lover and taste to suit every celebration.
      To elevate your moments of joy, you can choose from timeless chocolate, delightful pineapple, rich butterscotch,
      classic vanilla, sweet & tangy strawberry, explosive fruits, truffle indulgence, luxurious {" "}
      <Link to="/cakes" style={{ color: "dodgerblue", textDecoration: "none" }}>
        red velvet cake
      </Link>, traditional Rasmalai, ever-popular Black Forest, and many other options.
      These heavenly treats will be the beginning of your ever-lasting memories.<br/><br/>
      <b className='fw-normal fs-4'>Cakes By Occasion</b><br/>
      Still looking for a birthday cake near me? Don’t! Because our delectable cakes are crafted to suit every occasion. Where every slice tells a story, our centerpiece will be the magic. Whether it's for a Birthday celebration, an Anniversary, 
      a dreamy Wedding, a romantic Valentine's Day, a cherished Rakhi festival, a teachers day cake, a New Year's toast, or to embrace Christmas, we have the perfect cake to elevate all of your occasions and festivities.<br/><br/>

      <b className='fw-normal fs-3'>Flowers: To Blossom Love</b><br/>
      Where words touch hearts, flowers reach souls. With their extraordinary ability to convey emotions, the vibrant colors make every moment enchanting especially
      <Link to="/cakes" style={{ color: "dodgerblue", textDecoration: "none" }}>
        rose delivery
      </Link>on valentine's day has the ability to change feelings and create new relations and memories. Just like our relations, they are fragile and beautiful, 
      symbolizing love, elegance, and simplicity. Besides, they represent that relations require the same care as a delicate flower.<br/><br/>

      <b className='fw-normal fs-4'>Flowers By Type</b><br/>
      The florist at Winni has a diverse and exquisite blooming selection catering to every preference and occasion. Whether you're expressing love, conveying sympathy, celebrating milestones, 
      or simply brightening someone's day, our 
       <Link to="/cakes" style={{ color: "dodgerblue", textDecoration: "none" }}>
        flowers
      </Link>can speak the language of your heart. You can create meaningful moments with elegant roses,  graceful Lilies, exotic Orchids, vibrant Gerberas, or the classic Carnations.<br/><br/>
    
      <b className='fw-normal fs-4'>Flowers By Occasion</b><br/>
      It’s imperative to give the right flowers on every occasion. Impressively our array of blooms makes it easy to convey your sentiments, whatever the occasion might be. It could be a celebration like a birthday, anniversary, wedding, or simply to express your feelings of love and affection, sympathy, gratitude, 
      congratulations, or well wishes. Our range of floral arrangements ensures that your message is conveyed with timeless beauty.<br/><br/>
      
      <b className='fw-normal fs-4'>Flowers By Collection</b><br/>
      You can discover the exotic allure of our Exotic Flowers to create an unforgettable impression. Also, the delightful combination of our flower baskets 
      and flower boxes showcases your wishes aesthetically. To win hearts at a single glance, our premium selection of flowers and flower
      bouquets will provide a luxurious heartwarming experience for both the sender and the recipient.<br/><br/>

      <b className='fw-normal fs-4'>Flowers By Color</b><br/>
      Every color of flowers speaks its language of emotions. Therefore, we have crafted a colorful selection that speaks volumes. We have passionate red that signifies love, 
      pink that represents affection, white that symbolizes grace & purity, yellow for a bright life, 
      and the enchanting purple speaking for royalty and success. Whereas, the mixed bouquet blends all colors, expressing a multitude of emotions in one vibrant arrangement.<br/><br/>

      <b className='fw-normal fs-4'>Gifts: Something To Remember You By</b><br/>
      Everyone loves gifts, and of course, the person who gives gifts. They strengthen bonds and create lasting memories. Whether wrapped in colorful paper for a 
      special occasion or shared as a spontaneous gesture, they represent your kind thoughts. To give gifts is to give smiles that can convey sentiments that words often cannot express.<br/><br/>

      <b className='fw-normal fs-4'>Gifts By Type</b><br/>
      Besides flowers and cake, Winni also offers a diverse array of {" "}
      <Link to="/cakes" style={{ color: "dodgerblue", textDecoration: "none" }}>
        gifts
      </Link>that cater to every taste and occasion. To begin with, you can order from a range of Personalized Gifts, Digital Gifts, Home Decor items, Personal Essentials, 
      Photo Frames, Perfumes, Jewelry, Handbags, Caricatures, Soft Toys, and a lot more. With our endless options, you can easily find the perfect token of affection.<br/><br/>

      <b className='fw-normal fs-4'>Gifts By Occasion</b><br/>
      If you are confused about what to gift your loved ones, Winni has a solution. Now, you can browse amazing presents for every imaginable occasion. Be it birthdays, anniversaries, wedding days, Valentine's Day, Rakhi,  New Year, Christmas, Mother's Day, Father's Day, Children's Day, women's day or 
      any other special moment, we have the perfect collection of gifts. With our selection, you can easily find the ideal, unique, and meaningful gifts.<br/><br/>
    
      <b className='fw-normal fs-4'>Gifts By Recipient</b><br/>
      It’s a well-known fact that finding a gift for a man is comparatively tougher than looking for a present for a woman. But here at Winni, you can find gifts suitable for all types of recipients, regardless of gender. 
      Our friendly collection caters to everyone's preferences and tastes. You can choose anything ranging from personalized gifts to trendy and practical items.<br/><br/>
     
      <b className='fw-normal fs-4'>Corporate Gifts</b><br/>
      Apart from catering to individual gifting needs, Winni also understands the importance of corporate gifting. You can order corporate gifts in bulk for various special occasions. It could be a 
      <Link to="/cakes" style={{ color: "dodgerblue", textDecoration: "none" }}>
        Diwali gift
      </Link>, a performance appreciation bonus, or simply a gesture
      of reinforcement for your valued team members. You can choose from a wide section that reflects your brand and appreciation for your employees or clients. This will keep the members actively engaged and foster stronger professional relationships.<br/><br/>
    
      <b className='fw-normal fs-4'>Chocolates: The Edible Luxury</b><br/>
      In the chocolatey world of WInni, you can find a delightful variety of chocolate options to satisfy every craving and occasion. You can taste the exclusive sweetness of White Chocolate, 
      the richness of Dark Chocolate, the crunch of Fruit 'n' Nut Chocolate, and much more at Winni. Moreover, to experience the allure of a sweet personal touch, get your hands on the Winni 
      exclusive Chocolates. They are crafted with the richest flavors and purest love from the best Chocolatiers.<br/>

      Additionally, our artfully arranged Chocolate Bouquets are a perfect presentation of a gift. They create a visual impression of your wishes. Adding an extra layer of fun, explore our captivating shapes and forms of chocolates like egg-shaped chocolates, 
      bunny bunny-shaped chocolates, heart-shaped chocolates, and star-shaped chocolates. If you are a Weight Watcher, you can also indulge in our collection of 
      sugar-free chocolate. In any form, the chocolates at Winni ensure that every bite becomes a moment of pure indulgence<br/><br/>

    </>
  );

  return (
    <>
    <div className="main-wrapper">
      <div className="texts">
        {expanded ? fullText : shortText}
      </div>

      <span
        className="read-toggle-btn"
        onClick={() => setExpanded(!expanded)}
        style={{ color: "DodgerBlue", cursor: "pointer", fontWeight: "500" }}
      >
        {expanded ? "Read Less" : "Read More..."}
      </span>
    </div>
    <div>
    <h4 className='text-center fw-bold mt-5 winni'>
  Recommended latest reads from our Blog
</h4>

<div className="blog-row">

  {/* Item 1 */}
  <div className="blog-item">
    <Link to="new-page" className="blog-link">
      Housewarming Gifts: Your Gift Says Something When
      <span className="blog-subline">Starting a New Life</span>
    </Link>
    <p className='blogs mt-3'>
      There’s a soothing silence and freshness inside a brand-new home. Not empty, exactly, waiting for people to walk around, for boxes all over the place, 
      for the first cup of tea made in the kitchen that’s not quite finished. Anyone who has ever moved into a new home knows this feeling very well, that mix …
    </p>
  </div>

  {/* Item 2 */}
  <div className="blog-item">
    <Link to="new-page" className="blog-link">
      Thanksgiving - The Festival of Gratitude
    </Link>
    <p className='blogs mt-2'>
      The​‍​‌‍​‍‌​‍​‌‍​‍‌ family that sits together after a long hectic day, sharing tiny victories, giving each other loving smiles, or laughing over something silly, has something very comforting to it. 
      Such little moments are what keep reminding us how gratitude is an enormously powerful thing. Thanksgiving, which was initially a harvest festival, is now regarded as …
    </p>
  </div>

  {/* Item 3 */}
  <div className="blog-item">
    <Link to="new-page" className="blog-link">
      Treat Yourself: Top Self-Gifts You Can Order Online In India
      <span className="blog-subline">Right Now</span>
    </Link>
    <p className='bloger mt-2'>
      There is something quite revolutionary happening around the world, as you can see a refreshing shift in how men and women are celebrating success and 
      self worth with self gifts. With the rise in independent incomes and people preferring to live solo or prioritize personal joy, gifting is becoming a beautiful way to honor yourself. …
    </p>
  </div>

</div>
</div>
    <div className="footer-image-for-corporate-desktop backgroundDesktop">
  <div className="row footer-highlights">
    

    <div className="col s12 m12 l4 highlight valign-wrapper">
      <div className="iconContainer">
        <img className="responsive-img1 ms-5 " alt="happy-delivery-icon" src="https://assets.winni.in/groot/2023/07/19/desktop/happy-delivery.png"></img>
      </div>
      <div className="text-container">
        <div className="title">700+ Cities</div>
        <div className="sub-title">Happily Delivering</div>
      </div>
      <div className="vertical-line hide-on-small"></div>
    </div>
    
    <div className="col s12 m12 l4 highlight valign-wrapper">
      <div className="iconContainer">
        <img className="responsive-img truck" alt="secure-payment" src="https://assets.winni.in/groot/2023/07/19/desktop/secure-payment.png"></img>
      </div>
      <div className="text-container">
        <div className="title">100% Secure Payments</div>
        <div className="sub-title">All Major Credit & Debit Cards Accepted</div>
      </div>
    </div>

   
    <div className="col s12 m12 l4 highlight valign-wrapper">
      <div className="iconContainer">
        <img className="responsive-img" alt="customer-across" src="https://assets.winni.in/groot/2023/07/19/desktop/customer-across-the-world.png"></img>
      </div>
      <div className="text-container">
        <div className="title">20,000,000</div>
        <div className="sub-title">Customers Across The World</div>
      </div>
    </div>

  </div>
</div>

    </>
    
  );
}
